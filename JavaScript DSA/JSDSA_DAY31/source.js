
let str = readline();

// using loop
print(check_usingLoop(str));
// using inBuilt functions
print(check_usingInbuilt(str));





// A function to check whether entered string is palindrome or not using loop and logic
function check_usingLoop(str) {
    let len = str.length;    // finding the length of string we entered

    for (let i = 0; i < len / 2; i++) {    // loop through half of string

        if (str[i] !== str[len - 1 - i]) {   // comparing the characters from start and last
            return false;
        }
    }
    return true;
}

// A function to check whether enteered string is palindrome or not using inbuilt functions -- 

function check_usingInbuilt(str){
    // changing the string to array
    let arr = str.split('');

    // reverse the array values using inBuilt reverse function
    let reversearr = arr.reverse();

    // converting reversed array back to string using join
    let reverseStr = reversearr.join('');

    if(reverseStr == str){
        return true;
    } else
    {
        return false;
    }
}

