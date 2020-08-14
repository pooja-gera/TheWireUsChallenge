class Calculator:
    def __init__(self, a , b):
        self.a = a 
        self.b = b
    def sum(self):
        mysum = self.a +self.b
        print("Sum:", end= " ")
        print(mysum)
myobject1 = Calculator(10, 20) 
myobject1.sum()