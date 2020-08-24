# Define a class with a generator which can iterate the numbers, which are divisible by 7, between a 
# given range 0 and n.




class Test:
    def generator(self,n):
        return [i for i in range(n) if i%7==0]   # returns the values as a list if an element is divisible by 7

n = int(input())
num = Test()
lst = num.generator(n)
print(lst)