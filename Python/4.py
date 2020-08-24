# Program to find whether a no is power of two
# Given a positive integer, write a function to find if it is a power of two or not.

# Input : n = 4
# Output : Yes
# 22 = 4

# Input : n = 7
# Output : No

# Input : n = 32
# Output : Yes
# 25 = 32


def check_Power(number):
    if(number & number-1) == 0:
        print("yes")
    else:
        print("NO")


a = 4
b = 7
c = 32
check_Power(a)
check_Power(b)
check_Power(c)
