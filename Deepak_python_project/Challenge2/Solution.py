i = 22
n = 1
print( "number of guess limited only 5 times")
while(n<=5):
    inp = int(input("enter a number \n"))
    if inp > i:
        print(" your number is greater\n")
        print(n,"chance used out of 5")
        n=n+1
        continue
    elif inp<i:
        print("your number is smaller\n")
        print(n,"chance used out of 5")
        n=n+1
        continue
    else:
            print("congratulation you win the game\n")
            print("you won this game  in ",n ,"chances out of 5")
            break
else:
    if n>5:
     print("game over better luck next time you used your all the chances")

