# - Python web scraping libraries you need 
# - How to extract URLs from one webpage.

from bs4 import BeautifulSoup
import requests 


url = "https://boston.craigslist.org/search/sof"


response = requests.get(url)


#print(response)


data = response.text


#print(data)


soup = BeautifulSoup(data,'html.parser')


tags = soup.find_all('a')


for tag in tags:
    print(tag.get('href'))

