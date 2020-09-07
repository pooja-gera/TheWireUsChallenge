# Challenge - Scraping Quotes' Author's details with Scrapy
## Welcome Back!!👋

You have already scraped quotes from <a href="http://quotes.toscrape.com/">toscrape website</a>. But how about scraping details of authors who wrote those quotes.
There is an about page link mentioned with every quote's author's name.

We are going to use scrapy for crawling on the <a href="http://quotes.toscrape.com/">website</a> and following links to the about page of each author.

## Task 👨🏻‍💻👩🏻‍💻
- Make a get request to the first page <a href="http://quotes.toscrape.com/page/1/">url</a>
- Define some function to follow the about page of the author and scrape data like - ***Author's name and birth date and yield a json object containing the data***. Do this for each quote on the quotes page.
- make recursive calls to the next page of the website until there is no further page available
- finally run the web crawler with specifying the command - **scrapy crawl "name_of_spider" -o authors.json** in your root directory of the project to save the file as a json.

The file should have the contents starting something like - 
<br>
<pre>
[
    {
        "name": "Thomas A. Edison\n    ",
        "born": "February 11, 1847"
    },
    {
        "name": "Eleanor Roosevelt\n    ",
        "born": "October 11, 1884"
    },
</pre>

Make sure you are scraping all the 50 authors.

##


