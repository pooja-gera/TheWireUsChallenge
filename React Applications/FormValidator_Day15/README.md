# Day 15

## Form Validator

In this task, you will build a form validator using knowldge of JavaScript.

### Challenge Description
1. Inside the index.js file, create a Form component.
2. Set the state of username and age as null/empty.
3. __Return and render__ a form having an h2 element with text as Hello, [your name]. You are [your age] years old today.
4. Create p element with text as "Enter your name:" and "Enter your age:".
5. Add appropriate input tags for the p tags. Set these input tags s.t. it fires the changeHandler function as soon as something is typed into it.
6. Create a changeHandler function which takes an argument 'e' (event). 
7. Set the variable nam and val equal to the property and value of e. 
8. Inside the changeHandler function, Check if the value of age is number or not. If not, then generate an alert.
