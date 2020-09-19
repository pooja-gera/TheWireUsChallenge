#Url list initialization 
Input = ["https://www.isb.edu", "www.google.com", "http://cyware.com", 
"https://www.gst.in", "https://www.coursera.org", 
"https://www.create.net", "https://www.ontariocolleges.ca"] 
 
Output = sorted(Input,key=lambda x: x.split('.')[-1]) 
 
print("Initial list is :") 
print(Input) 
print("sorted list according to TLD is") 
print(Output) 
 
