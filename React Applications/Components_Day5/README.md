# Day 5 #

## Components in React ##

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and returns HTML via a render function. <br/>
Example: While making a website instead of adding HTML code of header/navbar again and again, you can use React to make the website. Using React, just make a Navbar/ Header component and render that component on diferent pages(like Home, About Us page etc.) of your website.

Components come in two types, Class components and Function components.

#### Challenge Description ####
1. Inside index.js, remove pre-existing content (except the modules imported).
2. Create a class named App having a base/super class of React.Component .
3. Inside the *render()* function, *return* a div with *class name* App.
4. Using h1 tag inside the div, write Hello World.
5. Using the imported *ReactDOM* module, render the App component created.