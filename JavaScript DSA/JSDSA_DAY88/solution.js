
IMPLEMENTATION:

var romanToInt = function(s) {
    let RomanValue = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    let rs = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(RomanValue[s[i]] < RomanValue[s[i + 1]]) {
            rs -= RomanValue[s[i]]
        }
        else {
            rs += RomanValue[s[i]] 
        }
    }
    return rs;
};