def user_age(age):
    if age < 0:
        print("you are not born yet")
    elif age > 120:
        print("you are the oldest person alive")
    else:
        if age >100:
            print(f"you are already cross your 100 mark congratulations ")
        else:
            v = 100 - age
            print(f"after {v} years. you become 100  years old")
def user_year(year):
    if year >2020:
        print("you are not born yet")
    elif year<1900:
        print("you are the oldest person alive")
    else:
        if 2020 - year>100:
            print("you already crossed you 100 mark congratulation")
        else:
            v = year + 100
            print(f"you become 100 year old in year {v}")
if __name__ == '__main__':
    while(True):
        inp1 = int(input("Enter your age or the year of birth"))
        if inp1<150:
            user_age(age=inp1)
        else:
             user_year(year=inp1)
        inp2 = ""
        while(inp2 != "q" and inp2!="c"):
            inp2 = input("Press q for exit and c for continue")
            if inp2=="q":
                print("Thankyou for using our software")
                exit()
            elif inp2=="c":
                continue