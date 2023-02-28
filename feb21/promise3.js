function getRandomInt(max){ 
    return Math.floor(Math.random()*max)
}

function createPromiseWithSetTimeout(){
    return new Promise( function executer(resolve, reject){
        
        setTimeout(function(){
            let num=getRandomInt(10)
            console.log(" Resolving a promise ");
            resolve(num);
            // after resolve the code would execute normally
            setTimeout(function(){
                console.log("inner settimeout")
                // at a point js will have choice either to take code from callback queue and microtask queue
                // it will give priority to microtask queue\
                // hence .then will be executed first
            },0)
            console.log("Doing more stuff, should not be visible after a resolve!");
        
            return num
        }, 5000)     
    })
}

console.log(createPromiseWithSetTimeout().then(function() {
    console.log("resolved");
}));
console.log("end of file")