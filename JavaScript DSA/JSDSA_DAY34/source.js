
var str = readline();

toggleCase(str);

function toggleCase(str){
    let ans ="";
    let n = str.length;
    let z = '';
    for(let i=0;i<n;i++){  // Loop to itirate over all the characters of the string       
        if(str[i]===" "){  // Managing the spaces between two words
            ans+=" "
            continue;
        }        
        let c = str.charCodeAt(i);          // gives the ASCII value of character at i index of string
        
        if(c>=97)                           // ASCII value of small 'a' is 97.
        {
           z = String.fromCharCode(c-32);   // gets the character from the ASCII values
        }
        
        else
        {
            z = String.fromCharCode(c+32);   // if the character is capital letter
        }
        ans+=z;                                
    }
    print(ans);

}
