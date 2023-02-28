function getRandomInt(max){ 
    return Math.floor(Math.random()*max)
}

function createPromiseWithSetTimeout(){
    return new Promise( function executer(resolve, reject){
        
        setTimeout(function(){
            let num=getRandomInt(10)
        if(num%2==0){
            resolve(num, 300, 400) // it will only take first value

        }
        else{
            reject(num, 900, 800)
            
        }
        console.log("set timeout ended") // executed after promise resolve/reject
        }, 5000)
        
    })
}

function getRandomInt(max){ 
    return Math.floor(Math.random()*max)
}

x= createPromiseWithSetTimeout() // executed immidiately

console.log("this is ending")// executed immidiately
