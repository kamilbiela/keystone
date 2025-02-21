import type { MaybePromise } from '../utils'
import type { KeystoneContext } from '../context'
import type { BaseListTypeInfo } from '../type-info'

export type BaseAccessArgs<ListTypeInfo extends BaseListTypeInfo> = {
  context: KeystoneContext<ListTypeInfo['all']>
  session?: ListTypeInfo['all']['session']
  listKey: ListTypeInfo['key']
}

export type AccessOperation = 'create' | 'query' | 'update' | 'delete'
export type FilterOperation = 'query' | 'update' | 'delete'
export type ItemOperation = 'create' | 'update' | 'delete'

export type ListOperationAccessControl<
  Operation extends AccessOperation,
  ListTypeInfo extends BaseListTypeInfo,
> = (args: BaseAccessArgs<ListTypeInfo> & { operation: Operation }) => MaybePromise<boolean>

export type ListFilterAccessControl<
  Operation extends FilterOperation,
  ListTypeInfo extends BaseListTypeInfo,
> = (
  args: BaseAccessArgs<ListTypeInfo> & { operation: Operation }
) => MaybePromise<boolean | ListTypeInfo['inputs']['where']>

export type ListItemAccessControl<
  Operation extends ItemOperation,
  ListTypeInfo extends BaseListTypeInfo,
> = (
  args: BaseAccessArgs<ListTypeInfo> &
    {
      create: {
        operation: 'create'

        /**
         * The input passed in from the GraphQL API
         */
        inputData: ListTypeInfo['inputs']['create']
      }
      update: {
        operation: 'update'

        /**
         * The input passed in from the GraphQL API
         */
        inputData: ListTypeInfo['inputs']['update']

        /**
         * The item being updated
         */
        item: ListTypeInfo['item']
      }
      delete: {
        operation: 'delete'

        /**
         * The item being deleted
         */
        item: ListTypeInfo['item']
      }
    }[Operation]
) => MaybePromise<boolean>

export type CreateListItemAccessControl<ListTypeInfo extends BaseListTypeInfo> =
  ListItemAccessControl<'create', ListTypeInfo>
export type UpdateListItemAccessControl<ListTypeInfo extends BaseListTypeInfo> =
  ListItemAccessControl<'update', ListTypeInfo>
export type DeleteListItemAccessControl<ListTypeInfo extends BaseListTypeInfo> =
  ListItemAccessControl<'delete', ListTypeInfo>

type ListAccessControlFunction<ListTypeInfo extends BaseListTypeInfo> = (
  args: BaseAccessArgs<ListTypeInfo> & { operation: AccessOperation }
) => MaybePromise<boolean>

type ListAccessControlObject<ListTypeInfo extends BaseListTypeInfo> = {
  // these functions should return `true` if access is allowed or `false` if access is denied.
  operation:
    | ListOperationAccessControl<AccessOperation, ListTypeInfo>
    | {
        query: ListOperationAccessControl<'query', ListTypeInfo>
        create: ListOperationAccessControl<'create', ListTypeInfo>
        update: ListOperationAccessControl<'update', ListTypeInfo>
        delete: ListOperationAccessControl<'delete', ListTypeInfo>
      }

  // The 'filter' rules can return either:
  // - a filter. In this case, the operation can proceed, but the filter will be additionally applied when updating/reading/deleting
  //   which may make it appear that some of the items don't exist.
  // - boolean true/false. If false, treated as a filter that never matches.
  filter?: {
    query?: ListFilterAccessControl<'query', ListTypeInfo>
    // create?: not supported
    update?: ListFilterAccessControl<'update', ListTypeInfo>
    delete?: ListFilterAccessControl<'delete', ListTypeInfo>
  }

  // These rules are applied to each item being operated on individually. They return `true` or `false`,
  // and if false, an access denied error will be returned for the individual operation.
  item?: {
    // read?: not supported // TODO: why not
    create?: ListItemAccessControl<'create', ListTypeInfo>
    update?: ListItemAccessControl<'update', ListTypeInfo>
    delete?: ListItemAccessControl<'delete', ListTypeInfo>
  }
}

// List level access control lets you set permissions on the autogenerated CRUD API for each list.
//
// * `operation` access lets you check the information in the `context` and `session` objects to decide if the
// user is allow to access the list.
// * `filter` access lets you provide a GraphQL filter which defines the items the user is allowed to access.
// * `item` access lets you write a function which inspects the provided input data and the existing object (if it exists)
// and make a decision based on this extra data.
//
// If access is denied due to any of the access control methods then the following response will be returned from the GraphQL API:
//   Mutations:
//     - Single operations will return `null` and return an access denied error
//     - Multi operations will return a data array with `null` values for the items which have access denied.
//       Access denied errors will be return for each `null` items.
//   Queries:
//     - Single item queries will return `null` with no errors.
//     - Many item queries will filter out those items which have access denied, with no errors.
//     - Count queries will only count those items for which access is not denied, with no errors.
//
export type ListAccessControl<ListTypeInfo extends BaseListTypeInfo> =
  | ListAccessControlFunction<ListTypeInfo>
  | ListAccessControlObject<ListTypeInfo>

// Field Access
export type IndividualFieldAccessControl<Args> = (args: Args) => MaybePromise<boolean>

export type FieldCreateItemAccessArgs<ListTypeInfo extends BaseListTypeInfo> =
  BaseAccessArgs<ListTypeInfo> & {
    operation: 'create'
    fieldKey: string
    /**
     * The input passed in from the GraphQL API
     */
    inputData: ListTypeInfo['inputs']['create']
  }

export type FieldReadItemAccessArgs<ListTypeInfo extends BaseListTypeInfo> =
  BaseAccessArgs<ListTypeInfo> & {
    operation: 'read'
    fieldKey: string
    /**
     * The item being read
     */
    item: ListTypeInfo['item']
  }

export type FieldUpdateItemAccessArgs<ListTypeInfo extends BaseListTypeInfo> =
  BaseAccessArgs<ListTypeInfo> & {
    operation: 'update'
    fieldKey: string
    /**
     * The item being updated
     */
    item: ListTypeInfo['item']
    /**
     * The input passed in from the GraphQL API
     */
    inputData: ListTypeInfo['inputs']['update']
  }

export type FieldAccessControl<ListTypeInfo extends BaseListTypeInfo> =
  | IndividualFieldAccessControl<
      | FieldReadItemAccessArgs<ListTypeInfo>
      | FieldCreateItemAccessArgs<ListTypeInfo>
      | FieldUpdateItemAccessArgs<ListTypeInfo>
      // delete: not supported
    >
  | {
      read?: IndividualFieldAccessControl<FieldReadItemAccessArgs<ListTypeInfo>>
      create?: IndividualFieldAccessControl<FieldCreateItemAccessArgs<ListTypeInfo>>
      update?: IndividualFieldAccessControl<FieldUpdateItemAccessArgs<ListTypeInfo>>
      // delete: not supported
    }
