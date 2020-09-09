
let rows = readline();



    let nst =rows;   // managing number of stars in first row
    let nsp=0;       // managing number of spaces in first row

    for(let i=0;i<rows;i++)  // loop to iterate number of required rows
    {
        let s = "";             // initiating a balnk string for each row
        for(let csp=0;csp<nsp;csp++)  // loop to set spaces in each row
        {
                s = s + "  ";
        }
        if(i==0 || i>=rows/2){          // case to manage first row and lower half 
        for(let cst=0;cst<nst;cst++)
        {
                s = s+"* ";
        }
            
        }
        else                           // case to print the hollow between stars
        {
            for(let cst=0;cst<nst;cst++)
        {       
            if(cst==0 || cst==nst-1){
                s  =s+"* ";
            }
                else{
                s = s + "  ";
                }
        }
        
        }
        print(s);
        // most important updation of our paprameters for number of stars and spaces
        if(i<(rows/2)-1)   // updation for upper half
        {
            nsp++;  
            nst = nst - 2;
        }
        else                // updation for lower half
        {
            nsp--;
            nst = nst + 2;
        }
    }





    
