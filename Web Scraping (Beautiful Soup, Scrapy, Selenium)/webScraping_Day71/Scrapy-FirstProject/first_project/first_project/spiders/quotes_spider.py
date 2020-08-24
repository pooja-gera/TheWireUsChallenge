# import the scrapy module
import scrapy

# Creating a spider
# inherited subclass is Spider from scrapy module
class QuotesSpider(scrapy.Spider):
    # name of the spider | it must be unique within a project
    name = "quotes_spider"

    # define methods

    # this method will allow us to make GET or POST requests
    def start_requests(self):
        # specifying urls to scrape data from
        urls = [
            "http://quotes.toscrape.com/page/1/",
            "http://quotes.toscrape.com/page/2/",
            "http://quotes.toscrape.com/page/3/",
        ]

        #   Generator
        for url in urls:
            # this statement is similar to making request to an API which we did in the challenges in past.
            # callback method will define that when the response is received we have to parse the data
            yield scrapy.Request(url=url, callback=self.parse)

    # a method that will be called to handle the response downloaded for each of the requests mad
    def parse(self, response):

        # this is for saving the html of the response(optional)

        # # in which page we are
        # page = response.url.split("/")[-2]
        # # define the filename to save the quotes
        # filename = "quotes-%s.html" % page

        # find the quotes, authors and tags
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

        # this is for saving the html of the response(optional)
        # with open(filename, "wb") as f:
        #     f.write(response.body)
        # # write a status message
        # self.log("Saved file %s" % filename)

