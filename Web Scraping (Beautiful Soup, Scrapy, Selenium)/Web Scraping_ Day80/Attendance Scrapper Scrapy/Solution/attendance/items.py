# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html
import scrapy

class AttendanceItem(scrapy.Item):
    # define the fields for your item here like:
    Subject = scrapy.Field()
    Attend = scrapy.Field()
    Date = scrapy.Field()

