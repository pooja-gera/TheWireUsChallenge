 # Day - 41
---
## Next Greatest Element --
It is a famous question in Data Structures (and of medium difficulty too). 
### Challenge - 
11. You are given a number n, representing the size of array arr.
2. You are given n numbers, representing elements of array arr.
3. You are required to find "next greater element on the right" for all elements of array.
4. Then store the next greater element in a new array and display it.
5. If a number doesn't have a greater element to it's right then place -1 on its place in new array. 

#### Examples to check working of your Stack -- 
If you have made a class names CustomStack, then after performing the following operations the output should be -- 
<pre>
Input -                                          
9
2 5 9 3 1 12 6 8 7
<b>Output -                                      
Array of next greater elements - 
5 9 12 12 12 -1 8 -1 -1

<b>Explaination - </b> 
for the array [2 5 9 3 1 12 6 8 7]
Next greater for 2 is 5
Next greater for 5 is 9
Next greater for 9 is 12
Next greater for 3 is 12
Next greater for 1 is 12
Next greater for 12 is -1
Next greater for 6 is 8
Next greater for 8 is -1
Next greater for 7 is -1
</pre>

##### Hint -- 
Think about the problem using stack DS to do it efficiently.