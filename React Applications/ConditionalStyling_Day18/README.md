## Day 18 ##

##  Conditional Styling ##

Conditional styling in React is done using the ternary operator in JavaScript which serves the purpose of if/else statements in JavScript.

#### Challenge Description ####

This challenge is created assuming that you have knowledge of HTML, CSS, JavaScript and Creating Components and Passing Props challenges. In this challenge, you will create a button which is ON state as default. On clicking the button the value becomes OFF and vice-vera.

1. Create a class component Toggle in index.js
2. Pass props to constructor and to access the super class. 
3. Create a function handleClick outside the constructor of Toggle component.  
4. *Render and return* a button, set the onclick of this button to trigger the handleClick function created.
5. Set the *isToggleOn state* of the button passed as true in the constructor.
6. Set the *state.isToggleOn* expression of button to ON if value is true else return OFF. 
7. Inside the handleClick function, create an arrow function *setState* which takes the argument *prevState*.
8. Set the *isToggleOn of prevState* to opposite of what it is when taken as input.
9. Inside the constructor, bind the handleClick function so that *this* can work. 
10. Using the imported *ReactDOM* module, render the Toggle component created.