function combinationSum(array, remainingSum, result = [], intermediate = [], start = 0) {
    if (remainingSum < 0) {
      // by adding another number, if the remaining sum is less than zero
      // then, we should not add that number to our list
      return result;
    }
  
    if (remainingSum === 0) {
      // if after adding the previous number, our remaining sum is equal to zero
      // then, we need to save the current combination as it is one
      // of the desired combinations
      result.push(intermediate.slice());
  
      return result;
    }
  
    // if we haven't reached zero yet, we continue to add all
    // possible candidates that are remaining
    for (let i = start; i < array.length; i++) {
      const number = array[i];
  
      // adding another candidate.
      intermediate.push(number);
  
      // continue checking after adding the new number
      combinationSum(array, remainingSum - number, result, intermediate, i);
  
      // backtracking
      intermediate.pop();
    }
  
    return result;
  }
  
output = combinationSum([2, 3, 4, 5], 6);
console.log(output);