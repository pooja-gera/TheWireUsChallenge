# -*- coding: utf-8 -*-
import scrapy
from TopSong.items import TopSongItem

def form_1(response, index, artist, title):
    rawListLabels = response.xpath('//*[@id="collection-items-container"]/div[1]/p[1]/strong/text()').extract()
    rawList = response.xpath('//*[@id="collection-items-container"]/div[1]/p[1]/text()|//*[@id="collection-items-container"]/div[1]/p[1]/a/text()|//*[@id="collection-items-container"]/div[1]/p[1]/strong/text()|//*[@id="collection-items-container"]/div[1]/p[1]/span/text()|//*[@id="collection-items-container"]/div[1]/p[1]/span/strong/text()|//*[@id="collection-items-container"]/div[1]/p[1]/strong/strong/text()').extract()
    
    star = response.xpath('//*[@id="collection-items-container"]/div[1]/p[1]/text()|//*[@id="collection-items-container"]/div[1]/p[1]/a/text()|//*[@id="collection-items-container"]/div[1]/p[1]/strong/text()|//*[@id="collection-items-container"]/div[1]/p[1]/span/text()|//*[@id="collection-items-container"]/div[1]/p[1]/span/strong/text()|//*[@id="collection-items-container"]/div[1]/p[1]/strong/strong/text()').extract_first() == '*'
    if star:
        rawList = response.xpath('//*[@id="collection-items-container"]/div[1]/p[2]/text()|//*[@id="collection-items-container"]/div[1]/p[2]/a/text()|//*[@id="collection-items-container"]/div[1]/p[2]/strong/text()|//*[@id="collection-items-container"]/div[1]/p[2]/span/text()|//*[@id="collection-items-container"]/div[1]/p[2]/span/strong/text()|//*[@id="collection-items-container"]/div[1]/p[2]/strong/strong/text()').extract()

    i = len(rawList)-1
    text = ""
    if "Weeks;" in rawList[i] or "weeks," in rawList[i] or "weeks;" in rawList[i] or "Did Not Chart" in rawList[i] or "Did not chart" in rawList[i] or "Non-Single" in rawList[i] or "Predates chart" in rawList[i]:
        text = rawList.pop(len(rawList)-1) + text

    i = len(rawList)-2
    if "Weeks;" in rawList[i] or "weeks," in rawList[i] or "weeks;" in rawList[i] or "Did Not Chart" in rawList[i] or "Did not chart" in rawList[i] or "Non-Single" in rawList[i] or "Predates chart" in rawList[i]:
        text = rawList.pop(len(rawList)-1) + text
        text = rawList.pop(len(rawList)-1) + text

    i = len(rawList)-1
    if rawList[i].strip() == "":
        text = rawList.pop(len(rawList)-1)

    myString = "".join(rawList)
    myString = myString.replace(u'\xa0', u' ')
    writers = myString[myString.find(":")+1:myString.find("Producer")].strip()
    myString = myString[myString.find(":")+1:len(myString)]
    producers = myString[myString.find(":")+1:myString.find("Released")].strip()
    myString = myString[myString.find(":")+1:len(myString)]
    myString = myString[myString.find(":")+1:len(myString)]
    rawReleased = myString.strip()

    month = None
    year = None
    label = None
    if rawReleased is not None:
        rawReleased = rawReleased.replace(u'\u2019', '\'')
        rawReleased = rawReleased.replace(u'\xa0', ' ')
        rawReleased = rawReleased.split(',')
        try:
            label = rawReleased[1].lstrip(':').strip()
        except:
            pass
        if rawReleased[0].strip()[0] == '1':
            year = int(rawReleased[0].lstrip(':').strip())
        else:
            year = int(rawReleased[0].lstrip(':').strip().split('\'')[1].lstrip('\'').lstrip(u'’'))
            if year < 20 :
                year += 2000
            else:
                year += 1900
            month = rawReleased[0].lstrip(':').strip().split('\'')[0].strip()

    chartNo = None
    chartWeek = None
    try:
        text = text.replace(u'\xa0', u' ')
        text = text.split(' ')
        chartWeek = int(text[0])
        chartNo = int(text[3])
    except ValueError:
        pass

    rawDescription = ""
    i = 2
    if star:
        i += 1
    while "Appears on" not in response.xpath('//*[@id="collection-items-container"]/div[1]/p[' + str(i) + ']').extract_first():
        rawDescription += response.xpath('//*[@id="collection-items-container"]/div[1]/p[' + str(i) + ']').extract_first()
        i+=1

    rawDescription = rawDescription.replace(u'\u2019', '\'')
    rawDescription = rawDescription.replace(u'\xa0', u' ')

    description = None
    if rawDescription is not None:
        while "<" in rawDescription:
            rawDescription = rawDescription[0:rawDescription.find("<")] + rawDescription[rawDescription.find(">")+1:len(rawDescription)]
    description = rawDescription.strip()

    rawAlbumLabel = response.xpath('//*[@id="collection-items-container"]/div[1]/p[' + str(i) + ']/text()').extract()
    rawAlbumLabel = "".join(rawAlbumLabel)
    rawAlbumLabel = rawAlbumLabel[rawAlbumLabel.find("Appears on")+10:len(rawAlbumLabel)]
    rawAlbumLabel.lstrip(':')
    rawAlbumLabel.lstrip()
    album = None
    albumLabel = None
    if rawAlbumLabel is not None:
        try:
            albumLabel = rawAlbumLabel.lstrip().lstrip('(').rstrip(')')
        except IndexError:
            pass
        album = response.xpath('//*[@id="collection-items-container"]/div[1]/p[' + str(i) + ']/em/text()|//*[@id="collection-items-container"]/div[1]/p[' + str(i) + ']/em/a/text()').extract_first().strip()

    return TopSongItem(
        index = index,
        artist = artist,
        title = title,
        writers = writers,
        producers = producers,
        month = month,
        year = year,
        label = label,
        chartNo = chartNo,
        chartWeek = chartWeek,
        description = description,
        album = album,
        albumLabel = albumLabel
        )

