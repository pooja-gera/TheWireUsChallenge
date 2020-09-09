# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class CoffeereviewItem(scrapy.Item):

    review_rating = scrapy.Field()
    roaster = scrapy.Field()
    product = scrapy.Field()
    location = scrapy.Field()
    origin = scrapy.Field()
    roast = scrapy.Field()
    # Fields related to estimated price
    est_price_full = scrapy.Field()
    est_price_components = scrapy.Field()
    est_price = scrapy.Field()
    est_price_amount_per_measure = scrapy.Field()
    est_price_units = scrapy.Field()
    est_price_currency = scrapy.Field()
    # Remaining fields
    review_date_full = scrapy.Field()
    review_year = scrapy.Field()
    review_month = scrapy.Field()
    agtron = scrapy.Field()
    aroma = scrapy.Field()
    acidity = scrapy.Field()
    body = scrapy.Field()
    flavor = scrapy.Field()
    aftertaste = scrapy.Field()
    the_bottom_line = scrapy.Field()
    # the_bottom_line2 = scrapy.Field()


