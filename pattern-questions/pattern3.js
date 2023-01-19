function pattern(n){

    for(let i=0; i<n ; i++){
        let res = ""
        for(let j=0; j<n; j++){

            if(j<(n-i-1)){
                res += "  ";

            }
            else{
                res+="* ";
            }
            
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