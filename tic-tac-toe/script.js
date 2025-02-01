let boxes = document.querySelectorAll(".btn")
let resetbtn = document.querySelector(".reset")
let newgamebtn = document.querySelector("#newbtn")
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;


const winPatterns = [
    // Horizontal Wins
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Vertical Wins
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonal Wins
    [0, 4, 8],
    [2, 4, 6]
];

const resetgame = ()=>{
    enableboxes();
    turnO=true;
    boxes.forEach((box)=>{
        box.innerText="";
    })
    msgcontainer.classList.add('hide');
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(box.innerHTML==""){
            if(turnO){
                box.innerHTML='O'
            }else{
                 box.innerHTML='X'
            }
            turnO=!turnO;
        }
        checkwinner();
    });
});

const enableboxes = ()=>{
    for(let box of boxes){
box.disabled = false;
    }
}

const disableboxes = ()=>{
    for(let box of boxes){
box.disabled = true;
    }
}


const checkwinner  = () => {
for(let pattern of winPatterns){
    
    
 let pos1val = boxes[pattern[0]].innerText;
 let pos2val = boxes[pattern[1]].innerText;
 let pos3val = boxes[pattern[2]].innerText;
 console.log(pos1val,pos2val,pos3val);
 

   if(pos1val !== "" && pos1val === pos2val
     && pos2val === pos3val) {
        console.log("winner");
        showwinner(pos1val);

 }
}
}

const showwinner = (winner)=>{
    msg.innerText = `${winner} is winner`
    msgcontainer.classList.remove('hide');
disableboxes();
}


resetbtn.addEventListener('click',resetgame);



newgamebtn.addEventListener('click',resetgame);

