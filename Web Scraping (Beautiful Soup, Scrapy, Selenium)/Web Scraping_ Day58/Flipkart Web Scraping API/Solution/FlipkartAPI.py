from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as uReq
from flask import Flask,render_template,request
import tablib                                       
import os


app=Flask(__name__)

@app.route('/')
def hello():
    return "Enter search query at the end of the url <br> egs:- to search iphone <br> add /iphone  at the end of url"

@app.route('/<name>')
def getdata(name):
    query=name.replace(" ","%20")                            
    my_url = 'https://www.flipkart.com/search?q='+query+'&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off'

    uClient = uReq(my_url)
    page_html=uClient.read()
    uClient.close()
    page_soup = soup(page_html,"html.parser")

    containers = page_soup.findAll("div",{"class":"_3O0U0u"})

    filename="flipkartproducts.csv"
    f=open(filename,"w")                                    #creating file

    headers="Product Name,Price,Rating" + "\n"

    f.write(headers)

    for  container in containers:
        #for getting name
        product_name = container.div.img["alt"]  
        product_name=product_name.replace(","," | ")        #replacing comas cause in csv coma seperates different values

        #for getting price
        price_container=container.findAll("div",{"class" : "_1vC4OE _2rQ-NK"})
        try:
            price = price_container[0].text.replace("₹","Rs ")
            price=price.replace(",","")                         #replacing comas cause in csv coma seperates different values
        except (IndexError, ValueError):
            pass
        
        #for getting rating
        rating_container=container.findAll("div",{"class" : "hGSR34"})
        try:                                                #to solve index error in certain cases
            rating = rating_container[0].text + "*"           
            rating=rating.replace(",","")                   #replacing comas cause in csv coma seperates different values
        except (IndexError, ValueError):
            pass

        f.write(product_name + "," + price + "," + rating + "\n")   #writing to file

    f.close()
    dataset = tablib.Dataset()
    with open(os.path.join(os.path.dirname(__file__),filename)) as f:
        dataset.csv = f.read()
    return dataset.html
      

