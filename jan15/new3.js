/*
CONCLUSION
---------------
JS code is executed in 2 phase 
1. parsing 
2. execution

Pasing ->  do scope resolution -- check every fucntion and varible and see
           what is there scope 

Trper of scope 
      1. global 
      2. fucntion
      3. Module
      ADITIONAL
      4. block -- scope created with pair of curly braces -- let and const belong to block scope
      Block cope only const and let declaration but not var decalration
*/

console.log(n) // works only when n is decalred as var , not work with let

function fun(){
    console.log(n)
}
// let n = "sanket" // if we are decalring it through var it should be accsible 
var n = "vishwajeet"
fun()
console.log(n)

// below thign is correct as var is global scoped
{
    var x = 1;
}

console.log(x)

// below thign is incorrect as let and const is block scoped
{
    let x = 1;
}

console.log(x)