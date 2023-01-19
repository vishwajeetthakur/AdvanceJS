function pattern(n){

    for(i=0; i<(n*2-1); i++){
            res = ""
        
            if(i<n){
                res = res + "  ".repeat(n-i-1) 
                res = res +  "* ".repeat(i*2 +1)
            }
            else{
                
                res = res + "  ".repeat(i-n+1)
                res = res + "* ".repeat(n*2-1 - 2*(i-n+1))
            }
            
        
        console.log(res)
    }
}

pattern(5) 
// a = "p ".repeat(3) + "ef"
// console.log(a) 

/*

        * 
      * * * 
    * * * * * 
  * * * * * * * 
* * * * * * * * * 
  * * * * * * * 
    * * * * * 
      * * * 
        * 


*/