def form_2(response, index, artist, title):
    rawListLabels = response.xpath('//*[@id="collection-items-container"]/div[1]/p[1]/strong/text()').extract()
    rawList = response.xpath('//*[@id="collection-items-container"]/div[1]/p[1]/text()|//*[@id="collection-items-container"]/div[1]/p[1]/a/text()|//*[@id="collection-items-container"]/div[1]/p[1]/strong/text()|//*[@id="collection-items-container"]/div[1]/p[1]/span/text()|//*[@id="collection-items-container"]/div[1]/p[1]/span/strong/text()|//*[@id="collection-items-container"]/div[1]/p[1]/strong/strong/text()').extract()

    i = len(rawList)-1
    rawDescription = ""
    while not("Weeks;" in rawList[i] or "weeks," in rawList[i] or "weeks;" in rawList[i] or "Did Not Chart" in rawList[i] or "Did not chart" in rawList[i] or "Non-Single" in rawList[i] or "Predates chart" in rawList[i]):
        rawDescription = rawList.pop(len(rawList)-1) + rawDescription
        i -= 1;

    i = len(rawList)-1
    text = ""
    if "Weeks;" in rawList[i] or "weeks," in rawList[i] or "weeks;" in rawList[i] or "Did Not Chart" in rawList[i] or "Did not chart" in rawList[i] or "Non-Single" in rawList[i] or "Predates chart" in rawList[i]:
        text = rawList.pop(len(rawList)-1)

    i = len(rawList)-1
    if rawList[i].strip() == "":
        text = rawList.pop(len(rawList)-1)

    myString = "".join(rawList)
    myString = myString.replace(u'\xa0', u' ')
    writers = myString[myString.find(":")+1:myString.find("Producer")].strip()
    myString = myString[myString.find(":")+1:len(myString)]
    producers = myString[myString.find(":")+1:myString.find("Released")].strip()
    myString = myString[myString.find(":")+1:len(myString)]
    myString = myString[myString.find(":")+1:len(myString)]
    rawReleased = myString.strip()

    month = None
    year = None
    label = None
    if rawReleased is not None:
        rawReleased = rawReleased.replace(u'\u2019', '\'')
        rawReleased = rawReleased.replace(u'\xa0', ' ')
        rawReleased = rawReleased.split(',')
        try:
            label = rawReleased[1].lstrip(':').strip()
        except:
            pass
        if rawReleased[0].strip()[0] == '1':
            year = int(rawReleased[0].lstrip(':').strip())
        else:
            year = int(rawReleased[0].lstrip(':').strip().split('\'')[1].lstrip('\'').lstrip(u'’'))
            if year < 20 :
                year += 2000
            else:
                year += 1900
            month = rawReleased[0].lstrip(':').strip().split('\'')[0].strip()

    chartNo = None
    chartWeek = None
    try:
        text = text.replace(u'\xa0', u' ')
        text = text.split(' ')
        chartWeek = int(text[0])
        chartNo = int(text[3])
    except ValueError:
        pass

    rawDescription = rawDescription.replace(u'\u2019', '\'')
    rawDescription = rawDescription.replace(u'\xa0', u' ')

    description = None
    if rawDescription is not None:
        while "<" in rawDescription:
            rawDescription = rawDescription[0:rawDescription.find("<")] + rawDescription[rawDescription.find(">")+1:len(rawDescription)]
    description = rawDescription.strip()

    rawAlbumLabel = response.xpath('//*[@id="collection-items-container"]/div[1]/p[2]/text()').extract()
    if "Appears on" in rawAlbumLabel[0] :
        rawAlbumLabel.pop(0)
    try:
        if rawAlbumLabel[0] == ' ':
            rawAlbumLabel.pop(0)
    except IndexError:
        pass
    album = None
    albumLabel = None
    if rawAlbumLabel is not None:
        try:
            albumLabel = rawAlbumLabel[0].lstrip().lstrip('(').rstrip(')')
        except IndexError:
            pass
        album = response.xpath('//*[@id="collection-items-container"]/div[1]/p[2]/em/text()|//*[@id="collection-items-container"]/div[1]/p[2]/em/a/text()').extract_first().strip()

    return TopSongItem(
        index = index,
        artist = artist,
        title = title,
        writers = writers,
        producers = producers,
        month = month,
        year = year,
        label = label,
        chartNo = chartNo,
        chartWeek = chartWeek,
        description = description,
        album = album,
        albumLabel = albumLabel
        )

