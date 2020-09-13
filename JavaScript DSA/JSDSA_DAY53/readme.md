 # Day - 53
---
## Tower of Hanoi --
<b>If I say it is the most important topic in whole of Data Structures and Algorithm then I won't be wrong. </b> 

### Note - Please reffer to resources for a very good and informative article on Recursion.

### Challenge - 
1. There are 3 towers. Tower 1 has n disks, where n is a positive number. Tower 2 and 3 are empty.
2. The disks are increasingly placed in terms of size such that the smallest disk is on top and largest disk is at bottom.
3. You are required to 
    3.1. Print the instructions to move the disks.
    3.2. from tower 1 to tower 2 using tower 3 
    3.3. following the rules
        3.3.1 move 1 disk at a time.
        3.3.2 never place a smaller disk under a larger disk.
        3.3.3 you can only move a disk at the top.
### ----------------------------------------------------------------------------------------------------------------------------------------------
<b>Input Format </b>
A number n, representing number of disks
A number n1, representing id of tower 1
A number n2, representing id of tower 2
A number n3, representing id of tower 3
<b>Output Format </b>
diskNumber[from tower number -> to tower number]
..
A set of instructions in above format to represent, move nth disc from n1 tower to n2 tower

#### Example - 
<pre>
<b>Input -                    </b>                                
    3
    10
    11
    12                            
<b>Output -                 </b> 
    1[10 -> 11]
    2[10 -> 12]
    1[11 -> 12]
    3[10 -> 11]
    1[12 -> 10]
    2[12 -> 11]
    1[10 -> 11]