function pattern(n){

    for(let i=0; i<n; i++){

        res = ""
        for(let j=0; j<=i ;j++){
            res += "* "
        }
        console.log(res)
    }
}

pattern(6)

/*

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * *

*/