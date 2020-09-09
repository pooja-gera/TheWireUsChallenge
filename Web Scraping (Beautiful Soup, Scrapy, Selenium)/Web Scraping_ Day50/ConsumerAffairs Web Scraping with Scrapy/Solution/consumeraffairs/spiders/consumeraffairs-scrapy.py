import scrapy
from ..items import ConsumeraffairsItem

# Program web-scrapes date, comment, and star rating from all Uber reviews on https://www.consumeraffairs.com/
class UberSpider(scrapy.Spider):
    # Name of spider
    name = "uber_ca"

    # Gather requests for spider
    def start_requests(self):
        urls = []
        # Append all pages from https://www.consumeraffairs.com/ to urls
        for x in range(1, 58):
            url = 'https://www.consumeraffairs.com/travel/uber.html?page=' + str(x) + '#sort=recent&filter=none'
            urls.append(url)

        # Scrape each page
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    # Web-scrape information
    def parse(self, response):
        # Item object, acts like a simple container for information
        items = ConsumeraffairsItem()

        # Web-scrape date, stars, and comment
        date_messy = response.xpath('//div[@class= "rvw js-rvw"]/div[3]/span/text()').extract()
        stars = response.xpath('//div[@class= "rvw js-rvw"]/div[1]/div/img/@data-rating').extract()
        comment = response.xpath('//div[@class= "rvw js-rvw"]/div[3]/p[2]/text()').extract()

        # Edit date to remove excess text
        date = []
        for d in date_messy:
            d = d.replace("Original review: ", "")
            date.append(d)

        result = zip(date, stars, comment)

        # Store date, stars, and comment to items
        for date, stars, comment in result:
            items['date'] = date
            items['stars'] = stars
            items['comment'] = comment
            yield items

