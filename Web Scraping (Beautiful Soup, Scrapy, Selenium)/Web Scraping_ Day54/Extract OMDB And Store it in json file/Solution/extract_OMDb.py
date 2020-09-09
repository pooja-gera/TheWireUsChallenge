
# import libraries
import requests as r
import json as js

# keyword that will be used for search in omdb api
keywords = ["Canada", "University","Moncton", "Halifax", "Toronto", "Vancouver", "Alberta", "Niagara"]
apiKey = "xxx"
# store data that will be write to JSON file
data = {}
# go through all the keywords
for keyword in keywords:
    # for search the keyword in omdb
    searchUrl = "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + keyword
    # connect to url and get the result
    result1 = r.get(searchUrl)
    # read the output from the result
    data1 = result1.text
    # convert the string to JSON
    parsedJS1 = js.loads(data1)
    # limit of data retrieved from search
    max = len(parsedJS1["Search"])
    # create movie list
    movieList = []
    # go through all the movie retrieved from search
    for number in range (0, max):       
        # get movie id (imdbID)
        imdbID = parsedJS1["Search"][number]["imdbID"]
        # for getting the movie detail in omdb
        movieDetailUrl = "http://www.omdbapi.com/?i=" + imdbID + "&apikey=" + apiKey
        # connect to url and get the result
        result2 = r.get(movieDetailUrl)
        # read the output from the result
        data2 = result2.text
        # convert the string to JSON
        parsedJS2 = js.loads(data2)
        movieList.append(parsedJS2)
    # add to data (key = keyword, value = movieList)
    data[keyword] = movieList

# write data to json file
with open("movies.json", "w", encoding="utf-8") as outfile:
    js.dump(data, outfile, ensure_ascii=False, indent=4)
