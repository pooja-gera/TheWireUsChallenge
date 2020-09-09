from requests import get, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
from time import time, sleep
from datetime import datetime
import telepot
from telepot.namedtuple import ReplyKeyboardMarkup, KeyboardButton, ReplyKeyboardRemove
from telepot.loop import MessageLoop
from telepot.exception import BotWasBlockedError, BotWasKickedError
import re
import twitter
import json
import telepot.api
import urllib3
from typing import Optional, Tuple
from bs4 import BeautifulSoup

settings = json.load(open("settings.json", 'r'))

telepot.api._pools = {
    'default': urllib3.PoolManager(num_pools=3, maxsize=10, retries=3, timeout=30),
}  # not very reliable telegram lib.


MASTER_ID = settings['MASTER_ID']
API_COINMARKETCAP = settings['API_COINMARKETCAP']
BOT_KEY = settings['BOT_KEY']


def coinmarketcap_info(limit: int = 10) -> str:
    """Getting price data for several most interesting cryptocurrencies and their price movements in the past
    1 hour, 24 hours and 7 days."""
    saved_prices_info = dct.get("prices")
    # ~333 api calls/day for free, that is 1 call in approx 260 seconds. So 5 mins should be enough, right?
    if saved_prices_info and time() - saved_prices_info[0] < 5 * 60:
        print("Used saved prices")
        return saved_prices_info[1]

    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    parameters = {
        #   'start':'1',
        'limit': str(limit)
    }
    headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': API_COINMARKETCAP,
    }

    session = Session()
    session.headers.update(headers)

    try:
        response = session.get(url, params=parameters)
        data = json.loads(response.text)
        out = "Top-10 cryptocurrencies:"

        for currency_info in data['data']:
            message = f"""
            {currency_info['name']}
            Last updated: {currency_info['last_updated']}
            Percent change 1h: {currency_info['quote']['USD']['percent_change_1h']:.2f}%
            Percent change 24h: {currency_info['quote']['USD']['percent_change_24h']:.2f}%
            Percent change 7d: {currency_info['quote']['USD']['percent_change_7d']:.2f}%\n
            """

            out += message
        dct["prices"] = (time(), out)
        return out
    except (ConnectionError, Timeout, TooManyRedirects) as e:
        print(e, 'occurred when calling coinmarketcap_info()!')
        return ""


def get_news() -> str:
    """Combining news from coindesk into a message with topics and links"""
    saved_news_info = dct.get("news")
    # no point in scraping info each time, maybe something is saved no more than 30 mins ago
    if saved_news_info and time() - saved_news_info[0] < 30 * 60:
        print("Used saved news")
        return saved_news_info[1]

    url = 'http://www.coindesk.com'
    try:
        response = get(url)
    except (ConnectionError, Timeout, TooManyRedirects):
        return "Error during news extraction"

    soup = BeautifulSoup(response.text, 'html.parser')
    top = soup.find_all('a', {'class': 'top-article'})  # one top article
    featured = soup.find_all('a', {'class': 'feature'})  # 3 featured articles
    stream = soup.find_all('a', {'class': 'stream-article'})  # ~10 other articles

    message = "Top news from https://www.coindesk.com/ \n"
    regex = re.compile(r'(href=\")(.+?)(\" title=\")(.+?)(\">)')  # junk, url, junk, description
    news = [(x[1], x[3]) for x in regex.findall(str(top) + str(featured) + str(stream))]
    for i in news:
        message += f"{i[1]}\n{i[0]}\n\n"

    dct['news'] = (time(), message)
    return message


def get_help() -> str:
    return "/k - open custom keyboard\n \
/h - hide custom keyboard\n \
/tw - top recent tweets on #ico and #btc\n \
/info - price changes according to coinmarketcap\n \
/news - news (coindesk.com)\n \
/_any_request_ top_tweets language - search of top tweets by topic \
(top and lang are optional, ex: \n/#dash 5 or \n/#eth 3 ru)"


def send_simple_message(message: str, chat_id: Optional[int] = None) -> None:
    if not chat_id:
        bot.sendMessage(MASTER_ID, message)
    else:
        bot.sendMessage(chat_id, message)
    return


# Auto sending - prices on diff exchanges and news (3 times a day)
def auto_hourly_sending():
    now = datetime.now()
    # sending price info and news, 3 times a day
    if now.hour in [10, 15, 20] and time()-dct['last_sending'] > 3600:  # arbitrary chosen hours, server time
        cci = coinmarketcap_info()
        nws = get_news()
        for user_id in USERS:
            try:
                send_simple_message(now.strftime('%Y/%m/%d %H:%M')+'\n' + cci, user_id)
                send_simple_message(nws, user_id)
            except (BotWasBlockedError, BotWasKickedError):
                continue  # just ignore them for now.
        dct["last_sending"] = int(time())
    return


