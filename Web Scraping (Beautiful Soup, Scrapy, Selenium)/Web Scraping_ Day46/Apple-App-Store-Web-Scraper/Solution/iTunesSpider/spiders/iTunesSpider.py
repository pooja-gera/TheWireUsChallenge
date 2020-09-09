
from scrapy import Request, Spider
import re
import os, re, time, requests

class iTunesSpider(Spider):

    name = 'iTunesSpider'

    #Using the base_url for a genre
    base_url = 'https://apps.apple.com/lr/genre/ios-lifestyle/id6012?letter='
    mid_segment = '&page='
    end_segment = '#page'

    # Create URLs for each individual page of a genre.
    def create_urls(base_url, mid_segment, end_segment):
        start_urls = []

        # For letters in the alphabet (capitalised)
        for idx in range(26):
            letter = chr(ord('A')+idx)

            for page_num in range(1,30):
                page_num_str = str(page_num)
                url = base_url + letter + mid_segment + page_num_str + end_segment
                start_urls.append(url) # Append to a list of URLs

        return start_urls

    #Initiialise the list to parse
    start_urls = create_urls(base_url, mid_segment, end_segment)

    def parse(self, response):
        urls = response.xpath('//div[@id="selectedcontent"]//li/a/@href').extract() #Scrape URLs for every page in the xpath of a genre
        req_counter = 0

        for url in urls:
            url_components = (url.split('/'))
            app_id = url_components[-1][2:]
            req_counter += 1

            # I-Tunes API only allows for 20 requests a minute.
            if (req_counter % 20) == 0:
                time.sleep(61)

            # Now make append the app_id to the request URL.
            request_url = 'https://itunes.apple.com/lookup?id=' + app_id
            r = requests.get(request_url)
            dir = os.getcwd()
            if r.status_code == 200:
                if not os.path.exists(dir +'/JSONdata'):
                    os.makedirs(dir + '/JSONdata')
                else:
                    with open(dir +'/JSONdata/'+ app_id + '.txt','wb') as f:
                        f.write(r.content)
