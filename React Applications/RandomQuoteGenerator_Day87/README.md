# Day 87

## Random Quote Generator - Binding the random functionality to display the Quote and Author

In this task, a random quote will appear from the database as soon as the button is clicked. This task spans 4 days.

### Challenge Description

This challenge has been built assuming that you have knowledge of JavaScript and Components in React.

1. Create a QuoteAuthor.js file having a class component of QuoteAuthor.
2. Inside this component, render the randomColor variable which calls the displayColor function from App.js. Set this randomColor to be the backgroundColor of the webpage.
3. __Return__ a div with class = quotebox and having the background color = white.
4. Next, create a div having a random key and a randomColor as the font color.
5. Inside this div, create an h2 element having id = quote and text as quote from App.js. Similarly, create an h5 element for author with id = author.
6. Outside the inner div, create a button having background color = randomColor and id = newquote. The button should fire the handleClick function when clicked. The text between the button should be 'Generate New Quote'.
7. In the App.js file, __import and render__ the QuoteAuthor component.
8. As soon as the component is rendered the displayColor and handleClick property should fire the randomColor and handleClick function respectively.
