PROBLEM STATEMENT
The game of number chips. 

EXPLANATION
Let’s play a little game (read the rules carefully).
You will be provided with a tower of N number chips (a1 , a2 , a3 … aN) aN being on the top.
In the input you’ll be provided with 2 kinds of queries:- 
1.	1 L followed by number chips s1,s2 … sL
	Place L number chips on the tower sL being on the top
2.	2 R 
	Remove R chips from the top
Also, thanks to gravity the tower will have to fall right so you need to keep removing the repeated number chips from the tower!

INPUT REQUIREMENTS
•	The first-line will contain T, the number of test cases. Then the test case follows.
•	Each test case contains a 2 single spaced numbers N & Q.
•	Next line contains N equal spaced numbers
•	Next Q line contains queries as discussed above
o	1 L s1 s2 ... sL
o	2 R

OUTPUT FORMAT
Print the content of the tower from top to bottom


EXAMPLE INPUT
2
5 3
1 2 3 4 5
1 3 6 7 8
2 3
1 2 0 8
5 3
3 4 3 4 3
2 1
1 2 4 4
2 1

EXAMPLE OUTPUT
8 0 5 4 3 2 1
3
