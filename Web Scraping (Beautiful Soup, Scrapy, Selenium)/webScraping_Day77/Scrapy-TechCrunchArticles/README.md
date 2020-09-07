# Challenge - Scraping Tech crunch's Article Feed with scrapy
## Welcome Back!!👋


We are going to use scrapy for crawling on the <a href="https://techcrunch.com/feed/">article feed</a> of tech crunch website and extracting data of the articles present.


## Task 👨🏻‍💻👩🏻‍💻
- Make a get request to the first page <a href="https://techcrunch.com/feed/">url</a>
- parse the data using the parse method and scrape data like - ***title of the article, author, date of publish and link to the article and yield a json object containing the data***.
- This url contains XML data, so first remove the <a href="https://www.w3schools.com/xml/xml_namespaces.asp">namespaces</a> in this XML and then you can traverse through the DOM.
- finally run the web crawler with specifying the command - **scrapy crawl "name_of_spider" -o techcrunch.json** in your root directory of the project to save the file as a json.

###### ***Note: make use of the xpath to find the elements***

#### ► Output file should have data like this - 
<pre>
{"title": "Eduardo Saverin on the \u2018world of innovation past Silicon Valley\u2019", "author": "Connie Loizos", "date_published": "Tue, 25 Aug 2020 07:04:09 +0000", "link": "https://techcrunch.com/2020/08/25/eduardo-saverin-on-the-world-of-innovation-past-silicon-valley/"},
</pre>
##