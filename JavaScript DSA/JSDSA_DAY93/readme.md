 # Day - 93
---
## Target Sum Pair in BST  --

## Challenge --  
1. You are given a Binary Search Tree.
2. You are given a value. 
3. You are required to print all pair of nodes which add up to the given value. 
4. Make sure all pairs print the smaller value first and avoid duplicacies. Make sure to print the pairs in increasing order. 
5. Use the provided example to gain clarity.
6. <b>Make a function of name printPair in the BST class to achieve above objective</b>
### Note - (Plese refer to previous challenges for Binary Search Tree implementattion and class).

<pre> 
 Input -- 
var tree = new BST();
tree.insert(50);
tree.insert(25);
tree.insert(12);
tree.insert(37);
tree.insert(30);
tree.insert(75);
tree.insert(62);
tree.insert(60);
tree.insert(70);
tree.insert(87);
tree.display(tree.root);
print("Pairs are - ");
tree.pairPrint(100);

<b>Output - (After running max function and traversal function)</b> 
After display -- 
25 <- 50 -> 75
12 <- 25 -> 37
. <- 12 -> .
30 <- 37 -> .
. <- 30 -> .
62 <- 75 -> 87
60 <- 62 -> 70
. <- 60 -> .
. <- 70 -> .
. <- 87 -> .

Pairs are -
25 75
30 70
</pre>