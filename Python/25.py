# Extract Numbers from a string


__author__ = "Mahtab Alam"

import re


def numbers(str):
    return re.findall('\d+', str)


s = "Python123"
num = numbers(s)
print(''.join(num))
