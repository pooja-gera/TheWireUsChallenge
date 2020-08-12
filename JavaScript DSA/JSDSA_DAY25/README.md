## Tell If Two Frogs meet or Not

In this challenge there are basically two frogs, which are standing at points x1 and x2 respectively and jumps with speed of v1 and v2 per jump.
You need to tell if they will meet after some distance travelled in the future or not.

### Challenge: 

The First frog starts at location x1 and moves with a rate of v1 
Similarly the second frog starts at location x2 and moves with a rate v2.

Sample Input:
0 3 4 2
Sample Output:
YES
Explanation:
The two frogs jump from locations as follows:
	
	Frog2: 4 -> 6 -> 8 -> 10 -> 12
	
	Frog1: 0 -> 3 -> 6 -> 9 -> 12

Hence they meet exactly after 4 jumps.


Sample Input:
2 4 10 10 
Sample Output:
NO
Explanation:
The second frog has a starting location that is ahead (further to the right) of the first frog’s starting location (i.e., x2 > x1 ). Because the second frog moves at a faster rate (meaning v2 > v1 ) and is already ahead of the first frog, the first frog will never be able to catch up. Thus, we print NO.