def form_3(response, index, artist, title):
    rawListLabels = response.xpath('//*[@id="collection-items-container"]/div[1]/p[1]/strong/text()').extract()
    rawList = response.xpath('//*[@id="collection-items-container"]/div[1]/p[1]/text()|//*[@id="collection-items-container"]/div[1]/p[1]/a/text()|//*[@id="collection-items-container"]/div[1]/p[1]/strong/text()|//*[@id="collection-items-container"]/div[1]/p[1]/span/text()|//*[@id="collection-items-container"]/div[1]/p[1]/span/strong/text()|//*[@id="collection-items-container"]/div[1]/p[1]/strong/strong/text()').extract()

    rawAlbumLabel = rawList.pop(len(rawList)-1)

    i = len(rawList)-1
    rawDescription = ""
    while not("Weeks;" in rawList[i] or "weeks," in rawList[i] or "weeks;" in rawList[i] or "Did Not Chart" in rawList[i] or "Did not chart" in rawList[i] or "Non-Single" in rawList[i] or "Predates chart" in rawList[i]):
        rawDescription = rawList.pop(len(rawList)-1) + rawDescription
        i -= 1;

    i = len(rawList)-1
    text = ""
    if "Weeks;" in rawList[i] or "weeks," in rawList[i] or "weeks;" in rawList[i] or "Did Not Chart" in rawList[i] or "Did not chart" in rawList[i] or "Non-Single" in rawList[i] or "Predates chart" in rawList[i]:
        text = rawList.pop(len(rawList)-1)

    i = len(rawList)-1
    if rawList[i].strip() == "":
        text = rawList.pop(len(rawList)-1)

    myString = "".join(rawList)
    myString = myString.replace(u'\xa0', u' ')
    writers = myString[myString.find(":")+1:myString.find("Producer")].strip()
    myString = myString[myString.find(":")+1:len(myString)]
    producers = myString[myString.find(":")+1:myString.find("Released")].strip()
    myString = myString[myString.find(":")+1:len(myString)]
    myString = myString[myString.find(":")+1:len(myString)]
    rawReleased = myString.strip()

    month = None
    year = None
    label = None
    if rawReleased is not None:
        rawReleased = rawReleased.replace(u'\u2019', '\'')
        rawReleased = rawReleased.replace(u'\xa0', ' ')
        rawReleased = rawReleased.split(',')
        try:
            label = rawReleased[1].lstrip(':').strip()
        except:
            pass
        if rawReleased[0].strip()[0] == '1':
            year = int(rawReleased[0].lstrip(':').strip())
        else:
            year = int(rawReleased[0].lstrip(':').strip().split('\'')[1].lstrip('\'').lstrip(u'’'))
            if year < 20 :
                year += 2000
            else:
                year += 1900
            month = rawReleased[0].lstrip(':').strip().split('\'')[0].strip()

    chartNo = None
    chartWeek = None
    try:
        text = text.replace(u'\xa0', u' ')
        text = text.split(' ')
        chartWeek = int(text[0])
        chartNo = int(text[3])
    except ValueError:
        pass

    rawDescription = rawDescription.replace(u'\u2019', '\'')
    rawDescription = rawDescription.replace(u'\xa0', u' ')

    description = None
    if rawDescription is not None:
        while "<" in rawDescription:
            rawDescription = rawDescription[0:rawDescription.find("<")] + rawDescription[rawDescription.find(">")+1:len(rawDescription)]
    description = rawDescription.strip()

    rawAlbumLabel = rawAlbumLabel[rawAlbumLabel.find("Appears on")+10:len(rawAlbumLabel)]
    rawAlbumLabel.lstrip(':')
    rawAlbumLabel.lstrip()
    album = None
    albumLabel = None
    if rawAlbumLabel is not None:
        albumLabel = rawAlbumLabel.lstrip().lstrip('(').rstrip(')')
        album = response.xpath('//*[@id="collection-items-container"]/div[1]/p[1]/em/text()|//*[@id="collection-items-container"]/div[1]/p[1]/em/a/text()').extract_first().strip()

    return TopSongItem(
        index = index,
        artist = artist,
        title = title,
        writers = writers,
        producers = producers,
        month = month,
        year = year,
        label = label,
        chartNo = chartNo,
        chartWeek = chartWeek,
        description = description,
        album = album,
        albumLabel = albumLabel
        )

