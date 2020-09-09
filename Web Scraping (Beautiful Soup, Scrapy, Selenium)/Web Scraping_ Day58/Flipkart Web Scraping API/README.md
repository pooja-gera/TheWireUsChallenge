# Challenge Flipkart-Web-Scraping-API
API that webscrapes through flipkart to return product name, price and ratings as a csv file.

Web scraping an online shopping site in India (Flipkart) using BeautifulSoup in python.
Python is used because it has a wide range of libraries to use for webscraping like BeautifulSoup, scrapy, etc,.

Now, if you know regular expressions, you might be thinking that you can write code using regular expression which can do the same thing for you. I definitely had this question. In my experience with BeautifulSoup and Regular expressions to do same thing I found out:

The api will create a "flipkartproducts.csv" file as output in the root same folder as the program. The csv file will be displayed in your browser window also in a tabular manner, thanks to tablib and os libraries.

I've attached flipkartproducts.csv file as an example for the search query "laptop" with this.
I've also attatched a SearchImage_laptop.PNG file to show the how it is displayed in the browser window for the search query "laptop".



**You need BeautifulSoup,flask,tablib,os libraries installed.**

---**How to run**---     
Run the program as any other flask program:

set FLASK_APP=FlipkartAPI.py   
Flask run

It will produce something like this : 
 * Serving Flask app "FlipkartAPI"
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 
Copy the server url and paste it on a browser. Here it is http://127.0.0.1:5000/ ,
it will lead you to the homepage, where you will find instructions to search.

if you want to search iphone, you need to enter http://127.0.0.1:5000/iphone in the browsers url bar.
Replace iphone with whatever you want to search.
