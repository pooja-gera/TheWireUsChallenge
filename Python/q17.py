# If Give an integer N . Write a program to obtain the sum of the first and last digit of this number.

# Input
# The first line contains an integer T, total number of test cases. Then follow T lines, each line contains an integer N.

# Output
# Display the sum of first and last digit of N.

# Constraints
# 1 ≤ T ≤ 1000
# 1 ≤ N ≤ 1000000
# Example
# Input
# 3
# 1234
# 124894
# 242323

# Output
# 5
# 5
# 5


def LastDigit(a):
    return a % 10


def FirstDigit(a):
     # Remove last digit from number
    # till only one digit is left
    while(a >= 10):
        a /= 10
    return int(a)


t = int(input())
for i in range(t):
    number = int(input())
    print(LastDigit(number)+FirstDigit(number))
