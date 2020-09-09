
IMPLEMENTATION:

Approach-1: Moving Backward
var dailyTemperatures = function(T) {
    const stack = [], result = [];
    
    for(let i = T.length-1; i >= 0; i--) {
        let top = stack[stack.length-1];
        
        while(stack.length && T[top] <= T[i]) {
            stack.pop();
            top = stack[stack.length-1];
        }
        if(!stack.length) result.push(0);
        else result.push(top - i);
        stack.push(i);
    }
    return result.reverse();
};

Approach-2: Moving Forward
var dailyTemperatures = function(T) {
    const result = Array(T.length).fill(0);
    const stack = [];
    
    for(let i = 0; i < T.length; i++) {
        let top = stack[stack.length-1];
        
        while(stack.length && T[top] < T[i]) {
            const idx = stack.pop();
            result[idx] = i - idx;
            top = stack[stack.length-1];
        }
        stack.push(i);
    }
    return result;
};