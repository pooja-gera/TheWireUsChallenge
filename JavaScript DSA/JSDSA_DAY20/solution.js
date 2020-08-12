/*-----------------

Naive Approach:
The basic approach is to look for all the elements in a particular array.The outer loop runs from 0 to size-1 and one 
by one picks up all the elements from left to right. The inner loop compares the picked element to all the elements to its 
right side. If picked element is greater than all elements then it is a leader.But in this approach when you check through 
every element and with every element the process becomes very slow. 

Time Complexity: O(n^2)

Efficient Approach:
The solution to solve this in O(n) time period is to scan all the elements from right and keep track of max_from_right if its value
changes i.e if a new maximum is observed then the previous value is printed.

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

//Calling the leadersInAnArray method and logging the result in console
leadersInAnArray(arr);

function leadersInAnArray(arr){
   var size = a.length; 
   var max_from_right = arr[size-1];
   System.out.println(max_from_right + " ");

   for(let i = size-2; i >= 0; i--){
	if(max_from_right <= arr[i]){
	    max_from_right = arr[i];
	    console.log(max_from_right + " ");
	}        
   }
}