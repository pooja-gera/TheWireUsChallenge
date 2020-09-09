 # Day - 38
---
## Stack Data Structure --
Stack is one of the most important Data Structure in the whole computer programming world.
Behind every program you run there is always a stack in the background on which all of your variables and functions get loaded.
### Note - (Plese refer to resources to read more about importance of Stack).

1. Now the JavaScript doesn't have an inbuilt Stack data structure, but Stack is very useful in solving many day to day problems. So, 
### Challenge -  
2. The challenge is to implement Stack Data Structure in JavaScript using Arrays.
3. The key features or the functions which your Stack DS should have are - 

    push(element) - Adds the element at top of the stack.
    pop() - Removes the element present on top of the stack.
    size() - return the number of elements present in your stack.
    display() - prints the elements present in your stack.
    tos() - returns the element present on top of the stack.

#### Hints and Instructions: 
1. Use an Array as the base storage for storing elements of Stack.
2. You can use a variable for keeping track of index of top of the stack.
3. The size of the stack is nothing but the index of the element present on top of stack.

#### Examples to check working of your Stack -- 
If you have made a class names CustomStack, then after performing the following operations the output should be -- 
<pre>    Operations
    var st = new CustomStack();
    st.push(10);
    st.push(20);
    st.push(30);
    st.push(40);
    st.display();
    print("Size - "st.size());
    st.pop();
    st.pop();
    print("Size - "st.size())
    print(st.top());
    st.display();

<b>Output -</b> 
The elements of stack are - 10 20 30 40
Size - 4
Size - 2
20
The elements of stack are - 10 20
</pre>