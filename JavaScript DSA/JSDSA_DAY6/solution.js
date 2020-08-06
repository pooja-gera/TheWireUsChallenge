
let rows = readLine();//Taking the input of number of rows to be printed from the user
let i, space, j;
let coef=1;
for(i = 0; i < rows; i++)
    {
        for(space = 1; space <= rows-i; space++)
            document.write(" ");

        for(j = 0; j <= i; j++)
        {
            if (j == 0 || i == 0)
                coef = 1;
            else
                coef = coef*(i-j+1)/j;

            document.write(coef + " ");
        }
        document.write("<br/>");
    }
