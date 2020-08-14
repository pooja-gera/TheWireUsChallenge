# Day 11 #

## Passing Props as String ##

Props are a keyword in React that are used to pass data from one component to another. Props are passed to components via HTML attributes. Basically, they are like arguments to a function in JavaScript.


#### Challenge Description ###

This challenge has been created assuming that you have knowledge of HTML, CSS, JavaScript and have completed the Creating Components and Passing Props as Strings challenge.

1. Create component User, Greeting of React component type in index.js
2. Inside the User component, *return* "Hello, (using props access the first and last name passed from the Greeting component)!" using h1 tag. __The displayed text should look like "Hello, Sanchi Bansal!"__.
3. Create an object userinfo with fName and lName properties using JavaScript knowledge in Greeting component. Assign these properties values according to your name.
4. Within the *class component Greeting, render and return* User component having name attribute equal to your name.
5. Using the imported *ReactDOM* module, render the App component created.