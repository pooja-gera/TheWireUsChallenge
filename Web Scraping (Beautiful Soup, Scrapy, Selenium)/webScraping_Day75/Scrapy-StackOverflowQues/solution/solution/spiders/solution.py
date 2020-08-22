# importing scrapy module
import scrapy


class StackSpider(scrapy.Spider):
    # name of the spider
    name = "stackoverflow_spider"

    def start_requests(self):

        url = "https://stackoverflow.com/questions?tab=Newest"

        yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        # finding all the questions in the page
        questions = response.css("div.question-summary")

        for q in questions:
            # title of the question
            title = q.css("a.question-hyperlink::text").get()
            # short summary or excerpt of the question
            excerpt = q.css("div.excerpt::text").get().strip()

            tags = q.css("a.post-tag::text").getall()

            yield {"title": title, "excerpt": excerpt, "tags": tags}

        # selecting the link to the next page
        next_page = response.xpath('//*[@id="mainbar"]/div[5]/a[6]/@href').get()

        # base case
        if next_page[-1:] is not "6":
            # urljoin method builds an entire url using the relative url i.e. next_page
            next_page = response.urljoin(next_page)
            # recursive call
            yield scrapy.Request(next_page, callback=self.parse)

