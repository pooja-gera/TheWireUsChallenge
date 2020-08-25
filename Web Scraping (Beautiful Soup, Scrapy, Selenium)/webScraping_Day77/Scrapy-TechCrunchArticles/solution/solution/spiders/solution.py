import scrapy

# creating a spider class
class TechCrunchSpider(scrapy.Spider):
    # name of our spider
    name = "crunch-spider"
    # mention starting url
    start_urls = ["https://techcrunch.com/feed/"]

    def parse(self, response):
        # Remove all namespaces, allowing to traverse the document using namespace-less xpaths.
        response.selector.remove_namespaces()

        # finding the data
        titles = response.xpath("//item/title/text()").getall()
        authors = response.xpath("//item/creator/text()").getall()
        dates = response.xpath("//item/pubDate/text()").getall()
        links = response.xpath("//item/link/text()").getall()

        for data in zip(titles, authors, dates, links):

            # yielding a json object
            yield {
                "title": data[0],
                "author": data[1],
                "date_published": data[2],
                "link": data[3],
            }

