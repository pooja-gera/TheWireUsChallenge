__author__ = "Mahtab Alam"


from urllib.request import urlopen
from urllib.error import HTTPError, URLError

try:
    url = urlopen("http://www.abcxyz.com")
except HTTPError:
    print("Http Error")
except URLError:
    print("Server not find")
else:
    print(url.read())