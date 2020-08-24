# Write a function that takes an ordered list of numbers
# (a list where the elements are in order from smallest to
# largest) and another number. The function decides whether
# or not the given number is inside the list and returns
# (then prints) an appropriate boolean.


def Search(alist, item):
    first = 0
    last = len(alist)-1
    found = False
    while first <= last and not found:
        midpoint = (first + last)//2
        if alist[midpoint] == item:
            found = True
        else:
            if item < alist[midpoint]:
                last = midpoint-1
            else:
                first = midpoint+1
    return found


t = [0, 1, 2, 8, 13, 17, 19, 32, 42, ]
print(Search(t, 3))
print(Search(t, 13))
