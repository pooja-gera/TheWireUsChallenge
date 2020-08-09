#Source Code: Pooja Gera
import random

number = random.randint(1,7)
print(number)

#snakes
#32 goes to 10
#36 goes to 6
#48 goes to 26
#62 goes to 18
#95 goes to 56
#97 goes to 78

#ladders
#1 goes to 38
#4 goes to 14
#8 goes to 30
#21 goes to 42
#28 goes to 76
#50 goes to 67
#71 goes to 92
#80 goes to 99
sum=0
while sum!=100:
    number=random.randint(1,7)
    sum+=number
    if sum==1:
        sum=38
        print(sum)
    elif sum==4:
        sum=14
        print(sum)
    elif sum==8:
        sum=30
        print(sum)
    elif sum==21:
        sum=42
        print(sum)
    elif sum==28:
        sum=76
        print(sum)
    elif sum==50:
        sum=67
        print(sum)
    elif sum==71:
        sum=92
        print(sum)
    elif sum==8:
        sum=99
        print(sum)
