# Write a Python program to download and display the content of robot.txt for en.wikipedia.org.

import requests

url = requests.get("https://en.wikipedia.org/robots.txt")
print("Robots.txt for Wikipedia")
print("==========================================")

print(url.text)
