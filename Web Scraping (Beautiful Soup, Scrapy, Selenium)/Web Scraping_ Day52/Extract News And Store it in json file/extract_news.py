
# import libraries
import requests as r
import json as js

# keyword that will be used for search in news api
keywords = ["Canada", "University", "Dalhousie University", "Halifax", "Canada Education", "Moncton", "Toronto"]
apiKey = "xxx"
# store data that will be write to JSON file
data = {}
# go through all the keywords
for keyword in keywords:
    # for search the keyword in news api
    searchUrl = "http://newsapi.org/v2/everything?q=" + keyword + "&apiKey=" + apiKey
    # connect to url and get the result
    result = r.get(searchUrl)
    # read the output from the result
    data1 = result.text
    # remove escape characters
    data1 = data1.replace("\\r\\n", "")
    # convert the string to JSON
    parsedJS = js.loads(data1)
    # get the article part
    articles = parsedJS["articles"]
    data[keyword] = articles
    
# write data to json file    
with open("news_clean.json", "w", encoding="utf-8") as outfile:
    js.dump(data, outfile, ensure_ascii=False, indent=4) 
