# importing the modules
import scrapy
import re
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


class WeatherSpider(scrapy.Spider):
    name = "weather_spider"

    def start_requests(self):

        urls = [
            "https://weather.com/en-IN/weather/today/l/c3e96d6cc4965fc54f88296b54449571c4107c73b9638c16aafc83575b4ddf2e"
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def __init__(self):
        self.driver = webdriver.Chrome(
            "/Users/jappanjeetsingh/Downloads/drivers/chromedriver"
        )

    def parse(self, response):

        self.driver.get(response.url)
        time.sleep(4)

        city = response.xpath('//h1[contains(@class,"location")]/text()').get()
        # remove "weather" string from the city string variable
        city = re.match(r"^(.*)(?: Weather)", city).group(1)

        temp = (
            response.xpath('//span[@data-testid="TemperatureValue"]/text()').get() + "C"
        )

        time_stamp = (
            response.css(
                "div._-_-components-src-organism-CurrentConditions-CurrentConditions--timestamp--1ybTk::text"
            )
            .get()
            .strip("as of")
        )

        air_quality = response.xpath(
            '//span[@data-testid="AirQualityCategory"]/text()'
        ).get()

        condition = response.xpath('//div[@data-testid="wxPhrase"]/text()').get()

        yield {
            "city": city,
            "temp": temp,
            "time_stamp": time_stamp,
            "air_quality": air_quality,
            "condition": condition,
        }

        self.driver.find_element_by_xpath('//*[@id="LocationSearch_input"]').send_keys(
            "Jaipur"
        )
        time.sleep(2)
        driver.find_element_by_xpath('//*[@id="LocationSearch_input"]').send_keys(
            Keys.ENTER
        )
        time.sleep(4)
        next_page = self.driver.current_url

        yield response.follow(next_page, callback=self.parse)
