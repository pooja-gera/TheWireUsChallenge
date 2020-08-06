// Note -- Please do refer resources to read difference between var and let keywords.
//Hint -- Try the pattern after removing one zero before each digit.
//Hint -- for Input - 3 , The pattern is printing in two parts first 1 2 3 then 10 11 12 and 10 is nothing nut 3*3+1.(Apply for all input rows)

var rows  = readline();
var rows2 = rows;
var ele1 = 0;           //setting the element for first part
var ele2 = rows*rows ;  // setting the elemets for printing for second part  
var nst = 0;            // seeting number of stars


for(let i =0;i<rows;i++){  // loop to manage the rows
    let s ="";
    for(let cst =0;cst<nst;cst++){    // managing the stars
        s = s+"*";
    }


    for(let cele1 = 0; cele1<rows2; cele1++){  // elements of first part i.e - 1 2 3
        ele1++;
        s = s+ele1+"0";                        // adding zero as a character in the pattern
    }     

    for(let cele2 =0;cele2<rows2;cele2++){       // elements of second part i.e 10 11 12
        ele2++;
        if(cele2!=(rows2 -1))                    // not adding 0 to last element
        s = s+ele2+"0";
        else
        s = s+ ele2;
    }

    print(s);
    //most important step i.e updation of parameters
    nst = nst + 2;           // number of stars increse by 2
    ele2 = ele2 - rows2;     
    rows2--; 
    ele2 = ele2 - rows2;
    
}