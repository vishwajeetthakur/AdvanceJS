
console.log(Boolean("")) // false  

console.log(Boolean("a")) // true  
console.log(Boolean(null)) // false  
console.log(Boolean(undefined)) // false  

console.log(Boolean(0)) // false  
console.log(Boolean(1)) // true  
console.log(Boolean(NaN)) // false  

console.log(String(1234)) // 1234 in string

console.log("\n**************\n")

console.log(0xa) // hexadecimal --> decimal // 0xa --> 10 

console.log(100 - 0xa) // 100 - 10 = 90 
console.log(100 - '0xa') // 100 -10 = 90 

console.log(100 - 'oxa') // 100 - NaN 

console.log("\n**************\n")

console.log(Number('123'))
console.log(Number('0xa'))