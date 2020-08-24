# implemet Binary Search Algorithm

# Note For binary serch Array must be sorted

__author__ = "Mahtab Alam"


def bianry_search(alist, item):
    """Binary Search Algorithm"""
    first = 0
    last = len(alist)-1
    found = False
    while first <= last and not found:
        mid = (first+last)//2
        if alist[mid] == item:
            found = True
        else:
            if item < alist[mid]:
                last = mid-1
            else:
                first = mid+1
    return found


print(bianry_search([4, 5, 6, 7, 8, 9], 4))
