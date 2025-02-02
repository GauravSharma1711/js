const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const yourscore = document.querySelector('.yourscoreno');
const compscore = document.querySelector('.compscoreno');
const message  = document.querySelector('.message');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
     const usermove =btn.innerText.toLowerCase(); ;
     const compmove = gencompmove().toLowerCase();;

     if(usermove === compmove){
        drawfun();
     }else if(usermove=="rock" && compmove=="scissors" 
        || usermove=="paper" && compmove=="rock" 
        ||  usermove=="scissors" && compmove=="paper"){
youwinfun();
     }else{
        compwinfun();
     }
     
     

    })
})


function gencompmove(){
 const randomidx  = Math.floor(Math.random()*btns.length);
 return btns[randomidx].innerText;
 
}

function drawfun(){
    message.innerText="Its a draw"
}

function youwinfun(){
    message.innerText="YOU WIN"
    message.style.backgroundColor="green"
 let curval =   parseInt(yourscore.innerText);
 yourscore.innerText=curval+1;

}

function compwinfun(){
       message.innerText="COMP WIN"
  message.style.backgroundColor="red"
  let curval =   parseInt(compscore.innerText);
  compscore.innerText=curval+1;
}