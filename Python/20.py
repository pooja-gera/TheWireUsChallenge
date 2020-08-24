# Problem link -> https://www.hackerrank.com/challenges/capitalize/problem

__author__ = "Mahtab Alam"


def cap(s):
    l = s.split(" ")
    a = [i.capitalize() for i in l]
    return " ".join(a)


s = input()
print(cap(s))
