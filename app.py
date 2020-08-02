import string

caption='g fmnc wms bgblr rpylqjyrc gr zw fylb'
new=''

for letter in caption: #{
    found= string.ascii_lowercase.find(letter)

    if (found==-1): #{
        new+=letter
        continue
    #}
    index=found+2

    if (index>=26):
            index-=26
    new+= string.ascii_lowercase[index]
#}
print(new)