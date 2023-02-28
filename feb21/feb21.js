function getRandomInt(max){ 
    return Math.floor(Math.random()*max)
}

function createPromiseWithForLoop(){
    return new Promise( function executer(resolve, reject){
        for(let i=0; i<10000000000; i++){}
        console.log("for loop completed")
        let num=getRandomInt(10)
        if(num%2==0){
            resolve(num)
        }
        else{
            reject(num)
        }
    })
}

console.log(createPromiseWithForLoop()) // promise will not return immidiately as it is having sync code 
console.log("this is ending") // printed at the last after the promise execution

function createPromiseWithSetTimeout(){
    return new Promise( function executer(resolve, reject){
        // for(let i=0; i<100000000000; i++){}
        setTimeout(function(){
            let num=getRandomInt(10)
        if(num%2==0){
            resolve(num)
            return num
        }
        else{
            reject(num)
            return num
        }
        }, 5000)
        
    })
}



