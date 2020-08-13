class Library:
    def __init__(self, list, name):
        self.booklist = list
        self.name = name
        self.lenddict = {}

    def Display_book(self):
        print(f"we are having this books in library: {self.name}" )
        for book in self.booklist:
            print(book)
    def Lend_book(self, user, book):
        if book not in self.lenddict.keys():
            self.lenddict.update({book:user})
            print("lender-book database has been updated. you can take your  The book now")
        else:
            print(f"book is already being used by {self.lenddict[book]}")
    def Return_book(self ,book):
        self.lenddict.pop(book)
    def Add_book(self,book):
        self.booklist.append(book)
        print("book is added to the book list")
if __name__ == '__main__':
    deepak = Library(["python", "java", "c++", "javascript", "react"], "deepak_library")
    while(True):
        print(f"welcome to {deepak.name} Enter your choice to continue")
        print("1. Display book\n""2. Lend book\n""3. Return book\n""4. Add book")
        inp1 = int(input())
        if inp1 not in [1,2,3,4]:
            print("please enter a valid input")
            continue
        if inp1 == 1:
            deepak.Display_book()
        elif inp1 == 2:
            user = input("enter your name")
            book = input("Enter the name of the book you want to lend:")
            deepak.Lend_book(user, book)
        elif inp1 == 3:
            book = input("Enter the name of the book you want to return")
            deepak.Return_book(book)
        elif inp1 == 4:
            book = input("enter the name of the book")
            deepak.Add_book(book)
        else:
            print("not a valid option ")

        print("q to quite and c to continue")
        inp2 = ""
        while(inp2!="c" and inp2!="q"):
            inp2 = input()
            if inp2 == "q":
              exit()
            elif inp2 == "c":
              continue