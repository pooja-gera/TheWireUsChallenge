# Challenge
# Web scraping and save data in JSON format

## Description

Each python file contains code for web scraping from different API and export data to JSON file.

## Files and External Data

### [extract_OMDb.py](extract_OMDb.py)
* Extract data from [OMDb API](http://www.omdbapi.com/) and save data in JSON format
	* Key : specific keyword
	* Value : list of movies that related to keyword
* Limitation: default number of retrieved data in OMDb API is 10

### [data folder]
contains data sample in json file format from running extract_XXX.py
* [movies.json](data/movies.json) - data from extract_OMDb.py

### Dependencies

Python libraries
* requests
* json
* tweepy
* re
