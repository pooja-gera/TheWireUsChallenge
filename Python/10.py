# Given a .txt file that has a list of a bunch of names, count 
# how many of each name there are in the file, and print out 
# the results to the screen.

count =0
with open('Day11\\names.txt','r') as f:
    line = f.readlines()
    for l in line:
        count += 1
    print(count)