class TopsongsSpider(scrapy.Spider):
    name = 'topsongs'
    start_urls = ['https://www.rollingstone.com/music/lists/the-500-greatest-songs-of-all-time-20110407/smokey-robinson-and-the-miracles-shop-around-20110526']

    def parse(self, response):
        rawIndex = response.xpath('//*[@id="collection-items-container"]/h2/span/text()').extract_first()
        index = None
        if rawIndex is not None:
            index = int(rawIndex.rstrip('.'))
        
        rawArtistTitle = response.xpath('//*[@id="collection-items-container"]/h2/text()').extract_first()
        artist = None
        title = None
        if rawArtistTitle is not None:
            artist = rawArtistTitle.split(',')[0].strip().rstrip(',')
            title = rawArtistTitle.split(',')[1].lstrip().strip('\'')

        form = 1
        if response.xpath('//*[@id="collection-items-container"]/div[1]/p[2]/strong/text()').extract_first() is not None:
            if "RELATED:" in response.xpath('//*[@id="collection-items-container"]/div[1]/p[2]/strong/text()').extract_first() or "Appears on" in response.xpath('//*[@id="collection-items-container"]/div[1]/p[2]/strong/text()').extract()[len(response.xpath('//*[@id="collection-items-container"]/div[1]/p[2]/strong/text()').extract())-1]:
                form = 3
        if response.xpath('//*[@id="collection-items-container"]/div[1]/p[2]').extract_first() is None:
            form = 3
        if response.xpath('//*[@id="collection-items-container"]/div[1]/p[3]/strong/text()').extract_first() is not None:
            if "RELATED:" in response.xpath('//*[@id="collection-items-container"]/div[1]/p[3]/strong/text()').extract_first():
                form = 2
        if response.xpath('//*[@id="collection-items-container"]/div[1]/p[4]/strong/text()').extract_first() is not None:
            if "RELATED:" in response.xpath('//*[@id="collection-items-container"]/div[1]/p[4]/strong/text()').extract_first():
                form = 1        

        if form == 1:
            yield form_1(response, index, artist, title)
        if form == 2:
            yield form_2(response, index, artist, title)
        if form == 3:
            print form_3(response, index, artist, title)

        next_url = response.xpath('/html/head/link[@rel="next"]/@href').extract_first()
        if next_url is not None:
            yield scrapy.Request(next_url, callback=self.parse)