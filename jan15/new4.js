var x = 1; // x is global varible

if (x === 1) {
  var x = 2; // pointing to same x that is global, re-initilizing 

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2
console.log("**********************************")
/*
This code defines an object called "foo" with three properties "kid", "bar", and "baz". The second line uses destructuring assignment to extract the value of "bar" property from the "foo" object and assign it to a new variable also named "bar".

So, after this line of code, a new variable "bar" with the value of 178 will be created in the current scope.
*/

foo = { kid:900, bar:178, baz:12 };
var { bar } = foo; // where foo = { bar:178, baz:12 }; this is equal to  "bar = foo.bar"
/* This creates a variable with the name 'bar', which has a value of 178 */

console.log(bar)
console.log(foo)
console.log(foo.bar)

console.log("**********************************")

var {val} = foo ; // val = foo.val = undefined
console.log(val)