# Inputs handling - allows to get info manually (for everyone, not only for specified chats)
def handle(msg):
    content_type, chat_type, chat_id = telepot.glance(msg)

    username = msg.get('chat', {}).get('username', 'Nope')
    first_name = msg.get('chat', {}).get('first_name', 'Nope')
    command = msg['text']

    if content_type != 'text' or command[0] != '/':
        return

    print(f'Got command from {chat_id} ({username}, {first_name}): {command}')

    if msg['text'] == '/k':
        bot.sendMessage(chat_id, 'Awaiting instructions',
                        reply_markup=ReplyKeyboardMarkup(
                            keyboard=[
                                [KeyboardButton(text="/tw")],
                                [KeyboardButton(text="/info"), KeyboardButton(text="/news")],
                                [KeyboardButton(text="/time"), KeyboardButton(text="/id")],
                                [KeyboardButton(text="/help"), KeyboardButton(text="/h")],
                            ]
                        ))

    elif msg['text'] == '/start':
        USERS.add(chat_id)
        with open("users.txt", 'a+') as fl:
            fl.write(f"{chat_id} \n")

        bot.sendMessage(chat_id, 'Hello, {}'.format(chat_id))
        bot.sendMessage(chat_id, 'WARNING! Bot was made for tests only, can be unavailable quite often.\n \
            Sometimes request needs to be sent twice due to network issues.')
        bot.sendMessage(chat_id, get_help())

    elif msg['text'].lower() == '/h':
        markup = ReplyKeyboardRemove()
        bot.sendMessage(chat_id, 'Hide custom keyboard', reply_markup=markup)

    elif command == '/info':
        bot.sendMessage(chat_id, "Got command {}".format(command))
        bot.sendMessage(chat_id, "Market changes:\n%s" % coinmarketcap_info())

    elif command == '/tw':
        bot.sendMessage(chat_id, "Got command {}".format(command))
        bot.sendMessage(chat_id, "Top tweets:\n%s" % twitter_crypto())

    elif command == '/help':
        bot.sendMessage(chat_id, "Got command {}".format(command))
        bot.sendMessage(chat_id, get_help())

    elif command == '/news':
        bot.sendMessage(chat_id, "Got command {}".format(command))
        bot.sendMessage(chat_id, get_news())

    elif command == '/time':
        now = datetime.now().strftime('%Y/%m/%d %H:%M')
        nw = datetime.fromtimestamp(time()).strftime('%Y/%m/%d %H:%M')
        bot.sendMessage(chat_id, now+'\n'+nw)

    elif command == '/id':
        bot.sendMessage(chat_id, "Got command {}".format(command))
        bot.sendMessage(chat_id, chat_id)

    elif command == '/stop':
        bot.sendMessage(chat_id, "Got command {}".format(command))
        bot.sendMessage(chat_id,
                        "To stop receiving messages - right mouse button \
                        click on dialog => 'stop and block bot' ")

    else:
        ln = command.split()
        topic = ln[0][1:]
        try:
            top = int(ln[1])
        except(IndexError, ValueError):
            top = 3

        try:
            lang = ln[2]
        except(IndexError, ValueError):
            lang = 'en'
        bot.sendMessage(chat_id, "Got command {}".format(command))
        bot.sendMessage(chat_id, twitter_crypto(topic, top=top, lang=lang))

    return


def extract_info(twt: dict) -> Tuple:
    """Extracts text, time of creation, hashtags and url from tweet"""
    if 'retweeted_status' in twt.keys():
        try:
            url = twt['retweeted_status']['entities']['urls'][0]['url']
        except IndexError:
            url = ''.join(twt['retweeted_status']['entities']['urls'])
        text = twt['retweeted_status']['text']
    else:
        url = ''
        text = twt['text']

    return (text, twt["created_at"], twt["retweet_count"],
            ' '.join([x['text'] for x in twt['entities']['hashtags']]),  url)


def get_top_news(topic: str, top: int = 3, lang: str = 'en') -> str:
    """Returns top recent tweets for the desired theme on different languages."""
    search_results = twitter_api.search.tweets(q=topic, count=100, lang=lang, result_type='recent')

    ls = []
    for i in search_results['statuses']:
        res = extract_info(i)
        if res[3] not in [x[3] for x in ls]:
            ls.append((res[0], res[1], res[2], res[3], res[4]))

    ls = sorted(ls, key=lambda x: x[2], reverse=True)[:top]

    msg = '{}\n'.format(topic)
    for i in ls:
        # print(i)
        msg += "{}\n{}\n{}\n{}\n{}\n\n\n".format(i[0], i[1], i[2], i[3], i[4])  # text, time, retweets, tags, url
    return msg


def twitter_crypto(topic=None, top=3, lang='en'):
    if not topic:
        msg = ''
        for t in ["#ico", '#btc']:
            ms = get_top_news(t, top=top, lang=lang)
            msg += ms
        return msg
    else:
        return get_top_news(topic, top=top, lang=lang)


# Main - saves price, calculates signals and decides whether it is time to send message and to whom;
# is it time to send news; are there connection errors.
def main():
    now = datetime.now()
    try:
        auto_hourly_sending()
        sleep(60)
    except (ValueError, ConnectionError):
        errmsg = "Connection lost at " + now.strftime('%Y/%m/%d %H:%M')
        print(errmsg)
        # send_simple_message(errmsg,True)
        sleep(60)


# Essential info and bot init here
if __name__ == "__main__":
    bot = telepot.Bot(BOT_KEY)
    auth = twitter.oauth.OAuth(settings['Access Token'],
                               settings['Access Token Secret'],
                               settings['Consumer Key'],
                               settings['Consumer Secret'])
    twitter_api = twitter.Twitter(auth=auth)

    try:
        USERS = [int(x.strip()) for x in open('users.txt').readlines()]
        USERS = set([x for x in USERS])
        print("{} users found".format(len(USERS)))
    except FileNotFoundError:
        USERS = set()

    dct = {'last_sending': 1523259852}

    print(bot.getMe())

    # bot.message_loop(handle)
    MessageLoop(bot, handle).run_as_thread()
    while 1:
        main()
