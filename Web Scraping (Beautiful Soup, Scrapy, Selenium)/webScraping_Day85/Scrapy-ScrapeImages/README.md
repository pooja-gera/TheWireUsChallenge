# Challenge - Scraping Images with Scrapy Media Pipeline
Welcome Back!!👋

We have got started making web crawlers but what if we want to crawl the images of a wesite and save them?

Now, to do this Scrapy Media pipeline comes into play.<br>
They are of 2 types - <br>
1) Files Pipeline - for files
2) Images Pipeline - for images

We only need Images pipeline for this challenge<br>
Checkout how to use <a href="https://docs.scrapy.org/en/latest/topics/media-pipeline.html#using-the-images-pipeline">Image pipelines?</a>

## Install Pillow
###### **Pillow** is imaging library that scrapy uses it for thumbnailing and normalizing images to JPEG/RGB format. This is important to download or your spider won't scrape images.
<pre> pip install Pillow 
</pre>
##
## Enable ImagesPipeline
###### In your settings.py include:
<pre> ITEM_PIPELINES = {'scrapy.pipelines.images.ImagesPipeline': 1}</pre>
###### and configure the target storage setting to a valid value that will be used for storing the downloaded images. Otherwise the pipeline will remain disabled, even if you include it in the ITEM_PIPELINES setting.
<pre>IMAGES_STORE = '/path/to/valid/dir'</pre>

## Create an Item
###### In your main directory, if not exists create a file items.py.
<pre>class ProductsItem(scrapy.Item):
    image_urls = scrapy.Field()
    images = scrapy.Field()
</pre>
##
## Task 👨🏻‍💻👩🏻‍💻
- Make a get request to the first page <a href="https://www.passiton.com/inspirational-quotes?page=1">url</a>
- In the parse method define the item object and scrape url of images from the website and yield the dict item containing the urls of images.
- Scrape images till the 5th page.
- finally run the web crawler with specifying the command - **scrapy crawl "name_of_spider"**.
#


