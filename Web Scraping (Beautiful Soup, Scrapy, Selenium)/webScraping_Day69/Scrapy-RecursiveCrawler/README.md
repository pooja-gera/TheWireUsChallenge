# Challenge - Scraping books with Scrapy
Welcome Back!!👋

You are creating a new books website, for which you need to get data of some popular books available on the internet. So you thought of building a Web Scrapper that scrapes the information about books from the <a href="http://books.toscrape.com/catalogue/page-1.html">website</a>

<img width="100" src="https://image.flaticon.com/icons/svg/1584/1584945.svg">

We are going to again use scrapy for crawling on the <a href="http://books.toscrape.com/catalogue/page-1.html">website</a> and extracting data of books from its 50 pages.

Now i am sure you don't wanna specify 50 different urls in the start_requests method. So, to tackle this we will be creating a recursive crawler.

How would you make it ?
<br>
Learn about this following this <a href="https://docs.scrapy.org/en/latest/intro/tutorial.html#following-links">link</a>

### Now get your hands dirty 🏋️‍♀️

## Task 👨🏻‍💻👩🏻‍💻
- Make a get request to the first page <a href="http://books.toscrape.com/catalogue/page-1.html">url</a>
- parse the data using the parse method and scrape data like - ***title of the book, price and availability and yield a json object containing the data***.
- make recursive calls to the next page of the website until there is no further page available
- finally run the web crawler with specifying the command - **scrapy crawl "name_of_spider" -o books.json** in your root directory of the project to save the file as a json.

The file should have the contents starting something like - 
<br>
<img width="200px" src="./ss.png">

Make sure you are scraping all the 50 pages.

### BOOM 💥💥💥
YOU CAN SCRAPE 50 PAGES OF A WEBSITE IN SUCH A SHORT PERIOD OF TIME
##


