
IMPLEMENTATION:

function sort012UsingDutchNationalFlagAlgorithm(arr) 
    { 
        var lo = 0; 
        var hi = arr.length - 1; 
        var mid = 0, temp = 0; 
        while (mid <= hi) { 
            switch (arr[mid]) { 
            case 0: { 
                temp = arr[lo]; 
                arr[lo] = arr[mid]; 
                arr[mid] = temp; 
                lo++; 
                mid++; 
                break; 
            } 
            case 1: 
                mid++; 
                break; 
            case 2: { 
                temp = a[mid]; 
                arr[mid] = arr[hi]; 
                arr[hi] = temp; 
                hi--; 
                break; 
            } 
            } 
        } 
    } 