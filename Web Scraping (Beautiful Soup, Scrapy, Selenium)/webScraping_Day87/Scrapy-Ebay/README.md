# Challenge - Scraping Iphones from ebay.com
## Welcome Back!!👋

Assume you always wanted to buy an iphone and now you have enough money to get a second hand one 😜. So you went to the  <a href="https://www.ebay.com">ebay.com</a> for finding aan iphone that is the right one for you. But it's very difficult to find one from 1000s of them so, you thought of scraping the data about them.

You are going to use scrapy for crawling on the <a href="https://www.ebay.com/">website</a> and search for apple cell phones in the search bar and from this link start scraping the details of the product like - **title,
price and
logistics Cost**.
You have to make requests to next 10 pages to scrape products from it.

## Task 👨🏻‍💻👩🏻‍💻
- Make a get request to url.
- parse the data using the parse method and scrape the required info of the product and yield a json object containing the data.
- Scrape first 10 pages of the website. 
- finally run the web crawler with specifying the command - **scrapy crawl "name_of_spider" -o iphones.json** in your root directory of the project to save the file as a json.

The file should have the contents starting something like - 
<br>
<pre>
[
{"title": "Apple iPhone 7 32gb Unlocked Verizon", "price": "INR 8,730.87", "logistics cost": "INR 1,634.72 shipping"},
</pre>
### Easy Peasy , Come on!! 💥💥💥
##


