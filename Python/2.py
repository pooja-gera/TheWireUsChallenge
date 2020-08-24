# Find the Missing Number
# You are given a list of n-1 integers and these integers are in
# the range of 1 to n. There are no duplicates in list. One of
# the integers is missing in the list. Write an efficient code
# to find the missing integer.


def missing(arr):
    size = len(arr)
    a1 = arr[0]
    a2 = 1
    for i in range(1, size):
        a1 = a1 ^ arr[i]
    for i in range(2, size+2):
        a2 = a2 ^ i

    return a1 ^ a2


if __name__ == '__main__':

    a = [1, 2, 4, 5, 6]

    miss = missing(a)
    print(miss)
