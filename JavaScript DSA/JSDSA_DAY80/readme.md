 # Day - 80
---
## Traversals and Max Node  --
Tree traversals are of tree types  -- PreOrder Traversal, InOrder Traversal and Post Order Traversal.

## Challenge -- Implementation of Generic Tree -- 
1. User will provide you with a number n(i.e size of an array).
2. Now the user will give an array of n numbers.
3. First element of array to be consider as root node.
4. Now construct a generic tree from the given array.(Refer to previous day challenge).
5. You have to write a 
### Note - (Plese refer to resources to read more about Tree Data Structure and Generic Tree).


<pre> 
 Input -- 
 12
 10 20 -1 30 50 -1 60 -1 -1 40 -1 -1   

<b>Output - (After running max function and traversal function)</b> 
60
Node Pre 10
Edge Pre 10--20
Node Pre 20
Node Post 20
Edge Post 10--20
Edge Pre 10--30
Node Pre 30
Node Post 30
Edge Post 10--30
Edge Pre 10--40
Node Pre 40
Node Post 40
Edge Post 10--40
</pre>