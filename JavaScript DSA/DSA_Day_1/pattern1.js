let ch;

while(ch!=0){
    print("Enter number of rows : ");
    let n = readline();
    if(n==0){
        break;
    }
    print("Press 1 for Right Angled Triangle.");
    print("Press 2 for Reverse andled Angled Triangle.");
    print("Press 3 for Pyramid.");
    print("Press 4 for Diamond.");
    print("Press 5 for Number Diamond");
    print("Press 0 TO exit");
    
    ch = readline();

switch(ch){
    case 0:
        break;
    case "1":
        pattern1(n);
        break;
    case "2":
        pattern2(n);
        break;
    case "3":
        pattern3(n);
        break;
    case "4":
        diamond(n);
        break;
    case "5":
        numDiamond(n);
        break;
    default:
        print("Incorrect input");
}

}

function pattern1(n){
    let nst =1;
    let nsp =0;
    for(let i=0;i<n;i++){
        let s ="";
        for(let cst = 0;cst<nst;cst++){
            s+="* ";
        }
        print(s);
        nst++;
    }
}

function pattern2(rows){
    let nst = 1;
   let nsp = rows-1;
    let s ="";
   for(let r = 1;r<=rows;r++)
   {
       for(let csp =1;csp<=nsp;csp++)
       {
           s+="  ";

       }
       for(let cst =1;cst<=nst;cst++)
       {
           s+="* ";
       }
       print(s);
       nst++;
       nsp--;
   } 
}

function pattern3(rows){
    let nst =1;
    let nsp =rows-1;
    
    for(let r = 1;r<=rows;r++)
    {
        let s ="";
        for(let csp = 1;csp<=nsp;csp++)
        {
            s+="  ";
        }
        for(let cst = 1;cst<=nst;cst++)
        {
            s+="* ";
        }
        print(s);
        nst = nst+2;
        nsp= nsp-1;

        }
}

function diamond(rows){
    let nst =1;
    let nsp = rows/2;

    for(let r = 1;r<=rows;r++)
    {
        let s ="";
        for(let csp = 1;csp<=nsp;csp++)
        {
            s+="  ";

        }
        for(let cst = 1;cst<=nst;cst++)
        {
            s+="* ";

        }
        print(s);
        if(r<=rows/2)
        {
            nsp--;
            nst=nst+2;


        }
        else
        {
            nst = nst-2;
            nsp++;

        }
        
    }
}

function numDiamond(rows){
    let nst = 1;
    let nsp = rows/2;
    for(let r = 1;r<=rows;r++)
    {
        let s  ="";
        let ele = r;
        for(let csp =1;csp<=nsp;csp++)
        {
            s+="  ";

        }
        for(let cst =1;cst<=nst;cst++)
        {
            s= s+ele+" ";
            if(cst<=nst/2)
            ele++;
            else
            {
                ele--;
            }
            
        }
        print(s);
        if(r==rows/2)
        ele--;
        if(r<=rows/2)
        {
        nsp--;
        nst = nst+2;
        }
        else
        {
            nsp++;
            nst = nst-2;
        }
        

    }
}