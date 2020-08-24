 # Day - 46
---
## Queue Data Structure --
Queue is a Data Structure which follows a FIFO(First In First Out) approach.
It is one of the most real world data structure we use in coumputers.
Many background processes and problems are solved efficiently using Queue DS.
<img src = "QU.png"> 
### Note - (Plese refer to resources to read more about importance of Stack).
1. Now the JavaScript doesn't have an inbuilt Queue data structure, but Queue is very useful in solving many day to day problems. So, 
### Challenge -  
2. The challenge is to implement Queue Data Structure in JavaScript using Arrays.
3. The key features or the functions which your Queue DS should have are - 

    enqueue(element) - Adds the element at front of the queue.
    dequeue() -        Removes an element from back of the queue.
    isEmpty() -        Returns true if Queue is empty else returns false.
    front() -          Returns the front element of the queue. 
    back() -           Returns the recently added element which is at the back of the Queue.
    display() -        Display the Elements present in Queue. 
#### Hints and Instructions: 
1. Use an Array as the base storage for storing elements of Queue.
2. Please try to remember how we implemented Stack DS using Array.
#### Examples to check working of your Stack -- 
If you have made a class names CustomStack, then after performing the following operations the output should be -- 
<pre>    Operations
    var qu = new Queue();
    qu.enqueue("Grazel");
    qu.enqueue("Pooja");
    qu.enqueue("Agam");
    print(qu.display());
    qu.dequeue();
    print(qu.display());
    qu.enqueue("Prahitha");
    print("Front of queue: " + qu.front());
    print("Back of queue: " + qu.back());
    print(qu.display());
    print(qu.isEmpty());
<b>Output -</b> 
Grazel Pooja Agam 
Pooja Agam
Front of queue: Pooja
Back of queue: Prahitha
Pooja Agam Prahitha
false
</pre>