import scrapy
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


class RedditSpider(scrapy.Spider):
    # spider name
    name = "redditbot"
    start_urls = ["https://www.reddit.com/r/gameofthrones/"]

    def __init__(self):
        browser = webdriver.Chrome(
            "/Users/jappanjeetsingh/Downloads/Drivers/chromedriver"
        )

    # function for scrolling to the end of the page so that we can load more posts
    def scrollDown(self, browser):
        last_height = browser.execute_script("return document.body.scrollHeight")
        SCROLL_PAUSE_TIME = 7
        while True:
            browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(SCROLL_PAUSE_TIME)
            new_height = browser.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height
            time.sleep(1.2)

    def parse(self, response):
        self.browser.get(response.current_url)
        self.scrollDown(self.browser)
        # Extracting the content using css selectors
        titles = response.css("h3._eYtD2XCVieq6emjKBH3m::text").getall()
        votes = response.css("div._1rZYMD_4xY3gRcSS3p8ODO::text").getall()
        times = response.css("a._3jOxDPIQ0KaOWpzvSQo-1s::text").getall()
        comments = response.css("span.FHCV02u6Cp2zYL0fhQPsO::text").getall()

        # Give the extracted content row wise.
        for data in zip(titles, votes, times, comments):

            # yield or give the scraped info to scrapy
            yield {
                "title": data[0],
                "vote": data[1],
                "created_at": data[2],
                "comments": data[3].strip(" comments"),
            }

