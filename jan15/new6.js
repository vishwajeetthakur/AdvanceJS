/*
let declare blocked-scoped local varible, optmally initlizing 
it to a differetn varible. 
*/

let x = 1; // different
{
    if(x==1){
        let x = 2; // different
        console.log(x)
    }

}
console.log(x)

console.log("**************")

function fun(){
    console.log(y); // not acessible, referencedERROR
    let y = 900; 
}

function gun(){
    console.log(z) // accessibel as decalred by var
    var z = 800;
}