let userpaddle = document.getElementById("userpaddle")
let aipaddle = document.getElementById("aipaddle")
let ball = document.getElementById("ball")
let gamebox = document.getElementById("gamebox")

let wpressed = false;
let spressed = false;

let userscore = document.getElementById("userscore")
let aiscore = document.getElementById("aiscore")

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

theme = document.getElementById("theme")
console.log(theme.checked)
theme.addEventListener('change', toggle)

function toggle(e){
    console.log(e.target.checked)  // not able to acess e.checked
    if(e.target.checked){
        gamebox.style.backgroundColor = "blue"
    }
    else{
        gamebox.style.backgroundColor = "black"
        console.log("in else")
        console.log(gamebox.style.backgroundColor)
    }
}


function keyDownHandler(e){
    if(e.key == 'w'){
        wpressed = true;
        console.log("w pressed")

    }
    else if (e.key=='s'){
        spressed = true;
        console.log("s pressed")
    }
}

function keyUpHandler(e){
    if(e.key=='w'){
        wpressed = false;
        console.log("w released")
    }
    else if (e.key=='s'){
        spressed = false;
        console.log("s released")
    }
}


let vx = -20 ; 
let vy = -20 ;
let v = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2))

function reset(){
    ball.style.top = "50%"
    ball.style.left = "50%" 
    vx = -20 ; 
    vy = -20 ; 
    v = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2)) 

}

function checkcollision(activepaddle){
    let balltop = ball.offsetTop;
    let ballbottom = ball.offsetTop + ball.offsetHeight ; 
    let ballleft = ball.offsetLeft ; 
    let ballright = ball.offsetLeft + ball.offsetWidth ; 

    let paddletop = activepaddle.offsetTop ; 
    let paddlebottom = activepaddle.offsetTop + activepaddle.offsetHeight ; 
    let paddleleft = activepaddle.offsetLeft ; 
    let paddleright = activepaddle.offsetLeft + activepaddle.offsetWidth ; 

    if(ballbottom > paddletop && balltop < paddlebottom && ballright > paddleleft && ballleft < paddleright){
        return true ;
    }
    else{
        return false ; 
    }
}


function gameloop(){
    if(ball.offsetLeft <= 0 + (ball.offsetHeight / 2)){
        // vx = -vx 
        reset() 
        aiscore.innerHTML = parseInt(aiscore.innerHTML) + 1
    }
    if(ball.offsetLeft > gamebox.offsetWidth - (ball.offsetWidth/2)){
        // vx = -vx
        userscore.innerHTML = parseInt(userscore.innerHTML) + 1
        reset()
    }


    if(ball.offsetTop <= 0 + (ball.offsetHeight / 2)){
        vy = -vy
    }
    if(ball.offsetTop > gamebox.offsetHeight - (ball.offsetHeight/2)){
        vy = -vy
    }
    let paddle = ball.offsetLeft < gamebox.offsetWidth/2 ? userpaddle : aipaddle ; 
    let ballcenterY = ball.offsetTop + ball.offsetHeight / 2 ; 
    let paddlecenterY = paddle.offsetTop + paddle.offsetHeight / 2 ;

    let angle = 0 
    if(checkcollision(paddle)){
        if(paddle == userpaddle){
            if(ballcenterY < paddlecenterY){
                angle = -Math.PI / 4 ;
            }
            else if(ballcenterY > paddlecenterY){
                angle = Math.PI / 4 ;
            }
            else{
                angle = 0 ;
            }
        }
        else if (paddle==aipaddle){
            if(ballcenterY < paddlecenterY){
                angle = -3 * Math.PI / 4 ;
            }
            else if(ballcenterY > paddlecenterY){
                angle = 3 * Math.PI / 4 ;
            }
            else{
                angle = 0 ;
            }
        }
        v = v + 0.2 ; // velocity increse 
        vx = v * Math.cos(angle)
        vy = v * Math.sin(angle)

    }
    let aidelay = 0.3 ; 
    aipaddle.style.top = aipaddle.offsetTop + (ball.offsetTop - aipaddle.offsetTop - aipaddle.offsetHeight/2) * aidelay + "px"

    ball.style.left = ball.offsetLeft + vx + "px";
    ball.style.top = ball.offsetTop + vy + "px";
    if(wpressed && userpaddle.offsetTop > 55){
        userpaddle.style.top = userpaddle.offsetTop - 5 + "px";
    }
    if(spressed && userpaddle.offsetTop < gamebox.offsetHeight 
        - userpaddle.offsetHeight + 45){
        userpaddle.style.top = userpaddle.offsetTop + 5 + "px";
    }
    

    requestAnimationFrame(gameloop);
}
gameloop()
