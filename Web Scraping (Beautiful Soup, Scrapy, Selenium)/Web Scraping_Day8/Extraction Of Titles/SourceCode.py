
# - How to extract other text data pieces from one webpage.


from bs4 import BeautifulSoup
import requests 


url = "https://boston.craigslist.org/search/sof"


response = requests.get(url)


#print(response)


data = response.text


soup = BeautifulSoup(data,'html.parser')


titles =soup.find_all("a",{"class":"result-title"})


for title in titles:
    print(title.text)


adresses= soup.find_all("span",{"class":"result-hood"})



for adress in adresses:
    print(adress.text)

