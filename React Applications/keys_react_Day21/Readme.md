### Day11 

**ReactJS | Keys**

A “key” is a special string attribute you need to include when creating lists of elements in 
React. Keys are used in React to identify which items in the list are changed, updated or 
deleted. In other words we can say that keys are used to give an indentity to the elements in 
the lists. The next thing that comes in mind is that what should be good to be choose as key 
for the items in lists. It is recommended to use a string as a key that uniquely identifies the 
items in the list.

Assigning indexes as keys is highly discouraged because if the elements of the arrays get’s 
reordered in future then it will get confusing for the developer as the key’s for the elements 
will also change.

Consider a situation where you have created a separate component for list items and you 
are extracting list items from that component. In that case you will have to assign keys to 
the component you are returning from the iterator and not to the list items. That is you 
should assign keys to \<Component /> and not to \<li>
A good practice to avoid mistake is to 
keep in mind that anything you are returning from inside of map() function is needed to be 
assigned key.

So I think by now you have got a clear idea how to use keys in React. So what are we waiting 
for!! lets Code...   

Resources for reference:

1.https://reactjs.org/docs/lists-and-keys.html

2.https://www.geeksforgeeks.org/reactjs-lists/
