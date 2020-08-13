## Day 17

**getDerivedStateFromProps**

In the last challenge we have seen about React lifecycle and its component.so here lets see 
in detail about getDerivedStateFromProps( ).

The **getDerivedStateFromProps()** method is called right before rendering the
element(s) in the DOM.

This is the natural place to set the state object based on the initial props.

It takes state as an argument, and  returns an object with changes to the state.

Using the favcol attribute we can update the value of various variables.

So *lets code* an example which starts with the favorite color being "red",
but the getDerivedStateFromProps() method updates the favorite color based on 
the favcol attribute.

For references:

1. https://www.w3schools.com/react/react_lifecycle.asp

2. https://reactjs.org/docs/state-and-lifecycle.html
