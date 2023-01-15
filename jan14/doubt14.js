
let obj = {x:10, y:20,valueOf(){return "valueOf called";},
         toString(){return "toString called"}}


console.log(`obj is this : `+obj)  // valueOf called
console.log(`obj is this : `, obj) // 
console.log(`obj is this : ${obj}`) // toString called 
console.log(`obj is this : `, obj.valueOf()) // valueOf called 



