test_str = "TheWireUsChallenge"

print("The original string is : " + str(test_str)) 
  
res = [char for char in test_str if char.isupper()] 

print("The uppercase characters in string are : " + str(res)) 
