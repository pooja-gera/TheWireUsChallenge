# importing modules required
import scrapy
import json

# defining a Spider class
class QuotesSpider(scrapy.Spider):
    # name of the spider
    name = "quotes_spider"
    # API url
    api_url = "http://quotes.toscrape.com/api/quotes?page={}"
    start_urls = [api_url.format(1)]

    def parse(self, response):
        data = json.loads(response.text)

        for quote in data["quotes"]:
            yield {
                "author_name": quote["author"]["name"],
                "text": quote["text"],
                "tags": quote["tags"],
            }

        # the dictionary data has a key call has_next which tell if there are further more pages that can be loaded if scrolled down further

        if data["has_next"]:
            next_page = data["page"] + 1
            yield scrapy.Request(
                url=self.api_url.format(next_page), callback=self.parse
            )

