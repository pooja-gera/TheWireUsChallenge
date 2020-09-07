# Challenge - Automating Code chef submissions
Welcome to today's challenge!!👋

In today's challenge we'll be using **Selenium** to automate submissions on <a href="https://www.codechef.com/">Code chef</a>. <br>
You could be solving CP questions on codechef or any other online coding platforms they are a great way to learn coding and problem solving. Many times you write a solution you have to visit the website search for the question paste the solution then submit it. We are going to automate this task. But you have to write the solution 😜, after that run the script and the submission will be made.<br>
**Cool right?**

**Prerequisites -**<br>
You must have a codechef account if not go and make one.
<br>
Selenium library installed
In this challenge you have to follow these steps using Selenium.
<p>You'll  need to make a GET request at the <a href="https://www.codechef.com">url</a> using selenium .<br>
<li>Visit the url
<li>There is the main page containing username and password section on top right corner
<li>Enter the credentials such as username and password
<li>Click on the login button
<li>Wait for the page to load
<li>Again make a get request to the link to the problem for eg - <a href="https://www.codechef.com/submit/TEST">url</a> is the link for problem code "TEST".
<li>Click on the edit button
<li>In the text area add the code present in the file provided to you named - TEST.cpp which contains the code for this particular challenge.<br>
<i>Note: the editor in which code has to be added is a javascript creation so you cannot access it but codechef has provided us with a toggler as a checkbox below the editor in which we can change the editor to plain text area then you can select it and proceed.</i>
<li>From the drop down menu select the language for eg- C++
<li>Click submit button
<br>
<b>Et Voila! the code should be  submitted by now</b>
<br><br>
