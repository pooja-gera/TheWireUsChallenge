# import the scrapy module
import scrapy

# make spider class
class BooksSpider(scrapy.Spider):
    name = "books_spider"

    def start_requests(self):
        urls = ["http://books.toscrape.com/catalogue/page-1.html"]

        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):

        books = response.css("article.product_pod")

        for book in books:
            title = book.css("a::text").get()
            price = book.css("p.price_color::text").get()
            availability = book.css("p.instock.availability::text").getall()[1].strip()

            yield {"title": title, "price": price, "availability": availability}

        # selecting the link to the next page
        next_page = response.css("li.next a::attr(href)").get()

        # ---------- THIS IS THE IMPORTANT PART TO MAKE A RECURSIVE CRAWLER ---------- #
        # recursion
        if next_page is not None:
            # urljoin method builds an entire url using the relative url i.e. next_page
            next_page = response.urljoin(next_page)
            # recursive call
            yield scrapy.Request(next_page, callback=self.parse)
