import scrapy
import json


class ClothesSpider(scrapy.Spider):
    name = "clothes_spider"
    start_urls = [
        "https://www2.hm.com/en_in/men/new-arrivals/clothes/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=100"
    ]

    def parse(self, response):

        data = json.loads(response.text)

        for product in data["products"]:

            yield {
                "title": product["title"],
                "article_code": product["articleCode"],
                "price": product["price"],
                "category": product["category"],
                "StockAvailabilty": product["outOfStockText"],
                "link": "https://www2.hm.com" + product["link"],
            }

