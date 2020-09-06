# Day 88

## Voting System - Making the voting system

In this task, the votes for a certain element (programming language in this case) will inclrease when the button next to it is clicked. This task spans 2 days.

### Challenge Description

This challenge has been built assuming that you have knowledge of CSS, JavaScript and Creating Components.

1. Create an App.js file and create an App class component in it.
2. Set the state of an array of objects languages, with each object in the array having a name and votes property. 
3. Name is set to be C++, Python, Java, JavScript and votes are initialised to 0.
4. __Render and return__ an h2 element with text as "Which programming language do you use?". 
5. Inside a div with class = languages, traverse the languages array and set the index value (of each language name) as a key to the div with class = language.
6. Inside the inner div create a div with class = voteCount and text as number of votes of the language at index i. Similarly, create another div for name of the language.
7. Then create a button which executes the vote function on clicking. Set it's inner text to "Click Here".
8. Create a function vote which takes i as an argument, where i is the key to a div with class = language. Inside this function, set the newLanguage variable as the array of objects 'languages'.
9. Increment the votes of ith element of newLanguage array by 1 and set the state of the languages array as the newLanguage array to reflect the changes in the votes.