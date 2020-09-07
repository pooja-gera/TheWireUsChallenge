# Challenge - Scraping Billboard's Hot 100 Songs with scrapy
Welcome Back!!👋

You in a group project to make a song classifier have been given the task of webscraping songs. So you thought of building a Web Scrapper using that scrapes information about songs from the <a href="https://www.billboard.com/charts/hot-100">website</a>.

### 🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶
We are going to use scrapy for crawling on the <a href="https://www.billboard.com/charts/hot-100">website</a> and extracting data of songs from its 1st page only.


## Task 👨🏻‍💻👩🏻‍💻
- Make a get request to the first page <a href="https://www.billboard.com/charts/hot-100">url</a>
- parse the data using the parse method and scrape data like - ***title of the song, artist, rank, last_week, peak and weeks and yield a json object containing the data***.
- finally run the web crawler with specifying the command - **scrapy crawl "name_of_spider" -o billboard.json** in your root directory of the project to save the file as a json.

###### ***Note: make use of the xpath to find the elements***

The file should have the contents starting something like - 
<br>
<img width="200px" src="./ss.png">

##


