
var keypad = [".;","abc","def","ghi","jkl","mno","pqrs","tu","vwx","yz"];

var str = readline();
var arr = keypadCombination(str,keypad);
print(arr);


function keypadCombination(str="",keypad = [".;","abc","def","ghi","jkl","mno","pqrs","tu","vwx","yz"]){
    if(str.length==1){                 // Base case means when there is only single number in the string then push all of it's elemnts in an array and return it.
        let ans = [];
        for(let i=0;i< keypad[parseInt(str[0])].length;i++){
            ans.push(keypad[parseInt(str[0])][i]);
        }
        return ans;
    }

    let ch = str[0];              // storing the first number from string
    let newStr = str.substr(1);   // excluding the first number from the string

    let ans = keypadCombination(newStr);  // passing the new string in the function again
    let res = [];                                   
    for(let i=0;i<keypad[parseInt(ch)].length;i++){    // Now we work here after recursion and add all the elemnts present in keypad at first number's position
        for(let j=0;j<ans.length;j++){                 // in each elemnt of resultant array and pushing all the elemnts into the res array.
            res.push(keypad[parseInt(ch)][i]+ans[j]);
        }
    }
    return res;
}