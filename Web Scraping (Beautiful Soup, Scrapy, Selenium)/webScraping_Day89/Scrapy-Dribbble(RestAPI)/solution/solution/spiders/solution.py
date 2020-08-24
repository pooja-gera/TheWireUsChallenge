import scrapy
import json


class DribbbleSpider(scrapy.Spider):
    name = "dribbble_spider"
    page = 1
    api_url = "https://dribbble.com/scout/shots?user_ids%5B%5D=6033&user_ids%5B%5D=2742725&user_ids%5B%5D=56427&user_ids%5B%5D=5289500&user_ids%5B%5D=674925&user_ids%5B%5D=644672&user_ids%5B%5D=250507&user_ids%5B%5D=440962&user_ids%5B%5D=2125046&user_ids%5B%5D=28141&user_ids%5B%5D=1826170&user_ids%5B%5D=1787323&per_page=8&page={}"
    start_urls = [api_url.format(page)]

    def parse(self, response):
        data = json.loads(response.text)

        for user in data:

            for details in user["shots"]:

                yield {
                    user["user_id"]: {
                        "id": details["id"],
                        "description": details["description"],
                        "owner": details["owner"],
                        "title": details["title"],
                        "published": details["published_at"],
                    },
                }

        if page <= 10:
            page += 1
            yield scrapy.Request(url=self.api_url.format(page), callback=self.parse)

