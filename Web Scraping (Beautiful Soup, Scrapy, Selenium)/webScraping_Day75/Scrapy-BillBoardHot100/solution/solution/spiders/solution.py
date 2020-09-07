import scrapy


class Hot100Spider(scrapy.Spider):
    name = "hot_spider"

    def start_requests(self):
        url = "https://www.billboard.com/charts/hot-100"
        yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):

        hits = response.xpath("//li[starts-with(@class, 'chart-list__element')]")
        for hit in hits:
            yield {
                "title": hit.xpath(
                    ".//span[starts-with(@class, 'chart-element__information__song')]/text()"
                ).get(),
                "artist": hit.xpath(
                    ".//span[starts-with(@class, 'chart-element__information__artist')]/text()"
                ).get(),
                "rank": hit.xpath(
                    ".//span[@class='chart-element__rank__number']/text()"
                ).get(),
                "last_week": hit.xpath(
                    ".//span[contains(@class, 'chart-element__meta ')]/text()"
                )[0].get(),
                "peak": hit.xpath(
                    ".//span[contains(@class, 'chart-element__meta ')]/text()"
                )[1].get(),
                "weeks": hit.xpath(
                    ".//span[contains(@class, 'chart-element__meta ')]/text()"
                )[2].get(),
            }
