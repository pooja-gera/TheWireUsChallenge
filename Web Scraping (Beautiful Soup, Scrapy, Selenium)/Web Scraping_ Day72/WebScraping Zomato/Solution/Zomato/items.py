# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class ZomatoItem(scrapy.Item):
    rest_name = scrapy.Field()
    rating = scrapy.Field()
    area = scrapy.Field()
    address = scrapy.Field()
    cuisine = scrapy.Field()
    cost_for_two = scrapy.Field()
    can_order_via_zomato = scrapy.Field()
    location = scrapy.Field()
    res_link = scrapy.Field()
    dining_reviews = scrapy.Field()
    delivery_reviews = scrapy.Field()
    rest_type = scrapy.Field()
    has_menu_available = scrapy.Field()
    book_table = scrapy.Field()
    featured_in = scrapy.Field()
    discount = scrapy.Field()
    min_amnt_for_discount = scrapy.Field()
    reviews = scrapy.Field()
    review_rating = scrapy.Field()