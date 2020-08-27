 # Day - 62
---
## Print Keypad Combniations -- (This question is very much get keypag Combination but here you will see how to call recursion in a loop.)
<b>Well it would be easy for those who has seen a keypad "Button" wala phone in their life.....  </b> 

### Challenge -
1. You are given a string str. The string str will contains numbers only, where each number stands for a key pressed on a mobile phone.
2. The following list is the key to characters map :
    0 -> .;
    1 -> abc
    2 -> def
    3 -> ghi
    4 -> jkl
    5 -> mno
    6 -> pqrs
    7 -> tu
    8 -> vwx
    9 -> yz
3. Now just like the good old days, you have to <b>Print all the combinations </b>of words you can make with those two numbers into an array and return it.
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
78               
<b>Output -    </b>
tv
tw
tx
uv
uw
ux
</pre>
 