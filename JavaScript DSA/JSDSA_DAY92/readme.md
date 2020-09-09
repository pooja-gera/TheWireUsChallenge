 # Day - 92
---
## Searching and Romoval of element from BST  --
The name says it all .... BST is widely used for its efficiency in Searching.
![](Capture.png)
## Challenge --  
1. Now in the BST class we implemented in previous challenge you have to add 4 more functions --- 
    
    getMax() --  returns the maximum value present in our BST.
    getMin() --  returns the minimum value present in our BST.
    find(data) -- return true if there is node in the tree equal to "data"
    remove(data) -- "remove" function is expected to remove a node with given data to the tree and return the new root.
### Note - (Plese refer to resources to read about Binary Search Tree before starting the challenge).

<pre> 
 Input -- 
var tree = new BST();
tree.insert(10);
tree.insert(60);
tree.insert(70);
tree.insert(50);
tree.insert(20);
tree.insert(30);
tree.insert(6);
tree.display(tree.root);
print("Inorder");
tree.inOrder(tree.root);
print(tree.find(60));
tree.remove(60);
print(tree.find(60));
print("Minimum "+tree.getMin());
print("Maximum " + tree.getMax());

<b>Output - (After running max function and traversal function)</b> 
After Display -
6 <- 10 -> 60
. <- 6 -> .
50 <- 60 -> 70
20 <- 50 -> .
. <- 20 -> 30
. <- 30 -> .
. <- 70 -> .
Inorder
6
10
20
30
50
60
70
true
false
Minimum 6
Maximum 70
</pre>