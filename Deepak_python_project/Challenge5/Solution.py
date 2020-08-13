#  strings of vowels
vowels = 'aeiou'

ip_str = 'Hello, how are you I am your challenge master deepak..!'
# make it suitable for caseless comparision. 
ip_str = ip_str.casefold()

#  make a dictionary with each vowel a key and value 0
count = {}.fromkeys(vowels,0)

# count the vowels
for char in ip_str:
    if char in count:
        count[char] += 1

print(count)