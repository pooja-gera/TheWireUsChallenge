# Challenge
# Web scraping and save data in JSON format

## Description

Each python file contains code for web scraping from different API and export data to JSON file.

## Files and External Data

### [extract_twitter.py](extract_twitter.py)
* Extract selected attributes from tweets using tweepy (Twitter API) and save data in JSON format. 
The program will extract the data from REST API first. Then, it will extract the remaining data from Streaming API.
The program set to retrieve around 3,000 tweets. Therefore, it set the threshold to 3,200 tweets to satisfy the requirement.
The program can retrieve around 3,200 records from REST and Streaming API combined. 
The number of retrieved records can be changed by setting "maxRecords" to desired number.
	* Key : have 2 keys defined by API type which are
			1. REST API (historical data which is excluded the live tweets)
			2. Streaming API (live streaming of the tweets from the request)
	* Value : list of tweets that related to keyword
* REST API : 
	* Search tweets based on keyword, language (English only), and date (from 2020-01-01).
	Change date by setting "date_since" to desired date.
	* Each keyword can have at most 700 tweets. After reach 700 tweets, it will continue to next keyword.
* Streaming API :
	* Stream live tweets that match the one of keywords
	* In the program, on_data function has count variable which limit to max record divided by 10. 
	The reason to divide by 10 is because the streaming API is running concurrently. 
	Therefore, 1 count would equal to around 5-10 tweets. 
		
	In the output, the max record is expected to be around 3,200 tweets. 
	The result is that there are 2,983 tweets from REST API. So, there are 217 tweets left. The program divides 217 by 10 which result in 21. 
	The expectation is to get around 200 tweets. From running the program, it gets 198 tweets from steaming API. 
	The total tweets are 3,181. The threshold is 3,000 tweets so it is satisfying the requirement.
* Clean data before store in JSON file by : 
	* Remove non-ASCII characters
	* Remove emojis
	* Remove url
	* Remove mention (@)
	* Remove hashtag (#)
	* Remove whitespace character (\n)
### [data folder](data)
contains data sample in json file format from running extract_XXX.py

* [twitter_clean.json](data/twitter_clean.json) - data from extract_twitter.py

### Dependencies

Python libraries
* requests
* json
* tweepy
* re
