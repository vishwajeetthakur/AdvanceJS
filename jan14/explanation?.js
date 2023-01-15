// how to check if a varible is NAN

x = NaN

console.log(x==NaN) // false 

console.log(x===NaN) // false 

console.log(isNaN(x)) // true 

console.log(isNaN("sanket")) // true why ?  
// isNaN("sanket") --> isNaN( Number("sanket") ) --> isNaN( NAN ) --> true 
// coercion hapens

console.log(isNaN(123)) // false
console.log(isNaN('123')) // false
console.log(isNaN('0xa')) // false
console.log(isNaN('1a')) // true

console.log("**********")

console.log(Number.isNaN('sanket')) // false --> as this does not do coercion
