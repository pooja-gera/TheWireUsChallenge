def reverse_number(number):
    reverse = 0
    while (number > 0):
        reminder = number % 10
        reverse = (reverse * 10) + reminder
        number = number // 10
    return reverse


print("Enter the number of test causes")
test = int(input())
i = 1
for i in range(test):
    print("Enter your number")
    inp = int(input())
    while (True):
        rev = reverse_number(inp)
        if inp==rev:
             print(inp)
             break
        else:
            inp = inp+1
            continue