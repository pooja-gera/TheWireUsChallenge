/*------------------------------------
A simple solution is to first count all elements less than or equals to k(say ‘good’).
Now traverse for every sub-array and swap those elements whose value is greater than k. 

Time complexity of this approach is O(n^2)

Approach: A simple approach is to use two pointer technique and sliding window.

1) Find count of all elements which are less than or equals to ‘k’. Let’s say the count is ‘cnt’
2) Using two pointer technique for window of length ‘cnt’, each time keep track of 
   how many elements in this range are greater than ‘k’. Let’s say the total count is ‘bad’.
3) Repeat step 2, for every window of length ‘cnt’ and take minimum of count ‘bad’ among them. 
   This will be the final answer.

Now let me explain you the Window Sliding Technique which can be really very helpful for solving 
such problems in your further challenges.

				Window Sliding Technique

The technique can be best understood with the window pane in bus, consider a window of length n 
and the pane which is fixed in it of length k. Consider, initially the pane is at extreme left 
i.e., at 0 units from the left. Now, co-relate the window with array arr[] of size n and pane with
current_sum of size k elements. Now, if we apply force on the window such that it moves a unit 
distance ahead. The pane will cover next k consecutive elements.

Consider an array arr[] = {5, 2, -1, 0, 3} and value of k = 3 and n = 5

Applying sliding window technique :

1) We compute the sum of first k elements out of n terms using a linear loop and store the sum in variable window_sum.
2) Then we will graze linearly over the array till it reaches the end and simultaneously keep track of maximum sum.
3) To get the current sum of block of k elements just subtract the first element from the previous block and add the 
   last element of the current block .
4) The below representation will make it clear how the window slides over the array.

This is the initial phase where we have calculated the initial window sum starting from index 0 . At this stage the 
window sum is 6. Now, we set the maximum_sum as current_window i.e 6.

----------------------------------------*/


let num = Number(readLine()); //taking the number if elements from the user as input
var arr0 = [];

//Taking the user input of different elements of array
for(let i=0; i<num; i++){
 let c = Number(readLine());
 arr0.push(c);
}


let key = Number(readLine());//Taking the input element from which elements less than need to be clubed together

//Logging the input array from the user in the logger 
let z= "";
for(let i = 0;i<N;i++){
    z+=arr0[i]+" ";
}

console.log(z);


//Calling the minSwap function by passing the array and logging the result of minSwaps needed in the console
console.log(minSwap(arr0, arr0.length, key));


//A basic function that returns minimum swaps required to club all elements
  less than or equal to k together.
function minSwap(arr, n, k){
   
    var count = 0; 
    for (let i = 0; i < n; ++i) 
    if (arr[i] <= k) 
        ++count; 
  
    // Find unwanted elements in current 
    // window of size 'count' 
    var bad = 0; 
    for (let i = 0; i < count; ++i) 
    if (arr[i] > k) 
        ++bad; 
  
    // Initialize answer with 'bad' value of 
    // current window 
    var ans = bad; 
    for (let i = 0, j = count; j < n; ++i, ++j) { 
  
    // Decrement count of previous window 
    if (arr[i] > k) 
        --bad; 
  
    // Increment count of current window 
    if (arr[j] > k) 
        ++bad; 
  
    // Update ans if count of 'bad' 
    // is less in current window 
    ans = Math.min(ans, bad); 
    } 
    return ans; 
}

