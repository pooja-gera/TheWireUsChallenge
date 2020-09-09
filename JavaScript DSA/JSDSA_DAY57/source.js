var str = String(readline());
print("Output ");
printSS(str,"");

// in a Subsequence all the elemnts have a choice whether to come into the subsequence or not.

function printSS(str ,ssf){   // ssf stands for String so Far(Just a name for storing and print subsequence)
    if(str.length == 0){     // Base case when the length of input string becomes Zero
        if(ssf!=""){         // if our helper string is not Empty then there will be a valid subsequence
            print(ssf);     // print the subsequence
        }
        return;
    }

    let ch = str[0];                // store the first character of Input string
    let newstr = str.slice(1);      // slice the string to exclude first character from string
    printSS(newstr,ssf+ch);         // call the function with new String and adding first character to helper string
    printSS(newstr,ssf);            // calling the function without adding first character into helper string    
    
}