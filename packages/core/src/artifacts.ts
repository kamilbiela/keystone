import fs from 'node:fs/promises'
import path from 'node:path'
import type { ChildProcess } from 'node:child_process'

import { printSchema } from 'graphql'
import { getGenerators, formatSchema } from '@prisma/internals'
import { ExitError } from './scripts/utils'
import { initialiseLists } from './lib/core/initialise-lists'
import { type System, getSystemPaths } from './lib/createSystem'
import { printPrismaSchema } from './lib/core/prisma-schema-printer'
import { printGeneratedTypes } from './lib/typescript-schema-printer'

export function getFormattedGraphQLSchema(schema: string) {
  return (
    '# This file is automatically generated by Keystone, do not modify it manually.\n' +
    '# Modify your Keystone config when you want to change this.\n\n' +
    schema +
    '\n'
  )
}

async function readFileOrUndefined(path: string) {
  try {
    return await fs.readFile(path, 'utf8')
  } catch (err: any) {
    if (err.code === 'ENOENT') return
    throw err
  }
}

export async function validateArtifacts(cwd: string, system: System) {
  const paths = system.getPaths(cwd)
  const artifacts = await getArtifacts(system)
  const [writtenGraphQLSchema, writtenPrismaSchema] = await Promise.all([
    readFileOrUndefined(paths.schema.graphql),
    readFileOrUndefined(paths.schema.prisma),
  ])

  if (writtenGraphQLSchema !== artifacts.graphql && writtenPrismaSchema !== artifacts.prisma) {
    console.error('Your Prisma and GraphQL schemas are not up to date')
    throw new ExitError(1)
  }

  if (writtenGraphQLSchema !== artifacts.graphql) {
    console.error('Your GraphQL schema is not up to date')
    throw new ExitError(1)
  }

  if (writtenPrismaSchema !== artifacts.prisma) {
    console.error('Your Prisma schema is not up to date')
    throw new ExitError(1)
  }
}

export async function getArtifacts(system: System) {
  const lists = initialiseLists(system.config)
  const prismaSchema = await formatSchema({
    schemas: [[system.config.db.prismaSchemaPath, printPrismaSchema(system.config, lists)]],
  })

  return {
    graphql: getFormattedGraphQLSchema(printSchema(system.graphQLSchema)),
    prisma: prismaSchema[0][1],
  }
}

export async function generateArtifacts(cwd: string, system: System) {
  const paths = getSystemPaths(cwd, system.config)
  const artifacts = await getArtifacts(system)
  await fs.writeFile(paths.schema.graphql, artifacts.graphql)
  await fs.writeFile(paths.schema.prisma, artifacts.prisma)
  return artifacts
}

export async function generateTypes(cwd: string, system: System) {
  const paths = getSystemPaths(cwd, system.config)
  const schema = printGeneratedTypes(
    paths.types.relativePrismaPath,
    system.graphQLSchemaSudo,
    system.lists
  )
  await fs.mkdir(path.dirname(paths.schema.types), { recursive: true })
  await fs.writeFile(paths.schema.types, schema)
}

export async function generatePrismaClient(cwd: string, system: System) {
  const paths = getSystemPaths(cwd, system.config)
  const generators = await getGenerators({
    schemaPath: paths.schema.prisma,
  })

  await Promise.all(
    generators.map(async generator => {
      try {
        await generator.generate()
      } finally {
        const closePromise = new Promise<void>(resolve => {
          const child = (generator as any).generatorProcess.child as ChildProcess
          child.once('exit', () => {
            resolve()
          })
        })
        generator.stop()
        await closePromise
      }
    })
  )
}
