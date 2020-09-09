// Taking the input from the user
let rows = readline();

//Storing number of elements present in First row
let nst = 1;
//Number of spaces in first row
let nsp = rows/2;

for(let r = 1;r<=rows;r++) // a loop to go in each row of the pattern
{
    let s  =""; // I have taken a string in which the space and element in each row will get added
    let ele = r; // variable to start each row with desired number
    for(let csp =1;csp<=nsp;csp++) // loop will manage the spaces int the start of row
    {
        s+="  ";   // appending the string with required spaces

    }
    for(let cst =1;cst<=nst;cst++) // loop will manage the elements/numbers we want in the row
    {
        s= s+ele+" "; // appending the string with required number
        
        if(cst<=nst/2) //updation of element to the number we require next
        ele++;
        else
        {
            ele--;
        }
            
    }
    print(s);   // will print the complete row 
    // most important part is the again updation of number of elements and spaces before going in the next row
    if(r==rows/2)
    ele--;
    if(r<=rows/2) //updation for upper half of diamond
    {
    nsp--;
    nst = nst+2;
    }
    else         //updation for lower half of diamond
    {
        nsp++;
        nst = nst-2;
    }
        

}


    