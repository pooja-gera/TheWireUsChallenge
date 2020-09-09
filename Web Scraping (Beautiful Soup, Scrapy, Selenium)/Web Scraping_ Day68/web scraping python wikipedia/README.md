# Challenge

Python web scraping in example of Wikipedia. Using API and custom crawler.

## Using API

This aproach uses another python package which is basically wrapper around [Wikipedia's API](https://www.mediawiki.org/wiki/API:Main_page).

Code:

    import wikipediaapi

    wiki_wiki = wikipediaapi.Wikipedia('en')

    page = wiki_wiki.page('Python_(programming_language)')
    print(page.summary)

How to run:

    pip install wikipedia-api
    python api.py

## Using custom crawler

With custom script we crawling Wikipedia's page about Python programming and parsing response. For this approach we need to install `bs4` and `requests` libraries.

Code:

    import bs4
    import requests


    response = requests.get("https://en.wikipedia.org/wiki/Python_(programming_language)")

    if response is not None:
        html = bs4.BeautifulSoup(response.text, 'html.parser')

        title = html.select("#firstHeading")[0].text
        paragraphs = html.select("p")
        for para in paragraphs:
            print (para.text)

        intro = '\n'.join([ para.text for para in paragraphs[0:5]])
        print (intro)

How to run:

    pip install bs4
    pip install requests
    python crawler.py

## Clone repository locally

You can clone this repository run scripts locally. For this follow steps bellow:

    # clone locally
    git clone https://github.com/CoderVlogger/web-scraping-python-wikipedia.git
    cd web-scraping-python-wikipedia.git
    # create virtualenv & activate
    virtualenv venv -p python3
    source ./venv/bin/activate
    # install dependencies
    pip install -r requirements.txt

    # run api
    python api.py

    # run crawler
    python crawler.py
