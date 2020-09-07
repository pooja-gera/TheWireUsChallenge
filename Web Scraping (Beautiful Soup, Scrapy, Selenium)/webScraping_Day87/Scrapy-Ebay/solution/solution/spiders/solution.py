# -*- coding: utf-8 -*-
import scrapy


class EbaySpider(scrapy.Spider):
    name = "ebay-spider"
    page = 1
    url = "https://www.ebay.com/b/Apple-Cell-Phones-Smartphones/9355/bn_319682?_pgn={}"
    start_urls = [url.format(page)]

    def parse(self, response):
        prod_title = response.css(".s-item__title::text").getall()
        prod_price = response.css(".s-item__price::text").getall()
        prod_shipping = response.css(".s-item__logisticsCost::text").getall()

        for data in zip(prod_title, prod_price, prod_shipping):
            yield {
                "title": data[0],
                "price": data[1],
                "logistics cost": data[2],
            }

        if self.page <= 10:
            self.page += 1
            yield scrapy.Request(url=self.url.format(self.page), callback=self.parse)

