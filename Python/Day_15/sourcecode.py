file = open("File address", "r")
data = file.read()
occurrences = data.count("the")
print('Number of occurrences of the word :', occurrences) 
