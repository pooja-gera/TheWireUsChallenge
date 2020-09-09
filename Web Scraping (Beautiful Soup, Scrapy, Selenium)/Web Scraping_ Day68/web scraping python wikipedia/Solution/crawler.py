import bs4
import requests


response = requests.get("https://en.wikipedia.org/wiki/Python_(programming_language)")

if response is not None:
    page = bs4.BeautifulSoup(response.text, 'html.parser')

    title = page.select("#firstHeading")[0].text
    paragraphs = page.select("p")
    
    print(title)
    intro = '\n'.join([ para.text for para in paragraphs[0:5]])
    print (intro)
