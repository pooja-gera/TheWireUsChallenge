
import scrapy


class DealershipSpider(scrapy.Spider):
    name = 'dealership'
    allowed_domains = ['www.machinerypete.com'] # Note to self: No HTTP required for this field
    start_urls = ['https://www.machinerypete.com/dealerships/search']

    def parse(self, response):
        links = response.css('.btn.btn-default.btn-xs::attr(href)').getall()
        for link in links:
            link = response.urljoin(link)
            yield scrapy.Request(url=link, callback=self.parse_state)


    def parse_state(self, response):
        links = response.css('li[style="font-size: 0.8em;"] > a::attr(href)').getall()
        for link in links:
            link = response.urljoin(link)
            yield scrapy.Request(url=link, callback=self.parse_content)

    def parse_content(self, response):
        dealer_name = response.css('h1::text').get()
        contact_list = response.css('.store-header:contains("Contact") ~ div::text').getall() # Getting all info under Contact
        contact = ", ".join(contact_list) # Concatenating the list
        address = ", ".join(response.css('.store-header:contains("Address") ~ div::text').getall())
        yield {
            'dealer_name' : dealer_name,
            'contact' : contact,
            'address' : address, # Remember the comma if it's not a variable
        }
