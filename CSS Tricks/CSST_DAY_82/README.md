# At rules

In this challenge we will learn about three directives of SASS used for providing feedback to developers. They are @error, @warn, and @debug. 

All three of these directives follow the same syntax:

@directive "String of text to output.";

The three directives expect anything, not necessarily a string. This means you can warn, throw, 
or debug a map, a list, a number, a string — basically anything you want. 
If a developer makes a mistake when using your Sass code, these directives will 
send the specified message to the compiler and the compiler will show that message to the developer. 


Sass’s @error directive stops the Sass compiler completely and sends its string of text to the compiler’s
output as a fatal error. Use this directive when you need to send a message that stops the developer 
immediately and forces them to correct their mistake right away.


The @warn directive is considerably less severe than @error. It sends its 
message to the compiler for the developer to read, but it allows the compiler 
to finish its job and write all the CSS. 



Sass’s @debug directive is the least intrusive of all three feedback directives.
It prints the value of whatever Sass expression it contains (variable, math, etc.) 
to the console for the developer. 

