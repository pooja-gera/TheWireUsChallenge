function usingBruteForce(array, sum){
    // this will store all the pairs that add up to the required sum
    let nums = [];
    let prev = [];

    // these nested loops help you iterate through every combination of the numbers in the array
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array.length; j++){
            // check if this combination adds up to the sum
            if (array[i] + array[j] === sum){
                // if nums is not empty, add the numbers to 'prev' (if prev doesn't already have them)
                if (!!nums.length){
                    // this is used to check if a number has already been found and added before pushing it into nums
                    if (!prev.includes(array[i]) && !prev.includes(array[j])){
                        prev.push(array[i])
                        nums.push([array[i], array[j]])
                    }
                }
                // if nums is empty, this will be our first pair and can be directly added without checking
                else{
                    nums.push([array[i], array[j]])
                    prev.push(array[i])
                }
            }
        }
    }
    return nums;
}

function binarySearch(array, target, start = 0, end = array.length - 1){
    // we use (start + (end-start)/2) to calculate the middle index
    // and not ((start + end)/2), this is because there might be a case where start, 
    // end or both start and end will be greater than INT_MAX
    // it will then cause and integer overflow
    let mid = Math.floor(start + (end - start)/2);
    
    // as there are multiple cases that need to be checked, we use a switch statement
    switch (true){
        // if the first number is the target, then we save time by returning it immediately,
        // instead of recursively going through the whole array
        case array[start] === target:
            return array[start];
        
        // same for mid, return early
        case array[mid] === target:
            return array[mid];
        
        // same for end, return early
        case array[end] === target:
            return array[end]
        
        // if the array we wish to iterate over is empty, there is no matching target
        // so we return false
        case end - start === 0:
            return false
        
        // if the middle element of the sorted array is greater than the target, then
        // we have to check for the target in the left half of the array only
        // since the array is sorted in ascending order
        case array[mid] > target:
            return binarySearch(array, target, start + 1, mid - 1)
        
        // if the middle element of the sorted array is less than the target, then
        // we have to check for the target in the right half of the array only
        // since the array is sorted in ascending order
        case array[mid] < target:
            return binarySearch(array, target, mid + 1, end - 1)
    }
    // return false if not found
    return false
}

// using the above helper function, we can now find the required pairs quicker
function usingBinarySearch(array, sum){
    // the nums and prev are used for the same purpose as in the brute force method
    let nums = [];
    let prev = [];
    // we first sort the array in ascending order and then use a binary search
    let sortedArray = array.sort();
    
    // we iterate only once!
    // for each element, we check if the sum - (current element) is present in the array
    // using binary search
    for (var i = 0; i < sortedArray.length; i++){
        // checking if the difference is in the array
        let difference = binarySearch(sortedArray, sum - sortedArray[i]);
        if (!!difference && !prev.includes(array[i]) && !prev.includes(difference)){
            nums.push([sortedArray[i], difference])
            prev.push(difference)
        }
    }
    return nums;
}

// a key-value pair
function usingHashing(array, sum){
    // this is a hash, which has a key of array[i] and its index (i)
    // this helps us to check for the required value in a specific index,
    // without having to iterate over the complete array
    let dict = {};
    let nums = [];
    var difference = 0;

    for (var i = 0; i < array.length; i++){
        difference = sum - array[i];
        if (difference in dict)
            nums.push([difference, array[i]]);
        dict[array[i]] = i;
    }
    return nums;
}

// this is using brute force
// the time complexity will be O(n^2)
console.log(usingBruteForce([2,1,3,4,2], 4));

// this is using binary search
// the time complexity will be O(n*logn)
console.log(usingBinarySearch([2,1,3,4,2], 4));

// this is using hashing
// the time complexity will be O(n)
// this is the fastest approach
console.log(usingHashing([2,1,3,4,2], 4));
