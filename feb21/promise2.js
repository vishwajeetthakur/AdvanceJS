function getRandomInt(max){ 
    return Math.floor(Math.random()*max)
}

function createPromiseWithSetTimeout(){
    return new Promise( function executer(resolve, reject){
        
        setTimeout(function(){
            let num=getRandomInt(10)
        if(num%2==0){
            return "this is return after resolve"
            resolve(num, 300, 400) // this line will never execute and promise will forever remain in pending state

        }
        else{
            return "this is return after resolve"
            reject(num, 900, 800)
            
        }
        console.log("set timeout ended") 
        }, 5000)
        
    })
}

function getRandomInt(max){ 
    return Math.floor(Math.random()*max)
}

x = createPromiseWithSetTimeout() // executed immidiately

console.log("this is ending")// executed immidiately
