# Challenge - Scraping Clothes from H&M using Rest API of the website
Welcome Back!!👋

Assume you are on a shopping spree and want to buy some new clothes. You have chose <a href="https://weather.com">H&M</a> for shopping. 

You are going to use scrapy for crawling on the <a href="https://weather.com">H&M clothes section</a> and extracting clothes data like - **title,
article_code,
price,
category,
StockAvailabilty and link to the product page**
You have to use hidden REST API that the website provides us as it makes call to products list when we load more results.
Find this REST API on your own.

## Task 👨🏻‍💻👩🏻‍💻
- Make a get request to the API url.
- parse the data using the parse method and scrape the required data of the clothing article and yield a json object containing the data.
- Scrape first 100 items.
- finally run the web crawler with specifying the command - **scrapy crawl "name_of_spider" -o clothes.json** in your root directory of the project to save the file as a json.

The file should have the contents starting something like - 
<br>
<pre>
{"title": "Patterned hooded top", "article_code": "0521062009", "price": "Rs.2,299", "category": "men_hoodiessweatshirts", "StockAvailabilty": "","link":"/en_in/productpage.0521062009.html"}
</pre>
### You got this, Come on!! 💥💥💥
##


