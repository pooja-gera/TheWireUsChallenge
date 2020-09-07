### Day 2
---

#### JSX Element
These coming challenges are designed assuming that you have a basic knowledge about html, css and javascript. We can use JSX which is easy to understand, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript. Later this jsx is converted to react by using babel script. Necessarily a JSX element contains a parent tag and can have any number of children. It can use JS expressions in it and can be styled using css or scss.

1. Simple JSX element declaration
Declare a const "JsxElement" and assign it to a div tag containing "I am a JSX element!" as text.

2. Complex JSX element declaration
Declare a const "JsxWithChild" and assign it a div tag as containing h1 and h2 tags as its children. If the JSX element doesnt fit in one line it can be enclosed in a braces (). 

3. Styling JSX element
In JSX, we use className to denote Html's class attribute. Declare a const "JsxWithClass" with a className attribute as "Hi" and content as "I am a div tag with class name as Hi.".  

4. Embedding the Js consts
Declare constants "name" with value as your name and "JsElement" with the value as div tag of text "I am Harshita". We can use curly braces whenever we embed Javascript expression. You used use the value of name variable declared inside JSElement using curly braces {}.

5. Embedding the return value from function
Create an object "bakery" with fields "cakes" as 10 and "icecreams" as 20. Create a function "giveNumber" which takes bakery object as input and returns the total number of icecreams and cakes. Now declare a const "JsElement"  containing div tag with text as "Total number of cakes and icecreams in this bakery : 30". The 30 should be the return value from the function "giveNumber".

