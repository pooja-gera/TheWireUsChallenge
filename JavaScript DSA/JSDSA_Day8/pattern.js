function printHollowRectangle(rows, cols){
    // number of rows
    for (var i = 1; i <= rows; i++){
        // pattern for each row
        var pattern = "";
        // number of columns
        for(var j = 1; j <= cols; j++){
            // if it is the first row/ last row/ first column/ last columns,
            // we have to print an asterisk
            if(i == 1 || i == rows || j == 1 || j == cols)
                pattern += "*";
            // else we just print a whitespace
            else
                pattern += " ";
        }
        // print the pattern for each row and then repeat
        console.log(pattern);
    }
}

console.log("Rectangle with 6 rows and 8 columns: \n"); 
printHollowRectangle(6, 8);

console.log("\nRectangle with 6 rows and 6 columns: \n"); 
printHollowRectangle(6, 6);