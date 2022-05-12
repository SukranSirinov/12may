let area =document.querySelector(".area");
let ball =document.querySelector(".ball");


window.addEventListener("keyup",function(e){
    if(e.key=="ArrowUp"){

    }
    if(e.key=="ArrowRight"){
       ball.style.left=Number(parseInt(ball.style.left)) + 5 +"px"
    }
    if(e.key=="ArrowLeft"){
        ball.style.right=Number(parseInt(ball.style.right))+5+"px"
    }
    if(e.key=="ArrowDown"){
        
    }
})