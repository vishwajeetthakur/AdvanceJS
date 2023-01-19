function pattern(n){
    for(let i=0; i<(n*2 - 1); i++){

        res = ""
        if(i<n-1){
            res = res + "* ".repeat(i + 1)  //print star
            res = res + "  ".repeat(n - i*2) // print space 
            res = res + "* ".repeat(i + 1) // print star -- duplicated

        }
        else if(i==n-1){
            res = "* ".repeat(n*2 - 1) // print star
        }
        else{
            res = res + "* ".repeat(n*2-1-i) // print star
            res = res + "  ".repeat((i-n)*2+1) // print space
            res = res + "* ".repeat(n*2-1-i) // print star -- duplicated
        }
        console.log(res)
    }
}

pattern(3)

/*

*       * 
* *   * * 
* * * * * 
* *   * * 
*       * 

*/