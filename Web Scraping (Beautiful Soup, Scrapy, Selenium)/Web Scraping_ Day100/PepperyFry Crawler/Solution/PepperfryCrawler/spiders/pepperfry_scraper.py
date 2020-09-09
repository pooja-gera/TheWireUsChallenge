import json
import scrapy
import requests
import os
from scrapy.utils.python import to_native_str
from six.moves.urllib.parse import urljoin

class pepperfry_scraper(scrapy.Spider):
	name = "pepperfry_scraper"
	BASE_DIR = "./pepperfry_data"
	MAX_CNT = 20

	def start_requests(self):
		BASE_URL="https://www.pepperfry.com/site_product/search?q="
		items = [ "two seater sofa", "bench", "book cases","coffee table", "dining set","queen beds","arm chairs","chest drawers","garden seating","bean bags","king beds"]
		urls = []
		dir_names = []

		for item in items:
			query_string = "+".join(item.split(" "))
			dir_name = "-".join(item.split(" "))
			dir_names.append(dir_name)
			urls.append(BASE_URL+query_string)
			dir_path = self.BASE_DIR+dir_name
			if not os.path.exists(dir_path):
				os.makedirs(dir_path)

		for i in range(len(urls)):
			d = {
			    "dir_name" : dir_names[i]
			}
			resp = scrapy.Request(url = urls[i], headers = {'User-Agent':"Mozilla/5.0"}, meta = {'dont_redirect': False}, dont_filter = True, callback = self.parse)
			resp.meta['dir_name'] = dir_names[i]
			yield resp

	def parse(self, response, **meta):
		product_urls =  response.xpath('//div/div/div/h2/a/@href').extract()
		counter = 0
		for url in product_urls:
			resp = scrapy.Request(url = url,headers = {'User-Agent':"Mozilla/5.0"}, meta = {'dont_redirect': False}, callback=self.parse_items,dont_filter=True)
			resp.meta['dir_name'] = response.meta['dir_name']
			if counter == self.MAX_CNT : 
				break
			if not resp== None:
				counter+=1

			yield resp
			
	def parse_items(self,response,**meta):
		if response.status >= 300 and response.status < 400:
			location = to_native_str(response.headers['location'].decode('latin1'))
			request = response.request
			redirected_url = urljoin(request.url, location)
		item_title = response.xpath("//div/div/div/h1/text()").extract()[0]
		item_price = response.xpath("//div/div/span[@class='vip-our-price-amt font-18 pf-text-dark-grey pf-bold-txt']/text()").extract()[0].strip()
		item_savings = response.xpath("//p[@class='pf-margin-0 pf-bold-txt font-13']/text()").extract()[0].strip()
		itemdesc = response.xpath("//div[@itemprop='description']/div/p/text()").extract()
		itemdesc = ('\n').join(itemdesc[:-2])
		item_detail_keys = response.xpath("//p[@class='pf-margin-0 pf-padding-5 pf-text-grey']/b/text()").extract()
		item_detail_values = response.xpath("//p[@class='pf-margin-0 pf-padding-5 pf-text-grey']/text()").extract()
		del item_detail_values[1]

		brand = response.xpath('//div/div/div/p/span[@itemprop="brand"]/text()').extract()
		SKU = response.xpath('//span[@itemprop="sku"]/text()').extract()
		item_detail_values.append(SKU[0])
		item_detail_values.insert(0,brand[0])

		a = len(item_detail_keys)
		b = len(item_detail_values)
		idetail={}
		for i in range(min(a,b)):
			idetail[item_detail_keys[i]]=item_detail_values[i]

		image_url_list = response.xpath("//li[@class='vip-options-slideeach']/a/@data-bigimg").extract()

		if(len(image_url_list) > 3):
			d = {
			 "image_title":item_title,
			 "image_price":item_price,
			 "description":itemdesc,
			 "Savings":item_savings,
			 "Details":idetail
			}
			CATEGORY_NAME = response.meta['dir_name']
			ITEM_DIR_URL = os.path.join(self.BASE_DIR,os.path.join(CATEGORY_NAME,item_title))
			if not os.path.exists(ITEM_DIR_URL):
				os.makedirs(ITEM_DIR_URL)

			with open(os.path.join(ITEM_DIR_URL,'metadata.txt'),'w') as f:
				json.dump(d,f)

			for i,img_url in enumerate(image_url_list):
				r = requests.get(img_url)
				with open(os.path.join(ITEM_DIR_URL,"image_{}.jpg".format(i)),'wb') as f:
					f.write(r.content)

			print("--> Successfully saved :)"+item_title+"data at"+ITEM_DIR_URL)
			yield d

		yield None




