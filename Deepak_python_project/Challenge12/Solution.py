list = [2, 5, 12, 13, 25, 43 ]
start = 0
last = 5
for i in list:
    a = list[start]
    c = list[last]
    list[start] = c
    start = start+1
    list[last] = a
    last = last-1
    if start>=last:
        print(list)
        break
    else:
        continue
