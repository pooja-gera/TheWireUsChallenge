 # Day - 39
---
## Balanced Brackets --
Everyone of us has came across a big error due to a missing bracket or some extra brackets................
It's frustating.......
Now you have to do the same thing here to check whether the brackets are balanced or not.

### Challenge - 
1. You are given a string exp representing an expression.
2. You are required to check if the expression is balanced i.e. closing brackets and opening brackets match up well.
3. You have to check that whether for each opening bracket there is a closing bracket or not.

#### Examples to check working of your Stack -- 
If you have made a class names CustomStack, then after performing the following operations the output should be -- 
<pre>
Input -                                           Input -
[(a + b) + {(c + d) * (e / f)}]                     ([(a + b) + {(c + d) * (e / f)}]

<b>Output -                                        Output - </b> 
true                                                  false
</pre>

##### Hint -- 
Think about the problem using stack DS.