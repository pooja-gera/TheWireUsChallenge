#### Day 3
#### Rendering React Elements to the DOM

In the previous challenge we have learnt about the JSX element and how it's written. Here we are going to learn how these elements are rendered to DOM. Applications built with just React usually have a single root DOM node. 
To render a React element into a root DOM node, pass both to ReactDOM.render(). An element is like a single frame in a movie: it represents the UI at a certain point in time. 


##### 1. Render 
Define a const "element" with a div tag "I am going to appear on the screen.". Then pass the arguments element and document.getElementById('root') to ReactDOM.render(). 

##### 2. Immutable
The elements that we create can't be changed. We can update the content by re-rendering it to the DOM. Let us show the ticking clock in our react app. Change the "element" content as "The time now is {}". The curly braces should represent the current time. Enclose "element" and render statement in a function "clock". Write the statement "setInterval(clock, 1000)" to callback the clock function for every 1 sec.   

