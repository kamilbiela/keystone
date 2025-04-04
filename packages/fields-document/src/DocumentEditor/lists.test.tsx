/** @jest-environment jsdom */
/** @jsxRuntime classic */
/** @jsx jsx */
import { nestList, toggleList } from './lists-shared'
import { jsx, makeEditor } from './tests/utils'

test('ordered list shortcut', () => {
  const editor = makeEditor(
    <editor>
      <paragraph>
        <text>
          1.
          <cursor />
        </text>
      </paragraph>
    </editor>
  )

  editor.insertText(' ')
  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('unordered list shortcut - ', () => {
  const editor = makeEditor(
    <editor>
      <paragraph>
        <text>
          -
          <cursor />
        </text>
      </paragraph>
    </editor>
  )

  editor.insertText(' ')
  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('unordered list shortcut * ', () => {
  const editor = makeEditor(
    <editor>
      <paragraph>
        <text>
          *
          <cursor />
        </text>
      </paragraph>
    </editor>
  )

  editor.insertText(' ')
  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('direct sibling lists of the same type are merged', () => {
  const editor = makeEditor(
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>some text</text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>some more text</text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>some more text</text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text>
          <cursor />
        </text>
      </paragraph>
    </editor>,
    { normalization: 'normalize' }
  )

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
            </text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              some more text
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              some more text
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text>
          <cursor />
        </text>
      </paragraph>
    </editor>
  `)
})

test('inserting a break on end of list in empty list item exits list', () => {
  const editor = makeEditor(
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>some text</text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  editor.insertBreak()

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text>
          <cursor />
        </text>
      </paragraph>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('inserting a break in empty list item in the middle of a list splits and exits', () => {
  const editor = makeEditor(
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>some text</text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              <cursor />
            </text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>some text</text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  editor.insertBreak()

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text>
          <cursor />
        </text>
      </paragraph>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('toggle list on empty line', () => {
  const editor = makeEditor(
    <editor>
      <paragraph>
        <text>
          <cursor />
        </text>
      </paragraph>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  toggleList(editor, 'ordered-list')

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('toggle list on line with text', () => {
  const editor = makeEditor(
    <editor>
      <paragraph>
        <text>
          some text
          <cursor />
        </text>
      </paragraph>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  toggleList(editor, 'ordered-list')

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('toggle list on line with text with marks', () => {
  const editor = makeEditor(
    <editor>
      <paragraph>
        <text>
          some text. <cursor />
        </text>
        <text bold>this is bold.</text>
        <text> this is not bold again</text>
      </paragraph>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  toggleList(editor, 'ordered-list')

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text. 
              <cursor />
            </text>
            <text
              bold={true}
            >
              this is bold.
            </text>
            <text>
               this is not bold again
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('toggle list on list with text with marks', () => {
  const editor = makeEditor(
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text.
              <cursor />
            </text>
            <text bold>this is bold.</text>
            <text>this is not bold again</text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  toggleList(editor, 'ordered-list')

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <paragraph>
        <text>
          some text.
          <cursor />
        </text>
        <text
          bold={true}
        >
          this is bold.
        </text>
        <text>
          this is not bold again
        </text>
      </paragraph>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('toggle ordered-list inside of ordered-list', () => {
  const editor = makeEditor(
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  toggleList(editor, 'ordered-list')

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <paragraph>
        <text>
          some text
          <cursor />
        </text>
      </paragraph>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('toggle ordered-list inside of multi-item ordered-list', () => {
  const editor = makeEditor(
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>some text</text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              some more text
              <cursor />
            </text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>even more text</text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  toggleList(editor, 'ordered-list')

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text>
          some more text
          <cursor />
        </text>
      </paragraph>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              even more text
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('toggle unordered-list inside of single item in multi-item ordered-list', () => {
  const editor = makeEditor(
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>some text</text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              some more text
              <cursor />
            </text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>even more text</text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  toggleList(editor, 'unordered-list')

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              some more text
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              even more text
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('toggle unordered-list for all items in multi-item ordered-list', () => {
  const editor = makeEditor(
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              <anchor />
              some text
            </text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>some more text</text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              even more text
              <focus />
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  toggleList(editor, 'unordered-list')

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              <anchor />
              some text
            </text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              some more text
            </text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              even more text
              <focus />
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('backspace at start of list only unwraps the first item', () => {
  const editor = makeEditor(
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              <cursor />
              some text
            </text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>some more text</text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>even more text</text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  editor.deleteBackward('character')

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <paragraph>
        <text>
          <cursor />
          some text
        </text>
      </paragraph>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              some more text
            </text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              even more text
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('nested list as direct child of list is moved to last list-item', () => {
  const editor = makeEditor(
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>some text</text>
          </list-item-content>
        </list-item>
        <unordered-list>
          <list-item>
            <list-item-content>
              <text>some text</text>
            </list-item-content>
          </list-item>
        </unordered-list>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>,
    { normalization: 'normalize' }
  )

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('nest list', () => {
  const editor = makeEditor(
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>some text</text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              content
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  nestList(editor)
  // all these extra nest calls should do nothing
  nestList(editor)
  nestList(editor)
  nestList(editor)
  nestList(editor)
  nestList(editor)
  nestList(editor)

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
            </text>
          </list-item-content>
          <unordered-list>
            <list-item>
              <list-item-content>
                <text>
                  content
                  <cursor />
                </text>
              </list-item-content>
            </list-item>
          </unordered-list>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('nest list when previous thing is nested', () => {
  const editor = makeEditor(
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>some text</text>
          </list-item-content>
          <unordered-list>
            <list-item>
              <list-item-content>
                <text>some more text</text>
              </list-item-content>
            </list-item>
          </unordered-list>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              content
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  nestList(editor)

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
            </text>
          </list-item-content>
          <unordered-list>
            <list-item>
              <list-item-content>
                <text>
                  some more text
                </text>
              </list-item-content>
            </list-item>
            <list-item>
              <list-item-content>
                <text>
                  content
                  <cursor />
                </text>
              </list-item-content>
            </list-item>
          </unordered-list>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('inserting a break on end of list non-empty list item adds a new list item', () => {
  const editor = makeEditor(
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )

  editor.insertBreak()

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
            </text>
          </list-item-content>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('changing the type of a nested list', () => {
  const editor = makeEditor(
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>some text</text>
          </list-item-content>
          <unordered-list>
            <list-item>
              <list-item-content>
                <text>
                  inner text
                  <cursor />
                </text>
              </list-item-content>
            </list-item>
          </unordered-list>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )
  toggleList(editor, 'ordered-list')

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              some text
            </text>
          </list-item-content>
          <ordered-list>
            <list-item>
              <list-item-content>
                <text>
                  inner text
                  <cursor />
                </text>
              </list-item-content>
            </list-item>
          </ordered-list>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test.skip('changing the type of a nested list to something which it is nested inside', () => {
  const editor = makeEditor(
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>top text</text>
          </list-item-content>
          <ordered-list>
            <list-item>
              <list-item-content>
                <text>middle text</text>
              </list-item-content>
              <unordered-list>
                <list-item>
                  <list-item-content>
                    <text>
                      inner text
                      <cursor />
                    </text>
                  </list-item-content>
                </list-item>
              </unordered-list>
            </list-item>
          </ordered-list>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )
  toggleList(editor, 'ordered-list')

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              top text
            </text>
          </list-item-content>
          <ordered-list>
            <list-item>
              <list-item-content>
                <text>
                  middle text
                </text>
              </list-item-content>
              <ordered-list>
                <list-item>
                  <list-item-content>
                    <text>
                      inner text
                      <cursor />
                    </text>
                  </list-item-content>
                </list-item>
              </ordered-list>
            </list-item>
          </ordered-list>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

test('nesting a list item in an ordered list into an unordered list makes the item unordered', () => {
  const editor = makeEditor(
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>first</text>
          </list-item-content>
          <ordered-list>
            <list-item>
              <list-item-content>
                <text>second</text>
              </list-item-content>
            </list-item>
          </ordered-list>
        </list-item>
        <list-item>
          <list-item-content>
            <text>
              third
              <cursor />
            </text>
          </list-item-content>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )
  nestList(editor)

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <unordered-list>
        <list-item>
          <list-item-content>
            <text>
              first
            </text>
          </list-item-content>
          <ordered-list>
            <list-item>
              <list-item-content>
                <text>
                  second
                </text>
              </list-item-content>
            </list-item>
            <list-item>
              <list-item-content>
                <text>
                  third
                  <cursor />
                </text>
              </list-item-content>
            </list-item>
          </ordered-list>
        </list-item>
      </unordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  `)
})

// TODO: fix this(the snapshot shows the correct output)
test.skip('toggling unordered-list in a nested unordered-list moves the list item out of the list', () => {
  const editor = makeEditor(
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>first</text>
          </list-item-content>
          <unordered-list>
            <list-item>
              <list-item-content>
                <text>
                  second
                  <cursor />
                </text>
              </list-item-content>
            </list-item>
          </unordered-list>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )
  toggleList(editor, 'unordered-list')

  expect(editor).toMatchInlineSnapshot(`
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>
              first
            </text>
          </list-item-content>
        </list-item>
      </ordered-list>
      <paragraph>
        <text>
          second
          <cursor />
        </text>
      </paragraph>
      <paragraph>
        <text>
          
        </text>
      </paragraph>
    </editor>
  `)
})

// TODO: fix this
test.skip('nesting multiple items at the same time works', () => {
  const editor = makeEditor(
    <editor>
      <ordered-list>
        <list-item>
          <list-item-content>
            <text>text</text>
          </list-item-content>
          <unordered-list>
            <list-item>
              <list-item-content>
                <text>text</text>
              </list-item-content>
            </list-item>
            <list-item>
              <list-item-content>
                <text>
                  <anchor />
                  text
                </text>
              </list-item-content>
            </list-item>
            <list-item>
              <list-item-content>
                <text>
                  text
                  <focus />
                </text>
              </list-item-content>
            </list-item>
          </unordered-list>
        </list-item>
      </ordered-list>
      <paragraph>
        <text />
      </paragraph>
    </editor>
  )
  nestList(editor)

  expect(editor).toMatchInlineSnapshot(``)
})
