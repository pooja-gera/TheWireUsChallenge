

from bs4 import BeautifulSoup
import requests 


url = "https://boston.craigslist.org/search/sof"


response = requests.get(url)


#print(response)


data = response.text


soup = BeautifulSoup(data,'html.parser')


jobs = soup.find_all('p',{'class':'result-info'})


for job in jobs:
    title = job.find('a',{'class':'result-title'}).text
    location_tag = job.find('span',{'class':'result-hood'})
    location = location_tag.text[2:-1] if location_tag else "N/A"
    date = job.find('time',{'class':'result-date'}).text
    link = job.find('a',{'class':'result-title'}).get('href')
    print('Job Title:', title, '\nLocation', location, '\nDate:', date, '\nLink:', link, '\n---')

