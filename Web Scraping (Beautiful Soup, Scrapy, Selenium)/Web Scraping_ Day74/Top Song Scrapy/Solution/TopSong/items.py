# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class TopSongItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    index = scrapy.Field()
    artist = scrapy.Field()
    title = scrapy.Field()
    writers = scrapy.Field()
    producers = scrapy.Field()
    month = scrapy.Field()
    year = scrapy.Field()
    label = scrapy.Field()
    chartNo = scrapy.Field()
    chartWeek = scrapy.Field()
    description = scrapy.Field()
    album = scrapy.Field()
    albumLabel = scrapy.Field()