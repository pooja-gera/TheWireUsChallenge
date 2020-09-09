#  Challenge 
# Web scraping and save data in JSON format

## Description

Each python file contains code for web scraping from different API and export data to JSON file.

## Files and External Data

### [extract_news.py](extract_news.py)
* Extract data from [news API](http://newsapi.org/) and save data in JSON format
	* Key : specific keyword
	* Value : list of news that related to keyword
* Clean data before store in JSON file:
	* removing "\r\n" from retrieved data
* Limitation: default number of retrieved data in news API is 20

### [data folder]
contains data sample in json file format from running extract_XXX.py
* [news_clean.json](data/news_clean.json) - data from extract_news.py

### Dependencies

Python libraries
* requests
* json
* tweepy
* re
