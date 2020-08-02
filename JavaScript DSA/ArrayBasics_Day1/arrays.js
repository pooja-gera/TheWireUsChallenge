// creates an array favoriteColors and assigns the value to it
let favoriteColors = ["Blue", "Green", "Yellow", "Purple", "Orange", "White", "Pink"]

// prints the array, favoriteColors
console.log(favoriteColors)

// prints the length of the array
console.log(favoriteColors.length)

// prints the value at index 3, JS follows zero-based indexing
// so it basically returns the fourth element
console.log(favoriteColors[3])

// push adds an element to the end of the array
favoriteColors.push("Black")
console.log(favoriteColors)

// pop removes the last element from the array
favoriteColors.pop()
console.log(favoriteColors)

// unshift adds an element to the start of the array, i.e, as
// the first element
favoriteColors.unshift("Black")
console.log(favoriteColors)

// shift removes the first element from the array
favoriteColors.shift()
console.log(favoriteColors)

// forEach calls a function once for each element in the array
// the $ is used for variables
favoriteColors.forEach(color => console.log(`One of my favorite colors is ${color}`))

// map transforms the elements in the original array by 
// calling the given function once for each element in the array
console.log(favoriteColors.map(color => color.toUpperCase()))

// Note: Since we did not actually return the value from the map,
// the array remains unchanged.

// filter creates a new array with only the elements that pass the test in a given function
// remember that we are not returning this value to anything
console.log(favoriteColors.filter(color => color.startsWith("P")))

// find gives the first element in an array that passes a test given as a function
// which is why it returns only purple
console.log(favoriteColors.find(color => color.startsWith("P")))

// include determines whether an array has a specific element
// return true or false
console.log(favoriteColors.includes("Purple"))

// indexOf searches the array for a specific element and returns its first index
console.log(favoriteColors.indexOf("White"))

// findIndex returns the index of the first element in an array that 
// passes the test in a given function
console.log(favoriteColors.findIndex(color => color.startsWith("W")))

// 'every' checks if all elements in an array pass a test given as a function
// returns true or false
console.log(favoriteColors.every(color => color.length > 3))

// create another array moreColors and assigns the value to it
let moreColors = ["Teal", "Magenta", "Grey"]
// concat merges two or more arrays
console.log(favoriteColors.concat(moreColors))

// slice selects a part of an array, and returns a new array
// Note: The end argument is not included
console.log(favoriteColors.slice(1,7))

// splice adds/removes elements in an array and returns the removed elements
// the first argument takes an integer that specifies at what index to add/remove elements
// the second argument takes the number of items to be removed
// an optional third argument takes in the new elements to be added to the array
console.log(favoriteColors.splice(2,3))

// 'sort' sorts the items in an array
// the order can either be alphabetic or numeric, and either ascending or descending
// by default, it is alphabetical and ascending
favoriteColors.sort()
console.log(favoriteColors)

// 'reverse' reverses the order of the elements in an array
favoriteColors.reverse()
console.log(favoriteColors)

// join converts the elements of an array into a string
console.log(favoriteColors.join(" and "))

// the three dots are an ES6 feature, the spread operator
// it expands the contents of the array and takes it out of the array structure
console.log(...favoriteColors)