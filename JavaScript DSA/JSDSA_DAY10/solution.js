
let n = readLine();//Taking the input of number of rows to be printed from the user
let i,j;
// upper half of the pattern
    for(i = 0; i < n; i++) 
    {
        for(j = 0; j < (2 * n); j++)
        { 
            if(i + j <= n - 1)  // upper left triangle
                document.write("*");
            else
                document.write(" ");
            if((i + n) <= j)  // upper right triangle
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
            if(i >= j)  //bottom left triangle
                document.write("*");
            else
                document.write(" ");
            if(i >= (2 * n - 1) - j)  // bottom right triangle
                document.write("*");
            else
                document.write(" ");
        }
        document.write("<br/>");
    }