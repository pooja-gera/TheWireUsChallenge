# Implement the Linear search

__author__ = "Mahtab Alam"

def Linear_Search(alist, item):
    for i in range(len(alist)):
        if alist[i] == item:
            return True
    return False


l = [23, 4, 5, 1, 2, 3]

print(Linear_Search(l, 10))
