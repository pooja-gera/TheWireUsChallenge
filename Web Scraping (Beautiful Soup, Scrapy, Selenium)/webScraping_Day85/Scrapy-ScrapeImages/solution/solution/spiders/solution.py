import scrapy

# import the item class from items
from ..items import SolutionItem


class ImageSpider(scrapy.Spider):
    # name the spider
    name = "image_spider"
    page_number = 2

    def start_requests(self):
        # defining starting url
        urls = ["https://www.passiton.com/inspirational-quotes?page=1"]

        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        item = SolutionItem()
        image_urls = []
        images = response.xpath('//*[@id="all_quotes"]/div/a/img')
        for image in images:
            image_urls.append(image.attrib["src"])
        item["image_urls"] = image_urls
        yield item

        next_page = f"https://www.passiton.com/inspirational-quotes?page={str(self.page_number)}"

        if self.page_number <= 5:
            yield scrapy.Request(next_page, callback=self.parse)
            self.page_number += 1

