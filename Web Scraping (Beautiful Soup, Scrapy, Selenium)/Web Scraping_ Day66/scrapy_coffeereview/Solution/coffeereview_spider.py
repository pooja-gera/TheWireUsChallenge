

from scrapy import Spider, Request
from coffeereview.items import CoffeereviewItem
import re

class CoffeeReviewSpider(Spider):
    name = 'coffeereview_spider'
    allowed_domains = ['www.coffeereview.com']
    start_urls = ['https://www.coffeereview.com/advanced-search/?keyword=&search=Search+Now&pg=1']
    

    # Scrapy will use the following method to parse the start_url and obtain the urls of all the pages that have reviews
    def parse(self, response):
        # Since there is no html element for total pages (just a "Last" button), I'm using the syntax below as I cannot use the 
        # click button with Scrapy functionality.
        # However, if Scrapy enabled button click (as Selenium does), I would click button using click() and obtain the 
        # last number page number to compute the total number of pages.
        result_urls = ['https://www.coffeereview.com/advanced-search/?keyword=&search=Search+Now&pg={}'.format(x) for x in range(1,270)]

        print('~'*100)

        print(len(result_urls))

        print('~'*100)

        print(result_urls[0])

        print('~'*100)

        print(result_urls[1])

        print('~'*100)

        for url in result_urls:    # Remove this after testing !!!!!!!!!!!!!!! ################
            yield Request(url=url, callback=self.parse_result_page)


    # Scrapy will use the following method to parse each of the review pages
    def parse_result_page(self, response):

        print('=' * 40)
        review_urls = response.xpath('//div[@class="review type-review status-publish hentry pmpro-has-access"]//h3/a/@href').extract()
        print(len(review_urls))
        # print(review_urls[0])
        print('=' * 40)

        # Prepare list of all complete review url per page:
        review_urls = ['https://www.coffeereview.com' + url for url in review_urls]
        print(len(review_urls))
        print('*' * 60)

        for url in review_urls:
            # print('='*70)
            # print('====  Entered Loop of review_urls ==== ')
            # print('='*70)
            yield Request(url=url, callback=self.parse_review_detail_page)


    # Scrapy will use the following method to parse the review details page
    def parse_review_detail_page(self, response):

        # print('####  Entered parse_review_detail_page #### ')
        print('='* 150)

        # Review Rating: 
        review_rating = response.xpath('//div[@class="review-rating"]/text()').extract_first()
        # print('review_rating = ',review_rating)

        # Roaster:
        roaster = response.xpath('//div[@class="review-col1"]/h3/text()').extract_first()
        # print('roaster = ',roaster)

        # Product:
        product = response.xpath('//div[@class="review-col1"]/h2/text()').extract_first()
        # print('product = ',product)

        # Location:
        location = response.xpath('//div[@class="review-col1"]//p[1]/strong/text()').extract_first()

        # Origin:
        origin = response.xpath('//div[@class="review-col1"]//p[2]/strong/text()').extract_first()

        # Roast:
        roast = response.xpath('//div[@class="review-col1"]//p[3]/strong/text()').extract_first()

        # Estimated Price:
        try:
            est_price_full = response.xpath('//div[@class="review-col1"]//p[4]/strong/text()').extract_first()

            est_price_components = re.findall(r"[-+]?\d*\.\d+|\d+", est_price_full)
            
            try:
                est_price = float(est_price_components[0])
            except IndexError:
                est_price = -99  # Testing. make "" after tested
            
            try:
                est_price_amount_per_measure = int(est_price_components[1])
            except IndexError:
                est_price_amount_per_measure = -999  # Testing. make "" after tested

            try:
                est_price_units = "".join(re.findall("[a-zA-Z]+", est_price_full[3:]))
            except IndexError:
                est_price_units = -9999  # Testing. make "" after tested

            est_price_currency = "".join(re.findall('^[a-zA-Z]{0,3}', est_price_full))
            if est_price_currency == "":
                est_price_currency = 'USD'

        except:
            est_price_full = 'ZZZZZZZZ'                    # !!! revert to ---> ''
            est_price_components = 'ZZZZZZZZ'              # !!! revert to ---> ''
            est_price = -1111                              # !!! revert to ---> -1
            est_price_amount_per_measure = -111111         # !!! revert to ---> -1
            est_price_units = 'ZZZZZZZZ'                   # !!! revert to ---> ''
            est_price_currency = 'ZZZZZZZZ'                # !!! revert to ---> ''


        review_date_full = response.xpath('//div[@class="review-col2"]//p[1]/strong/text()').extract_first()
        review_year = int(" ".join(re.findall('\d+',review_date_full)))
        review_month = "".join(re.findall('[a-zA-Z]',review_date_full))
        agtron = response.xpath('//div[@class="review-col2"]//p[2]/strong/text()').extract_first()
        aroma = int(response.xpath('//div[@class="review-col2"]//p[3]/strong/text()').extract_first())
        acidity = int(response.xpath('//div[@class="review-col2"]//p[4]/strong/text()').extract_first())
        body = int(response.xpath('//div[@class="review-col2"]//p[5]/strong/text()').extract_first())
        flavor = int(response.xpath('//div[@class="review-col2"]//p[6]/strong/text()').extract_first())
        aftertaste = int(response.xpath('//div[@class="review-col2"]//p[7]/strong/text()').extract_first())
        the_bottom_line = response.xpath('//div[@class="review-content"]/p[5]/text()').extract_first()
        # try:
        #     the_bottom_line2 = response.xpath('//div[@class="review-content"]/p[6]/text()').extract_first()
        # except:
        #     the_bottom_line2 = "if_additional_only"


        item = CoffeereviewItem()
        item['review_rating'] = review_rating
        item['roaster'] = roaster
        item['product'] = product
        item['location'] = location
        item['origin'] = origin
        item['roast'] = roast
        item['est_price_full'] = est_price_full
        item['est_price_components'] = est_price_components
        item['est_price'] = est_price
        item['est_price_amount_per_measure'] = est_price_amount_per_measure
        item['est_price_units'] = est_price_units
        item['est_price_currency'] = est_price_currency
        item['review_date_full'] = review_date_full
        item['review_year'] = review_year
        item['review_month'] = review_month
        item['agtron'] = agtron
        item['aroma'] = aroma
        item['acidity'] = acidity
        item['body'] = body
        item['flavor'] = flavor
        item['aftertaste'] = aftertaste
        item['the_bottom_line'] = the_bottom_line
        # item['the_bottom_line2'] = the_bottom_line2

        yield item


