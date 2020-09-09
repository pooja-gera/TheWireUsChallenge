# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from scrapy_splash import SplashRequest
import urllib3
from scrapy.http import Request
class LinkedinProfilesCrawlerSpider(CrawlSpider):
    name = 'linkedin_profiles_crawler'
    allowed_domains = ['www.linkedin.com']
    start_urls=["https://www.linkedin.com/login"]
    script = '''
    function main(splash, args)
        url=args.url
        headers = {
            ["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36"
        }
        splash:set_custom_headers(headers)
        splash:go(url)
        splash:wait(5)
        username=assert(splash:select("#username"))
        username:focus()
        username:send_text("priyankattri11@gmail.com")
        splash:wait(5)
        password=assert(splash:select("#password"))
        password:focus()
        password:send_text("BIGGBOss12")
        splash:wait(5)
        btn=assert(splash:select("#app__container > main > div:nth-child(2) > form > div.login__form_action_container > button"))
        btn:focus()
        btn:mouse_click()
        splash:wait(15)
        splash:go("https://www.linkedin.com/in/" ,args.targetname)
        splash:wait(20)
        return splash:html()
    end
    '''
    rules = (
        Rule(LinkExtractor(restrict_xpaths="//div[@class='neptune-grid two-column']"), callback='start_requests', follow=False),
    )
    
    def start_requests(self):
        targetname=input("Enter target URL")
        yield SplashRequest(url="https://www.linkedin.com/login" , callback=self.parse_item , endpoint="execute" , args=
        {'lua_source':self.script,'timeout':90,'targetname':targetname},)


    def parse_item(self, response):
        Target_image=response.xpath("(//div[@class='ph5 pb5']//img)[1]//@src").get()
        Target_Name=response.xpath("//ul[@class='pv-top-card--list inline-flex align-items-center']//li[1]//text()").get()
        Target_studies_at_or_works_at=response.xpath("//div[@class='display-flex mt2']//h2/text()").get()
        Target_location=response.xpath("//ul[@class='pv-top-card--list pv-top-card--list-bullet mt1']//li[1]//text()").get()
        Target_previous_positions_college_certifications=response.xpath('(//div[@class="ember-view"])[17]//h3//text()').getall()
        yield{
            'Target-name':Target_Name,
            'Target-image':Target_image,
            'Target_studies_at/works_at':Target_studies_at_or_works_at,
            'Target_location':Target_location,
            'Target_previous_positions_college_certifications':Target_previous_positions_college_certifications,
        }
        