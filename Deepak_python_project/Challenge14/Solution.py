class Student:
    def __init__(self,name,rollnumber,subject):
        self.name = name
        self.rollnumber = rollnumber
        self.subject = subject
    def printdetails(self):
        return f"the name is {self.name}\nthe roll number is {self.rollnumber}\nthe subject is {self.subject}"

deepak = Student("deepak sharma",8717204,"machine learning")
mohit = Student("mohit kantiwal",8717208,"android devlopment")


print(deepak.printdetails())
print(mohit.printdetails())
