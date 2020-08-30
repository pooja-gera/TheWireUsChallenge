
IMPLEMENTATION:

//here we have X litres of water and we need to find the water in jth glass of ith row.
function findWater(i, j, X) 
{ 
//Row 1 has 1 glass, row 2 has 2 glasses so that means ith row will have maximum of i glasses so we return in case j > i
if (j > i) 
{ 
    return 0; 
} 
  
// There will be i*(i+1)/2 glasses  
// till ith row (including ith row) 
let no_of_glasses = Math.round((i * (i + 1) )); 
float[] glass = new float[no_of_glasses + 2]; 
  
// Put all water in first glass 
var index = 0; 
glass[index] = X; 
  
// Now let the water flow to the downward glasses till the row number is less than or equal  
// to i (given row) correction : X can be zero for side glasses as they have lower rate to fill 

for (let row = 1; row <= i ; ++row) 
{ 
    // Fill glasses in a given row. Number of  
    // columns in a row is equal to row number 
    for (let col = 1; col <= row; ++col, ++index) 
    { 
        // Get the water from current glass 
        X = glass[index]; 
  
        // Keep the amount less than or  
        // equal to capacity in current glass 
        glass[index] = (X >= 1.0f) ? 1.0f : X; 
  
        // Get the remaining amount 
        X = (X >= 1.0f) ? (X - 1) : 0.0f; 
  
        // Distribute the remaining amount   
        // to the down two glasses 
        glass[index + row] += X / 2; 
        glass[index + row + 1] += X / 2; 
    } 
} 
  
// The index of jth glass in ith  
// row will be i*(i-1)/2 + j - 1 
return glass[(int)(i * (i - 1) / 2 + j - 1)]; 
} 
