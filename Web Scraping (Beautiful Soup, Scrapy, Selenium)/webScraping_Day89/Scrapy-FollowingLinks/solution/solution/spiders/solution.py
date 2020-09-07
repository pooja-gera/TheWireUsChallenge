import scrapy


class AuthorSpider(scrapy.Spider):
    name = "authors-spider"
    start_urls = ["http://quotes.toscrape.com/"]

    def parse(self, response):
        urls = response.css("div.quote > span > a::attr(href)").getall()
        for url in urls:
            # urljoin method builds an entire url using the relative url
            url = response.urljoin(url)
            yield scrapy.Request(url=url, callback=self.parse_details)
        # link to the next page
        next_page = response.css("li.next a::attr(href)").get()

        # recursion
        if next_page is not None:
            # urljoin method builds an entire url using the relative url i.e. next_page
            next_page = response.urljoin(next_page)
            # recursive call
            yield scrapy.Request(next_page, callback=self.parse)

    # defining a function to handle the about page of an author
    def parse_details(self, response):
        yield {
            "name": response.css("h3.author-title::text").get(),
            "born": response.css("span.author-born-date::text").get(),
        }

