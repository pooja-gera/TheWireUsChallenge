# Implement a function that takes as input three variables, and
# returns the largest of the three. Do this without using the Python max() function!


def max_Three(a, b, c):
    if a > b and a > c:
        return a
    elif b > a and b > c:
        return b
    else:
        return c


a = int(input())
b = int(input())
c = int(input())

print(max_Three(a, b, c))
