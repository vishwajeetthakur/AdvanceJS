/*
pasing phase : scope mamaher assgin scope to fucntion and varible, 
               only for formal decalration
            --> no values will be assgined only scope resplution resolution
               
execution phase : allocate value an execute code

 */

var teacher = "sanket";

function fun(){
    console.log("inside fucntion....")
    var teacher = "pulkit";
    content = "js" // not a formal declaration --> content wil become autoglobal
    console.log(teacher)
    console.log(content)

    console.log("fucntion ends....")
}

fun()
console.log(teacher)
console.log(content)

console.log("*****************")

var teacher = "sanket";

function fun(){
    console.log("inside fucntion....")
    var teacher = "pulkit";
    var content = "js" 
    console.log(teacher)
    console.log(content)

    console.log("fucntion ends....")
}

fun()
console.log(teacher)
console.log(content) // error as var is not accesible

console.log("*****************")

console.log(new_value) // error
new_value = "boomer"