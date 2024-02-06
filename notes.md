# General Steps when writing tests using RTL

1. Render the component
2. Find the element you want to interact with
3. Simulate an event
4. Assert that the component is updated

## Common query methods

### To find a single element

- getBy..
- queryBy..
- findBy..

### To find multiple elements

- getAllBy..
- queryAllBy..
- findAllBy..

## Suffix methods

- Role
  - Button element has a button, anchor element has a link role, h1 to h6 elements have a heading role, etc.
  - However, if you're working with elements that do not have a default role, the role attribute can be used to specify an element's role.
  - with its option, you can use the label of an input element, text content of a button or the value of the aria-label
- LabelText
- PlaceholderText
- Text
- DisplayValue
- AltText
- Title
- TestId

## Info

getBy and getAllBy methods of queries to asert if elements are present in the DOM.
queryBy and queryAllBy methods of queries to assert if elements are not present in the DOM.
find and findAllBy methods of queries to assert if elements appear in the DOM asynchronously.

## What to test

- Test component renders
- Test component renders with props
- Test component renders with different state
- Test component reacts to events

## What not to test

- Implementation details - test the behavior, not how the behavior is implemented
- Third-party code
- Code that is not important from a user point of view - e.g. function that displays date you don't to test if that method was called by the component
