# -*- coding: utf-8 -*-
import scrapy
from ..items import ZomatoItem

class ZomSpideySpider(scrapy.Spider):
    name = 'zom_spidey'
    allowed_domains = ['zomato.com']
    start_urls = ['https://www.zomato.com/mumbai/restaurants']
    page_num = 2
    res_link= 'nikal gaya'
    city='mumbai'
    def parse(self, response):
        items = ZomatoItem()
        div = response.css(".search-card")
        for c in div:
            items['rest_name'] = c.css('.fontsize0::text').extract()
            res_link = c.css('.fontsize0').css("::attr('href')").get()
            items['res_link'] = c.css('.fontsize0').css("::attr('href')").get()
            items['rating'] = c.css('.rating-value').css("::text").extract()
            items['area'] = c.css('b').css("::text").extract()
            items['address'] = c.css(".ln22").css("::text").extract()
            div2 = c.css(".clearfix.row")
            for d in div2:
                items['cuisine'] = d.css(".col-s-11.col-m-12.nowrap.pl0").css("::text").extract()
                items['cost_for_two'] = d.css(".res-cost .pl0").css("::text").extract()
            link = c.css(".item.result-menu").css("::attr('href')").get()
            order_link = c.css(".result-menu+ a").css("::attr('href')").get()
            if order_link is None:
                items['can_order_via_zomato'] = "No"
            else:
                items['can_order_via_zomato'] = "Yes"
            request= scrapy.Request(res_link, callback=self.second_parser)
            request.meta['items'] = items
            yield request
        # menu_url = "https://www.zomato.com"+str(link)
        # if menu_url is not None:
        #     yield response.follow(menu_url, callback=self.second_parser, meta={'items':items})
        # print("I came here!!!!!!\n\n")
        
        if self.page_num < 2:
            self.page_num+=1
            next_url = "https://www.zomato.com/mumbai/restaurants?page="+str(self.page_num)
            print("\n\n\n",next_url)
            if next_url is not None:
                yield response.follow(next_url, callback=self.parse)    
            
    def second_parser(self, response):
        items = response.meta["items"]
        sec = response.css('asc-cCbPEh.gNiJfC')
        print("sec\n\n",sec)
        return items
        
    def third_parser(self, response):
        print("Yes!")