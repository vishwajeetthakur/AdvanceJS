// is js compiled ? 
// scope means visibility of fucntion and varible and classes , from where you can call them


var teacher = "Sanket" 

function fun(){ // global scope
    var teacher = "pulkit" // scope of fun
    console.log(teacher)
}

function gun(){
    var student = "sarthak" // scope of gun
    console.log(student)
}

fun() 
gun()
console.log(teacher)
console.log(student)