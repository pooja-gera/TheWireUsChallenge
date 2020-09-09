


import tweepy as tw
import json as js
import re

# keyword that will be used for search in twitter api
keywords = ["Canada", "University", "Dalhousie University", "Halifax", "Canada Education"]
# attribute
attributes = ["id", "text", "usernameId", "username", "userLocation", "datetime", "language", "retweetCount", "favoriteCount"]
length = len(attributes)
maxRecords = 3200
# get credential for twitter api
apiKey = "xxx"
apiKeySecret = "xxx"
accessToken = "xxx"
accessTokenSecret = "xxx"
# get twitter credential
auth = tw.OAuthHandler(apiKey, apiKeySecret)
auth.set_access_token(accessToken, accessTokenSecret)
api = tw.API(auth, wait_on_rate_limit=True)
# Define the date_since date as variables to search from that date
date_since = "2020-01-01"
# define attribute that will be collected
data = {}
tweetList = []

class RestAPI():
    
    def getTweet(self): 
        # Iterate all keywords and searh in API
        for keyword in keywords:
            tweets = []
            tweets = tw.Cursor(api.search,
                      q=keyword,
                      lang="en", 
                      tweet_mode="extended",
                      since=date_since).items(700)
            countRecords = 0    
            # Iterate tweets
            for tweet in tweets:
                countRecords += 1
                id = tweet.id
                text = cleanData(tweet.full_text )
                usernameId = tweet.user.id
                username = cleanData(tweet.user.name)
                userLocation = cleanData(tweet.user.location)
                datetime = tweet.created_at
                datetimeFormat = datetime.strftime("%Y-%m-%d::%H-%M")
                language = tweet.lang
                retweetCount = tweet.retweet_count
                favoriteCount = tweet.favorite_count
                tweetValues = [id, text, usernameId, username, userLocation, datetimeFormat, language, retweetCount, favoriteCount]
                tweetDict = {}
                for index in range(length):
                    tweetDict[attributes[index]] = tweetValues[index]
                tweetList.append(tweetDict)
            global maxRecords
            maxRecords = maxRecords - countRecords
        data["REST"] = tweetList

class StreamingAPI(tw.StreamListener):
    def __init__(self, max):
        self.counter = 0
        self.limit = max/10
        
    # Streaming API. Streaming API listens for live tweets
    def on_data(self, onData):
        if self.counter < self.limit:
            tweet = js.loads(onData)
            id = tweet["id"]
            text = cleanData(tweet["text"])
            usernameId = tweet["user"]["id"]
            username = cleanData(tweet["user"]["name"])
            userLocation = cleanData(tweet["user"]["location"])
            datetime = tweet["created_at"]
            language = tweet["lang"]
            retweetCount = tweet["retweet_count"]
            favoriteCount = tweet["favorite_count"]
            tweetValues = [id, text, usernameId, username, userLocation, datetime, language, retweetCount, favoriteCount]
            tweetDict = {}
            for index in range(length):
                tweetDict[attributes[index]] = tweetValues[index]
                tweetList.append(tweetDict)  
            self.counter += 1
            return True
        else:
            return False
    # To print the status if an error happens
    def on_error(self,status):
        print(status) 
        return False
 
def call_api(stream, words):
    # If the time exceed, then the tweet scrapping stops
    try:
        stream.filter(track=words, stall_warnings=True)
    except Exception as e:
        print(e)
        
#Emoji patterns
emoji_pattern = re.compile("["
                           u"\U0001F600-\U0001F64F"  # emoticons
                           u"\U0001F300-\U0001F5FF"  # symbols &amp; pictographs
                           u"\U0001F680-\U0001F6FF"  # transport &amp; map symbols
                           u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                           u"\U00002702-\U000027B0"
                           u"\U000024C2-\U0001F251"
                           "]+", flags=re.UNICODE)
        
def cleanData(text):
    text = str(text)
    #replace consecutive non-ASCII characters with a space
    text = re.sub(r'[^\x00-\x7F]+',' ', text)    
    #remove emojis
    text = emoji_pattern.sub(r'', text)
    #remove url
    text = re.sub(r'http\S+','', text)
    #remove mention (@)
    text = re.sub(r'@\S+','', text)
    #remove hashtag (#)
    text = re.sub(r'#\S+','', text)
    #remove whitespace character
    text = re.sub(r'\n','', text)
    return text.strip()

if __name__ == "__main__":
    # Collect tweets by REST api
    restApi = RestAPI()
    restApi.getTweet()
    # Collect tweets by Streaming api
    tweetList = []
    listener = StreamingAPI(maxRecords)
    auth = tw.OAuthHandler(apiKey, apiKeySecret)
    auth.set_access_token(accessToken, accessTokenSecret)
    stream = tw.Stream(auth, listener)
    call_api(stream, keywords)
    data["Streaming"] = tweetList

# write data to json file
with open("twitter_clean.json", "w", encoding="utf-8") as outfile:
     js.dump(data, outfile, ensure_ascii=False, indent=4)
