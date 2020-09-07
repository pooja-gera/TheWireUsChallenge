# Challenge - Scraping Designers from Dribbble.com using Rest API of the website
## Welcome Back!!👋

Assume you are working in a startup and you have been appointed to find a designer who will design the website of the startup. So you went to the  <a href="https://dribbble.com/designers">Dribbble.com</a> for finding a designer. But it's very difficult to find one from 1000s of them so, you thought of scraping the data about them.

You are going to use scrapy for crawling on the <a href="https://dribbble.com/designers">Dribbble designers section</a> and extracting Designer's informaation like - **user_id,
id,
description,
owner,
title,
published_at**.
You have to use hidden REST API that the website provides us as it makes call to products list when we load more results.

Find this REST API on your own.

## Task 👨🏻‍💻👩🏻‍💻
- Make a get request to the API url.
- parse the data using the parse method and scrape the required info of the Designer and yield a json object containing the data.
- Scrape first 10 pages of the website. 
*Note: the website is an infinitely scrolling one*
- finally run the web crawler with specifying the command - **scrapy crawl "name_of_spider" -o designers.json** in your root directory of the project to save the file as a json.

The file should have the contents starting something like - 
<br>
<pre>
{"6033": {"id": 14054151, "description": "Another fun shot with illustrations from beautiful \n YEEAP! ILLUSTRAT...", "owner": {"path": "/morquastore", "avatar": "https://cdn.dribbble.com/users/5182393/avatars/mini/fee31696c303df230b25ea811866a682.png?1587395633", "name": "MorquaStore", "pro": false, "team": true}, "title": "Yeeap! Illustration...", "published": "August 20, 2020"}},
</pre>
### You got this, Come on!! 💥💥💥
##


