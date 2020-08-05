### Day 4

**State in React**  

The *state* is an instance of React Component Class can be defined as an object of a set of 
observable properties that control the behavior of the component. In other words, the State 
of a component is an object that holds some information that may change over the lifetime 
of the component. For example, let us think of the message that  changes on clicking the 
subscribe button , we were calling the render() method , but React provides a better way to 
achieve the same result and that is by using State.For that  just define a class with state 
component containing the previous message and then define a new function for changing 
the message on every click using the setState property.

*Conventions of Using State in React:  *
1.State of a component should prevail throughout the lifetime, thus we must first have some 
initial state, to do so we should define the State in the constructor of the component’s class. 

2.React is highly efficient and thus uses asynchronous state updates i.e. React may update 
multiple setState() updates in a single go.
3. React provides its own method setState(). setState() method takes a single parameter 
and expects an object which should contain the set of values to be updated
