
function printPattern(n){
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            process.stdout.write("* ")
        }
        process.stdout.write("\n")
    }
}

function printPattern2(n){
    for(let i=0;i<n;i++){
        let a = ""
        for(let j=0;j<n;j++){
            a+="* "
        }
        console.log(a)
        
    }
}


printPattern(4)
console.log("******************")
printPattern2(4)

/*

* * * * 
* * * * 
* * * * 
* * * *


*/