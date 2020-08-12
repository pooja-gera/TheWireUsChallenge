## Search an element in a sorted and rotated array

### Challenge: 

An element in a sorted array can be found in O(log n) time via binary search. But suppose we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2. Devise a way to find an element in the rotated array in O(log n) time.

Input: arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}
	 k=3
Output: Found At index 8


Input: arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}
	 k=30
Output: Not Found


Input: arr[] = {30, 40, 50, 10, 20}
	 k=10
Output: Found At index 3


