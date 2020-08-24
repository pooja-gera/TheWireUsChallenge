

# Problem Link https://www.hackerrank.com/challenges/swap-case/problem


__author__ = "Mahtab Alam"


def swap_case(s):
    a = ""
    for word in s:
        if word.isupper() == True:
            a += (word.lower())
        else:
            a += (word.upper())
    return a


s = "Www.HackerRank.com"

print(swap_case(s))
