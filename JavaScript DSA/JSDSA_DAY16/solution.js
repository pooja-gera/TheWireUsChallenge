Approach:

The idea is to find the pivot point, divide the array in two sub-arrays and perform binary search.
The main idea for finding pivot is – for a sorted (in increasing order) and pivoted array, pivot element
is the only element for which next element to it is smaller than it.
Basically the point is we are searching the pivot element also using Binary Search.

Using the above statement and binary search pivot can be found.
After the pivot is found out divide the array in two sub-arrays.
Now the individual sub – arrays are sorted so the element can be searched using Binary Search.

Implementation:

Input: arr[] = {3, 4, 5, 1, 2}
Element to Search = 1
  1) Find out pivot point and divide the array in two
      sub-arrays. (pivot = 2) /*Index of 5*/
  2) Now call binary search for one of the two sub-arrays.
      (a) If element is greater than 0th element then
             search in left array
      (b) Else Search in right array
          (1 will go in else as 1 < 0th element(3))
  3) If element is found in selected sub-array then return index
     Else return -1.

Below is the basic solution of the above approach:


let num = Number(readLine()); //taking the number if elements from the user as input
var arr0 = [];

//Taking the user input of different elements of array
//NOTE: this should be a sorted array but rotated as shown in the examples
//For instance {5, 6, 7, 8, 9, 10, 1, 2, 3, 4}

for(let i=0; i<num; i++){
 let c = Number(readLine());
 arr0.push(c);
}

let key = Number(readLine());//Taking the number to be searched from the user in sorted and rotated array

//Processing the input array from the user
let z= "";
for(let i = 0;i<N;i++){
    z+=arr0[i]+" ";
}

//Logging the input array from the user
console.log(z);

//Calling the pivotedBinarySearch method and logging the result in console
console.log(pivotedBinarySearch(arr0, arr.length, key)

function pivotedBinarySearch(arr, n, key) 
    { 
        let pivot = findPivot(arr, 0, n - 1); 
  
        // If we didn't find a pivot, then 
        // array is not rotated at all 
        if (pivot == -1) 
            return binarySearch(arr, 0, n - 1, key); 
  
        // If we found a pivot, then first 
        // compare with pivot and then 
        // search in two subarrays around pivot 
        if (arr[pivot] == key) 
            return pivot; 
        if (arr[0] <= key) 
            return binarySearch(arr, 0, pivot - 1, key); 
        return binarySearch(arr, pivot + 1, n - 1, key); 
    } 
  
    /* Function to get pivot. For array  
       3, 4, 5, 6, 1, 2 it returns 
       3 (index of 6) */
function findPivot(arr, low, high) 
    { 
        // base cases 
        if (high < low) 
            return -1; 
        if (high == low) 
            return low; 
  
        /* low + (high - low)/2; */
        var mid = (low + high) / 2; 
        if (mid < high && arr[mid] > arr[mid + 1]) 
            return mid; 
        if (mid > low && arr[mid] < arr[mid - 1]) 
            return (mid - 1); 
        if (arr[low] >= arr[mid]) 
            return findPivot(arr, low, mid - 1); 
        return findPivot(arr, mid + 1, high); 
    } 
  
    /* Standard Binary Search function */
function binarySearch(arr, low, high, key) 
    { 
        if (high < low) 
            return -1; 
  
        /* low + (high - low)/2; */
        int mid = (low + high) / 2; 
        if (key == arr[mid]) 
            return mid; 
        if (key > arr[mid]) 
            return binarySearch(arr, (mid + 1), high, key); 
        return binarySearch(arr, low, (mid - 1), key); 
    } 
  


