
Approach: 
The approach is based on the point that to minimize the difference, we must 
choose consecutive elements from a sorted packet. We first sort sort the 
array, then find the subArray of size students with the minimum difference 
between last and first elements. 

IMPLEMENTATION:

function ditributeTheChocolates(numberOfChocolatesArr, students) { 
        // if there are no chocolates or  
        // number of students is 0 

	var n = numberOfChocolatesArr.length;
        if (students == 0 || n == 0) 
            return 0; 
       
        // Sort the given packets 
        numberOfChocolatesArr.sort(); 
       
        // Number of students cannot be 
        // more than number of packets 
        if (n < students) 
           return -1; 
       
        // Largest number of chocolates 
        var min_diff = Infinity;
       
        // Find the subarray of size m  
        // such that difference between  
        // last (maximum in case of  
        // sorted) and first (minimum in 
        // case of sorted) elements of  
        // subarray is minimum. 
          
        for (let i = 0; i + students - 1 < n; i++) 
        { 
            let diff = numberOfChocolatesArr[i+students-1] - numberOfChocolatesArr[i]; 
            if (diff < min_diff) 
                min_diff = diff; 
        } 
        return min_diff; 
    } 