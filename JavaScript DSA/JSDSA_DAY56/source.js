let str = String(readline());

print("[ "+subsequences(str)+"]");

function subsequences(str) {
    if(str.length == 0){  // Base case to break the recursion when the string is empty 
        let arr = [];
        arr.push(" ");
        return arr;       // returns an array with single element i.e empty string
    }

    let ch = str[0];      // will store the first character of string
    let a =[];
    a = subsequences(str.slice(1)); // will slice the string removing hte first character and pass in our function
    let res = [];                      
    for(let s=0;s<a.length;s++) {     // we will add all the elemnts of a into res as it is
        res.push(a[s]);
    }
    for(let s=0;s<a.length;s++) {   // we willl also add all the elements of a into res with adding ch in each element 
        res.push(ch+a[s]);
    }

    return res;    // return res array

}