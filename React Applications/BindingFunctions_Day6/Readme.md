##### Day 9

#### Binding Functions
In this challenge we will look into how to bind the class component function to a state using this keyword. 
Execute two methods as separate components.
Create a class component "Click" having a state, containing objects "text". Initialize "text" as "I am not clicked!". Now render a div tag having children as button and a p tag. p tag should display the text object present in state. Define a function "handleClick" which should set the text to "I am clicked!". 

1. Defining it in the state.
Write the statement this.handleClick = this.handleClick.bind(this). Call the function using "this" keyword on the button click.

2. Callback 
Write the callback anonymous function this way "{() => this.handleClick()}" on the button click.

##### Output After running in the local host
On a button click in the localhost, the text should change from "I am not clicked!" to "I am clicked!"