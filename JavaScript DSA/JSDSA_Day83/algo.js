// read the resources to find other faster/ more
// efficient methods (like XOR operation)
function missingNumber(array) {
    var n = array.length + 1;
    var sum = 0;
    // sum to n natural numbers
    var expectedSum = (n * (n + 1)) / 2;

    // loop through the array and get the sum
    // of all the elements in the array
    for (var i = 0; i < array.length; i++)
        sum += array[i];

    // on subtracting the sum from the expectedSum,
    // we can get the missing number
    return expectedSum - sum;
}

var array = [1, 7, 4, 3, 6, 2];
var number = missingNumber(array);
console.log("Missing number: " + number);