while True:
    balance = 10000
    print("       ATM      ")
    print("""
    1)        Balance 
    2)        Withdraw
    3)        Deposite
    4)        Quit
     """)
    try:
        Option = int(input("Enter Option : "))
    except Exception as e:
        print("Error:", e)
        print("Enter 1,2,3 or 4 only")
        continue
    if Option == 1:
        print("Balance $" , balance)
    if Option==2:
        print("Balance $", balance)
        Withdraw  = float(input("Enter Withdraw amount $"))
        if Withdraw>0:
            forewardbalance=(balance-Withdraw)
            print("Foreward Balance $", forewardbalance)
        elif Withdraw>balance:
            print("No funds in the account")
        else:
            print("None Withdraw made")
    if Option==3:
        print("Balance $", balance)
        Deposite = float(input("Enter Deposit Amount $"))
        if Deposite>0:
            forewardbalance = (balance+Deposite)
            print("Forewardbalance $", forewardbalance)
        else:
            print("None deposite made")
    if Option==4:
        exit()