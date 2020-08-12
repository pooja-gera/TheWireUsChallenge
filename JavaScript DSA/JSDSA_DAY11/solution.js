
let n = readLine();//Taking the input of number of rows to be printed from the user

// upper half of the pattern
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < (2 * n); j++)
        {
            if(i >= j)  // upper left triangle. 
                document.write("*");
            else
                document.write(" ");

            if(i >= (2 * n - 1) - j) // upper right triangle
                document.write("*");
            else
                document.write(" ");
        }
        document.write("<br/>");
    }
    // bottom half of the pattern
    for(i = 0; i < n; i++)
    {
        for(j = 0; j < (2 * n); j++)
        {
            if(i + j <= n - 1) // bottom left triangle
                document.write("*");
            else
                document.write(" ");

            if((i + n) <= j) // bottom right triangle
                document.write("*");
            else
                document.write(" ");
        }
        document.write("br/");
    }