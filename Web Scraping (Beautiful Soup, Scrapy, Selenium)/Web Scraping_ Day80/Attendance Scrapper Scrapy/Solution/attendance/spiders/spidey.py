import scrapy
from scrapy.http import FormRequest
from ..items import AttendanceItem
from scrapy.utils.response import open_in_browser


class spidey(scrapy.Spider):
    name = 'spidyy'
    page_number = 2
    start_urls = [
        'http://app.bmiet.net/student/login'
    ]

    def parse(self, response):
        token = response.css('form input::attr(value)').extract_first()
        return FormRequest.from_response(response, formdata={
            'csrf_token' : token,
             'username' : '/////////////////USERNAME////////////////////////////',
             'password' : '//////////////////////PASSWORD///////////////////////'
        }, callback = self.start_scrapping)

    def start_scrapping(self, response):
        yield scrapy.Request('http://app.bmiet.net/student/attendance/view', callback=self.parse_att)

    def parse_att(self, response):
        items = AttendanceItem()
        all = response.css('#dataTable tbody ')
        for x in all:
            att = x.css('td:nth-child(2)::text').extract()
            sub = x.css('td:nth-child(3)::text').extract()
            date = x.css('td:nth-child(1)::text').extract()
            for b in range(0, len(date)):
                date[b] = date[b].replace("\n                                ", "")
                items["Date"] = date[b]
                att[b] = att[b].replace("   \n                          \t\t", "")
                items["Attend"] = att[b]
                sub[b] = sub[b].replace(" \t\n                      \t\t    ", "")
                items["Subject"] = sub[b]
                yield items

