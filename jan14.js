a = 100 
b = '100'
// console.log(a==b)
// console.log(a===b) 

let c = 100 
let obj = {x:10, y:20}

console.log("this is roll NO : "+ c) 
console.log("this is roll NO : ", c) 
console.log(`obj is this : ${obj}`) // coercion will happen here and obj.toString() will be called 
console.log(`obj is this : `+obj) // coercion will happen here and obj.toString() will be called 
console.log(`obj is this : `, obj) // obj.valueOf() will be called to fetch its value
console.log(`obj is this : `, obj.valueOf()) // coercion will happen here and obj.toString() will be called 
console.log(`obj is this : `, obj.toString()) // coercion will happen here and obj.toString() will be called 