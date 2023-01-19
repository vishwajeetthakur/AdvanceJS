function pattern(n){
    for(let i=0; i<n ; i++){
        let res = ""
        for(let j=0; j<n; j++){
            if(j<(n-i-1)){
                res += "  "
            }
            else{
                res += "* "
            }
        }
        for(let k=0; k<i; k++){
            res += "* "
        }
        console.log(res)

    }
}

pattern(6)

/* 

          * 
        * * * 
      * * * * * 
    * * * * * * * 
  * * * * * * * * * 
* * * * * * * * * * *

*/