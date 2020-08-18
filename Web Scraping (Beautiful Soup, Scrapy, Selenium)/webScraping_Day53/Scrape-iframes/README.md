# Challenge - Scrape from iframes.
Welcome to today's challenge!!👋

In today's challenge we'll be using **Selenium** to extract some tables from a <a href="https://www.selenium.dev/selenium/docs/api/java/index.html">website</a> having iframes. <br>
You might be wondering what are are iframes 🤔 and why do we care to use Selenium on this website 🤷‍♂️, why not only Beautiful soup will do our work. <br>
The **problem** is with iframes(learn about them in the resources file) which do not let us to access their contents (html) by simply using bs4 because these iframes have all together different HTML from the page source , see them as different websites present in one. That is why we are using **Selenium** for this task.

In this challenge you have to follow these steps using Selenium.
<p>You'll  need to make a GET request at the <a href="https://www.selenium.dev/selenium/docs/api/java/index.html">url</a> using selenium .<br>
<li>Visit the url
<li>There is an iframe having package name on the left side. Switch to this frame (<i>learn more about handling iframes using Selenium</i>)
<li>Click on the org.openqa.selenium link and switch to the default page.
<li>Wait for the page to load
<li>Now switch to the second iframe containing interfaces section.
<li>Click on the WebDriver link and switch to the default page.
<li>Now click the deprecated button present on the top nav bar.
<li>Extract the name of the links which defines what item has been deprecated from all the 6 tables present on the page and print the tables in the format just like the screen shot shows below.
<br><br>
 Sample output - <br> 
<img width="100" src="./ss1.png"