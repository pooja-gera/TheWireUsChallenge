# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from emailextractor.items import EmailItem


class UgcemailSpider(CrawlSpider):
    name = 'ugcmail'
    allowed_domains = ['ac.lk']
    start_urls = ['https://www.ugc.ac.lk/en/universities-and-institutes/universities.html']

    rules = (
        Rule(LinkExtractor(allow=r'single/',),callback='parse_item',follow=True),
        Rule(LinkExtractor(restrict_xpaths=('//*[@id="ugc-current-content"]/table[2]')),callback='parse_item',follow=True),
        Rule(LinkExtractor(allow_domains='ac.lk'),callback='parse_item',follow=True),

    )

    def parse_item(self, response):

        selector = scrapy.Selector(response)
        univesity = response.xpath('//*[@id="ugc-current-content"]/table[2]/tr[3]/td[2]/h2/text()').get()
        email = selector.re('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}')

        if email:
            for e in email:
                item = EmailItem()
                item['email'] = e 
                item['university'] = univesity
                item['url'] = response.url
                yield item
        pass
        
