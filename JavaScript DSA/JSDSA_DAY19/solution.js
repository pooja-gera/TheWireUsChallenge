/*-----------------

Naive Approach:
The basic approach is to look for all sub arrays in a particular array and find the maximum sum of a 
contiguous array and get the results.But in this approach when you check through every element and 
with every element the process becomes very slow. Time Complexity: O(n^2)

Efficient Approach:
The solution to solve this in O(n) time period is Kadane's Algorithm. In this approach we need to look for all
positive contiguous segments of the Array(max_so_far) and the maximum result(max_ans). Every time we get a new max_so_far 
we update it to the max_ans and at the end get the results

-----------------*/

IMPLEMENTATION:

let num = Number(readLine()); //taking the number if elements from the user as input
var arr = [];

//Taking the user input of different elements of array

for(let i=0; i<num; i++){
 let c = Number(readLine());
 arr.push(c);
}

//Processing the input array from the user
let z= "";
for(let i = 0;i<N;i++){
    z+=arr[i]+" ";
}

//Logging the input array from the user
console.log(z);

//Calling the maxSubArraySum method and logging the result in console
console.log(maxSubArraySum(arr));

function maxSubArraySum(arr){
   var size = a.length; 
   var max_ans = Integer.MIN_VALUE, max_so_far = 0; 
  
        for (let i = 0; i < size; i++) 
        { 
            max_so_far+= a[i]; 
            if (max_ans < max_so_far) 
                max_ans = max_so_far; 
            if (max_so_far < 0) 
                max_so_far = 0; 
        } 
   return max_ans; 
}