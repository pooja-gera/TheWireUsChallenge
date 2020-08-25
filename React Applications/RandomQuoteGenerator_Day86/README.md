# Day 86

## Random Quote Generator - Adding Random Functionality 

In this task, a random quote will appear from the database as soon as the button is clicked. This task spans 4 days.

### Challenge Description

This challenge has been built assuming that you have knowledge of JavaScript and Components in React.

1. In the App.js file, import the quotes which was created in the previous task. 
2. Next, create an App class component. Set the state of quote and author property to the 0th element of quotes array.
3. Create a function randomQuote, which assigns a random number to a variable named randomNumber, within the range of length of quotes' array. Return the quotes element at the randomNumber position.
4. Outside the randomQuote function, create another function named handleClick which will function as soon as 'Generate New Quote' button is clicked. 
5. Call the randomQuote function inside the handleClick function and assign it to a variable named generateRandomQuote. 
6. Set the previous state of the quote and autor properties to the same properties of generateRandomQuote.
7. Create a randomColor function which assigns a variable color a random rgb value. Return the color variable.
8. Export the App component.

