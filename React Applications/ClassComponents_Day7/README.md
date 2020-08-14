# Day 7 #

## Class Components ##

As explained in Components_Day5 in React, we have created a class component in this challenge. <br/>
But instead of making changes in App.js we created a new component __Table__. When we create new components we capitalise them(similar to App.js) so that they can be differentiated from HTML elements(like div tags) at the time of rendering. <br/><br/>

Here we have created Table.js and in the end have exported it. This Table has been imported in App.js. We can create a number of other components and can import Table.js in each one of them(like explained for Header/Navbar in Creating Components in React). <br/><br/>

In the end App has also been exported from App.js and has been rendered in index.js. 

__Important__ : A class component must include render(), and the return can only return one parent element.
<br/><br/>

#### Challenge Description ###

This challenge has been created assuming that you have knowledge of HTML, CSS, JavaScript and have completed the Creating Components and Creating Function components challenge.

1. Create a component Table of React component type in Table.js
2. Within the *class component Table, render and return* a table created using table, table head, table body and table row tags of HTML.
3. *Export* the Table class component created.
4. Add the Table component as an HTML closing tag to the App.js file after importing it.