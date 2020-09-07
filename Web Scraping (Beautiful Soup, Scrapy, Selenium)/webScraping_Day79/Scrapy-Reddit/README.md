# Challenge - Scraping Reddit's GOT Feed with scrapy
## Welcome Back!!👋


We are going to use scrapy for crawling on the <a href="https://www.reddit.com/r/gameofthrones/">Game of Thrones feed</a> of Reddit website and extracting data of the posts present on the infinitely scrolling page.


## Task 👨🏻‍💻👩🏻‍💻
- Make a get request to the first page <a href="https://www.reddit.com/r/gameofthrones/">url</a>
- parse the data using the parse method and scrape data like - ***titles
,votes
,times
,comments*** of each post on the page and yield a json object containing the data.
- finally run the web crawler with specifying the command - **scrapy crawl "name_of_spider" -o reddit.json** in your root directory of the project to save the file as a json.


#### ► Output file should have data like this - 
<pre>
[
{"title": "[Spoilers] /r/centuryofblood - a new ASOIAF roleplaying game on reddit", "vote": "36", "created_at": "20 days ago", "comments": "1"},
</pre>
##