 # Day - 69
---
## Flood Fill

### Challenge -
1. You are given a number n, representing the number of rows.
2. You are given a number m, representing the number of columns.
3. You are given n*m numbers, representing elements of 2d array a. The numbers can be 1 or 0 only.
4. You are standing in the top-left corner and have to reach the bottom-right corner. 
Only four moves are allowed 't' (1-step up), 'l' (1-step left), 'd' (1-step down) 'r' (1-step right). You can only move to cells which have 0 value in them. You can't move out of the boundaries or in the cells which have value 1 in them (1 means obstacle)
5. Complete the body of floodfill function - without changing signature - to print all paths that can be used to move from top-left to bottom-right.

Note1 -> Please check the sample input and output for details
Note2 -> If all four moves are available make moves in the order 't', 'l', 'd' and 'r'
## Imp -- Please do this question using recursion.

### Note - Each key can pe pressed as many times as it has number of characters mapped to it. i.e - 7 can be used to form t and u.
    

### ----------------------------------------------------------------------------------------------------------------------------------------------
<b>Input Format </b>
A string str
<b>Output Format </b>
Contents of the arraylist containing words as shown in sample output.

### -----------------------------------------------
#### Example 
<pre>
<b>Input -                    </b>                                
8
8
0 1 0 0 0 0 0 0
0 1 0 1 1 1 1 0
0 1 0 1 0 0 0 0
0 1 0 1 0 1 1 1
0 0 0 0 0 0 0 0
0 1 0 1 1 1 1 0
0 1 0 1 1 1 1 0
0 1 0 0 0 0 0 0             
<b>Output -    </b>
ddddrrttttrrrrrddlllddrrrddd
ddddrrdddrrrrr
ddddrrrrrrrddd
</pre>
 