 # Day - 30
---
## EXIT Point in a Matrix
This challenge will help you to being comfortable in movement in the matrix indices.

#### Note - Please refer to resources to read about storing elements in matrix in JS.)

### Challenge - 
1. Take an input r, the size of row.
2. Take an input c, the size of column.
3. Take r*c more inputs and store that in an matrix.
4. Input in the form of 1 and 0 only whenever you hit 1 you have to take 90 Degree
   turn in clockwise direction and nothing to do when you hit 0.
5. You will always enter the matrix from 0,0. So find the where you exit from the array.
#### Example(To be used only for expected output): 
<pre>
Input:
4 4
0 0 1 0
1 0 0 0
0 0 0 0
1 0 1 0

Output:
1, 3
</pre>         
## Explanation of example - 
We enter the matrix from (0,0) then keeps moving right in 0th row then encounter 1 at (0,2) then we turn 90 degrees in clockwise direction then keeps moving downward in column 2 then we encounter 1 at (3,2) then we turn right and moves in backward direction and encounter 1 at (1,0), we turn right and starts moving upward.
Again we encounter with 1 at (1,0) and we turn 90 degree clockwise and start moving forward in row 1 until we exit the matrix at (1,3). Which is our output. 


