no_of_apple = int(input("Enter the number of apple Deepak have"))
mn_apple = int(input("Enter the minimum number of apple need to provide a children"))
mx_apple = int(input("Enter the maximum number of apple need to provide a children"))
# while(mn_apple<=mx_apple):
if mn_apple==mx_apple:
    print("this is not the range mn is equal to maximum")
    try:
        v = no_of_apple/mn_apple
        a = round(v)
        if (v-a) == 0:
            print(f"you can give {v} apple to every child")
        else:
            print("your range is not divisible by no of apple")

    except:
        print("this is not a valid range please provide appropriate range")
elif mn_apple>mx_apple:
    print("you not provided valid input your minimum number your minimum range is greater than maximum range ")
elif no_of_apple<mn_apple:
    print("you not provided valid input your no of apple is smaller than minimum range of apple ")
else:
    try:
        for v in range(mn_apple, mx_apple+1):
            v = no_of_apple/mn_apple
            a = round(v)
            if (v-a)==0:
                print(f"you can give {round(v)} apple to every children")
                mn_apple = mn_apple+1
                continue
            else:
                print(f"you can not give {mn_apple} to every child")
                mn_apple= mn_apple+1
                continue
    except:
        print("please provide valid input")