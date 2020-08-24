# check given number is odd or even without using modulus operator.


def check_Even_odd(number):
    """This function check whether the given number is odd or even"""
    if(number & 1) == 1:
        print("Odd Number")
    else:
        print("Even Number")


a = 5
b = 6
check_Even_odd(a)
check_Even_odd(b)
