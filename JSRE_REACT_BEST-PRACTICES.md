#### A function returning an element object.
E.G.
```js
const elTitle = () => ({ type: Title, props: { color: 'red', children: 'Hello, Child!' } });
```

The most important attribute for the element is the type.
The type property tells REACT how to deal with the element itself.

## THE ELEMENT - STRING

The facts are that if the type attribute is a string, then a DOM Node will be presented by the element.
When the element type is a string, REACT knows that the element represents a DOM Node.
When the element type is a string, REACT knows that the element will generate a DOM Node.

## THE ELEMENT - FUNCTION

The facts are that if the type attribute is a function, then a component will be presented by the element.
When the element type is a function, REACT knows that the element represents a component - runs component releated code.
When the element type is a function, REACT knows that the element will generate a component <-- Does this make sense ? Could all lines together be true without confusing the reader?

When the element type is a function, React gets all of the encapsulated elements by passing the props to the function callsite.

### RECONCILIATION

This operation is looped, performed recursively on the result until React gets a tree of DOM nodes.
React then renders all of the encapsulated elements described by the properties that were passed to function at the beginning of the operation.
React DOM and React Native use Reconciliation to create the user interfaces of their respective platforms.

## CHILD - PROPERTY

The children property is considered a special property.
The children property is optional
The children property represents the direct descendant of the element.

Dom elements and components can be nested with each other, to represent the render tree

```json
{
  type: Title,
  props : {
    color : 'red',
    children : {
      type : 'h1',
      props : {
        children : 'hello'
      }
    }
  }
}
```
