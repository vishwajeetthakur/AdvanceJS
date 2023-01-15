

function myNan(arg){
    if(typeof(x)=='number' && arg!=arg){
        return true;
    }
    return false;
}

function newNan(arg){
    if(arg!==arg){
        return true;
    }
    return false;
}

function jsNan(arg){
    return arg != arg; // this will try to coerce , x= 'abc' --> gives true 
}

x = NaN
// x = 'abc'
// x = -0
// x = 'NaN'
// x = false 
x = null
x = undefined
console.log(myNan(x))
console.log(newNan(x))
console.log(jsNan(x))

console.log(Number.isNaN(x))




