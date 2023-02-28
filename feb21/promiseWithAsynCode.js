function createPromiseWithSetTimeout(){
    return new Promise( function executer(resolve, reject){
        
        setTimeout(function(){
            let num=getRandomInt(10)
        if(num%2==0){
            resolve(num)
            
        }
        else{
            reject(num)
            
        }
        console.log("set timeout ended") //executed after the 5 second
        }, 5000)
        
    })
}

function getRandomInt(max){ 
    return Math.floor(Math.random()*max)
}

console.log(createPromiseWithSetTimeout()) // executed immidiately

console.log("this is ending")// executed immidiately