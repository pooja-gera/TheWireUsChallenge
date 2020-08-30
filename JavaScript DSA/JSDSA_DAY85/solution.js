
IMPLEMENTATION:
Naive Approach: The idea is to take every interval one by one and find the number of intervals that
overlap with it. Keep track of the maximum number of intervals that overlap with an interval.
Finally, return the maximum value.

function findPlatformUsingTwoLoops( arr, dep, n) 
{ 
  
    // plat_needed indicates number of platforms 
    // needed at a time 
    var plat_needed = 1, result = 1; 
    let i = 1, j = 0; 
  
    // run a nested  loop to find overlap 
    for (i = 0; i < n; i++) { 
        // minimum platform 
        plat_needed = 1; 
  
        for (j = i + 1; j < n; j++) { 
            // check for overlap 
            if ((arr[i] >= arr[j] && arr[i] <= dep[j]) ||  
           (arr[j] >= arr[i] && arr[j] <= dep[i])) 
                plat_needed++; 
        } 
  
        // update result 
        result = max(result, plat_needed); 
    } 
  
    return result; 
}

Complexity Analysis:
Time Complexity: O(n^2).
Two nested loops traverse the array, so the time complexity is O(n^2).
Space Complexity: O(1).
As no extra space is required.


Efficient Approach: 
The idea is to consider all events in sorted order. Once the events are in sorted order,
trace the number of trains at any time keeping track of trains that have arrived, but not departed. 

function findPlatformAfterSorting(arr, dep, n) 
    { 
        // Sort arrival and departure arrays 
        arr.sort(); 
        dep.sort(); 
  
        // plat_needed indicates number of platforms 
        // needed at a time 
        let plat_needed = 1, result = 1; 
        let i = 1, j = 0; 
  
        // Similar to merge in merge sort to process 
        // all events in sorted order 
        while (i < n && j < n) { 
            // If next event in sorted order is arrival, 
            // increment count of platforms needed 
            if (arr[i] <= dep[j]) { 
                plat_needed++; 
                i++; 
            } 
  
            // Else decrement count of platforms needed 
            else if (arr[i] > dep[j]) { 
                plat_needed--; 
                j++; 
            } 
  
            // Update result if needed 
            if (plat_needed > result) 
                result = plat_needed; 
        } 
  
        return result; 
    } 

Complexity Analysis:
Time Complexity: O(nlogn).
One traversal O(n) of both the array is needed after sorting O(nlogn), so the time Complexity is O(nlogn).
Space Complexity: O(1).
As no extra space is required.