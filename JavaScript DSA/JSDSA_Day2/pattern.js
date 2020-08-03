function printPyramid(rows){
    // this loop runs for n times, where n is the number of rows
    for (var i = 1; i <= rows; i++) {
        // this is used to add whitespaces to the star pattern in each line
        // for example, the first row has only one star, and should be in the middle,
        // so we have to add n-1 whitespaces at the beginning and at the end of the pattern
        // to align it to the center
        // (n-1) + (n-1) = (2n-2)
        // (2n-2) + (1 star) = (2n-1) length
        var myval = ' '.repeat(rows - i);
        var myval1 = '*'. repeat(i * 2 - 1)
        // adding whitespace at the beginning and at the end
        console.log(myval + myval1 + myval);
    }
}

// this pattern has stars of odd numbers in each row
// the first row has 1 star, the second row has 3, the 
// third row has 5 and so on...
// each row has (2n-1) stars where n is the number of the row
printPyramid(5)