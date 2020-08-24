# Problem Link -> https://www.hackerrank.com/challenges/string-validators/problem

__author__ = "Mahtab Alam"

s = input()
for test in ('isalnum', 'isalpha', 'isdigit', 'islower', 'isupper'):
    print(any(eval("c." + test + "()") for c in s))
