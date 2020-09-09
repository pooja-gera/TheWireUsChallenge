# -*- coding: utf-8 -*-
import scrapy
from scrapy.http import FormRequest,Request
from scrapy.utils.response import open_in_browser
from scrapy_splash import SplashRequest

class LinkedinProfilesSpider(scrapy.Spider):
    name = 'linkedin_profiles'
    allowed_domains = ['www.linkedin.com']
    
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
        assert(splash:go("https://www.linkedin.com/in/hritik-attri/"))
        splash:wait(20)
        return splash:html()
    end
    '''
    def start_requests(self):
        yield SplashRequest(url="https://www.linkedin.com/login" , callback=self.after_redirection , endpoint="execute" , args=
        {'lua_source':self.script,'timeout':90})

    #def parse(self, response):
    #    return FormRequest.from_response(response,formxpath='//form',
    #                formdata={'session_key': 'priyankattri11@gmail.com', 'session_password': 'BIGGBOss12'},
    #                callback=self.after_login,clickdata={'type':'submit'})
    #
    
    
    
    
    #def parse(self, response):
     #   csrf_param=response.xpath('//input[@name="loginCsrfParam"]//@value').get()
      #  print(csrf_param)
       # return FormRequest.from_response(response,formxpath='//form[@class="login__form"]',formdata={
        #    #'csrf_token':csrf_param,
         #   'username':'priyankattri11@gmail.com',
          #  'password':'BIGGBOss12'
        #},callback=self.after_login,dont_filter=True)

   # def redirect(self,response):
    #    yield scrapy.Request(url="https://www.linkedin.com/in/hritik-attri/",callback=self.after_redirection,dont_filter=True)
        
        
        
        
        
        
        
    def after_redirection(self,response):
        #open_in_browser(response)
        open_in_browser(response)
        #yes_or_no=response.xpath('//code[@id="i18nErrorReservedGlobalErrorMessage"]//@style').get()
        #print(yes_or_no)
        #if response.xpath('//code[@id="i18nErrorReservedGlobalErrorMessage"]//@style').get()=='display: none;':
            #yield Request('https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin',callback=self.parse,dont_filter=True)
        #body=response.xpath("//*[@id='ember517']")
        img=response.xpath("//div[@class='ph5 pb5']//div[@class='pv-top-card__photo-wrapper ml0']//img//@src").get()
        student_at=response.xpath("(//ul[@class='pv-top-card--list inline-flex align-items-center']//li)[1]//text()").get()
        
        #img=response.xpath('//section[@class="top-card-layout"]//img[@class="artdeco-entity-image artdeco-entity-image--profile artdeco-entity-image--circle-8 top-card-layout__entity-image lazy-loaded"]//@src')
        yield{
            #'body':body,
            'img':img,
            'student_at':student_at,
        }