function usingCount(array){
    // we return this array with all distinct elements
    var outputArray = [];
    // this is used to keep track of the distinct elements
    // if count is equal to one, we push that element into the
    // output array
    var count = 0;
    // this is used to check duplicates, if we encounter a duplicate value
    // in the ouput array, then this will be set to true
    var start = false;

    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < outputArray.length; j++){
            if (array[i] === outputArray[j])
                start = true;
        }
        count++;

        if (count == 1 && start == false)
            outputArray.push(array[i]);
        start = false;
        count = 0;
    }
    return outputArray;
}

// Syntax for filter method: array.filter(function(currentValue, index, arr), thisValue )
function usingFilter(array){
    let outputArray = array.filter(function(value, i, self){
        // this function returns the index of the first instance for each value
        return i == self.indexOf(value);
    });
    
    return outputArray;
}

// we use set, because a set is a collection of items which are unique i.e no element will be repeated
function usingSet(array){
    let outputArray = Array.from(new Set(array))
    return outputArray;
}

// Note: If there is only one unique element, you can use bitwise-xor (^) to find
// the unique element

// using count
console.log(usingCount([2,4,2,5,6,7,4]))

// using filter method
console.log(usingFilter([2,4,2,5,6,7,4]))

// using set
// this is the fastest approach
console.log(usingSet([2,4,2,5,6,7,4]))