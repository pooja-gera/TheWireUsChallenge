import scrapy

# importing FormRequest class
from scrapy.http import FormRequest


class QuoteSpider(scrapy.Spider):
    name = "quotes_spider"

    def start_requests(self):
        # specifying url to the login page of the site
        url = "http://quotes.toscrape.com/login"

        yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        # crpf token
        token = response.css("form input::attr(value)").get()
        return FormRequest.from_response(
            response,
            formdata={
                "csrf_token": token,
                "username": "shawtybad768@gmail.com",
                "password": "blahblahblah",
            },
            callback=self.start_scraping,
        )

    def start_scraping(self, response):

        quotes = response.css("div.quote")
        # iterate over all the quotes
        for q in quotes:
            # finding the actual quote
            text = q.css("span.text::text").get()
            # finding authors
            author = q.css("small.author::text").get()
            # finding tags
            tags = q.css("a.tag::text").getall()

            # yield the results as json
            yield {"text": text, "author": author, "tags": tags}

