function usingBruteForce(firstArray, secondArray){
    // used to store common elements and keep track
    let answer = [];
    
    // these nested loops help you iterate through every combination of the numbers in the array
    for (var i = 0; i < firstArray.length; i++){
        for (var j = 0; j < secondArray.length; j++){
            // check if the elements at i-th index in first array is equal to the element in
            // the j-the index of the second array
            // if they are same and the number is not already in the answer, then add it to the array
            if(firstArray[i] === secondArray[j] && !answer.includes(firstArray[i]))
                answer.push(firstArray[i])
        }
    }
    return answer;
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

// as we did in the challenge (two-sum), we use binary search
function usingBinarySearch(firstArray, secondArray){
    var answer = [];

    secondArray = secondArray.sort();
    // we loop through all the elements in the first array and use binary search to check
    // if that element is present in the second array
    for (var i = 0; i < firstArray.length; i++){
        if(binarySearch(secondArray, firstArray[i]))
            answer.push(firstArray[i])
    }
    return answer;
}


function usingHashing(firstArray, secondArray) {
    // The logic here is to create a hashmap with the elements of the firstArray as the keys.
    // After that, you can use the hashmap's O(1) look up time to check if the element exists in the hash
    // If it does exist, add that element to the new array.
  
    let hashmap = {};
    let answer = [];
  
    firstArray.forEach(function(element) {
      hashmap[element] = 1;
    });
  
    // Since we only want to push unique elements in our case... we can implement a counter to keep track of what we already added
    secondArray.forEach(function(element) {
      if (hashmap[element] === 1) {
        answer.push(element);
        hashmap[element]++;
      }
    });
  
    return answer; 
}

var firstArray = [1, 4, 3, 2, 5, 8, 9];
var secondArray = [6, 3, 2, 7, 5];

// time complexity O(m*n)
console.log(usingBruteForce(firstArray, secondArray));

// time complexity O(nlogn + mlogn)
console.log(usingBinarySearch(firstArray, secondArray));

// time complexity O(n)
// fastest approach
console.log(usingHashing(firstArray, secondArray));

