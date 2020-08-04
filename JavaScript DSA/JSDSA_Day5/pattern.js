function printDiamond(rows) {
    // this variable is used to track the top half and the
    // bottom half of the pattern
    var k = 0;
    for (var i = 1; i <= rows; i++) {
        // this string is our pattern
        var pattern = "";
        // by default, JavaScript gives a float value
        // if the number is not exactly divisible,
        // so we use parseInt to convert it to an integer
        // it returns the floor of the floating point number
        var n = parseInt((rows + 1) / 2);
        // if the number of rows is even
        if (rows % 2 == 0) {
            // we keep increasing the value of k
            // until it reaches half of the required number of rows
            if (i <= n) k++;
            // we decrease the k value once it is crosses half the
            // required number of rows
            if (i > n + 1) k--;
            // if i is equal to (n+1), the value of k does not change
            // this is because every row has to repeat, for the total number of rows to be even
        }
        // if the number of rows is odd
        else {
            // here n will be the ceil of (rows/2)
            if (i <= n ) k++;
            else k--;
        }
        for (var j = 1; j <= rows; j++) {
            // to print a centered pattern
            // example (rows=4): for the first row, n=2 and k=1
            // so we get only one star when j=2
            // example (rows=5): for the first row, n=3 and k=1
            // so we get only one star when j=3
            if (j <= (n - 1 + k) && j >= (n + 1 - k)){
                pattern += "*";
            }
            // adding whitespaces
            else
                pattern += " ";
        }
        console.log(pattern);
    }
}

// top 3, bottom 2 -> k
// odd number of rows => middle row does not repeat
console.log("Pattern for 5 rows: ");
printDiamond(5);

// top 3, bottom 3 -> k
console.log("\nPattern for 6 rows: ");
printDiamond(6);