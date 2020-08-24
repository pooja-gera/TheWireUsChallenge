import requests
from bs4 import BeautifulSoup

url = requests.get("http://www.example.com/")

soup = BeautifulSoup(url.text, 'html.parser')

print(soup.h1)


