
var keypad = [".;","abc","def","ghi","jkl","mno","pqrs","tu","vwx","yz"];

var str = readline();
printKeypadCombination(str,keypad,"");

function printKeypadCombination(str,keypad,ans) {
    if(str.length==0){
        print(ans);
        return;
    }

    let ch = str[0];
    let newStr = str.substr(1);

    for(let i=0;i<keypad[parseInt(ch)].length;i++){
        printKeypadCombination(newStr,keypad,ans +keypad[parseInt(ch)][i]);
    }
}