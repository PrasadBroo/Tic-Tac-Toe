const boxes = document.querySelectorAll(".same ");
const hh3 = document.querySelectorAll(".same h3");
const playerMsg = document.querySelector(".p");
const botMsg = document.querySelector(".b");
const playerName = document.querySelector(".pname");



let userPlayed = false;
let userChoice,botChoice;
let userName = prompt("Your Good Name?");
let choices = ["X","O"];


window.onload = function (){
    nameChanger();
    randomChoice();
    choiceMaker();
    mainBoss();
}


function nameChanger(){
    if(userName!=""){
        playerName.innerHTML=userName;
    }
    else{
        playerName.innerHTML="Selfish";
    }
}



function randomChoice(){
    let rand = Math.floor(Math.random()*choices.length);
    return userChoice=choices[rand];
}


function choiceMaker(){
    if(randomChoice()=="O"){
        botChoice="X";
        playerMsg.innerHTML="Yours "+userChoice;
        botMsg.innerHTML="Player "+botChoice;
    }
    else{
        botChoice="O";
        playerMsg.innerHTML="Yours "+userChoice;
        botMsg.innerHTML="Player "+botChoice;
    }
}



function mainBoss(){
    for(let i =0;i<boxes.length;i++){
        boxes[i].addEventListener("click",function(){
            if(!userPlayed && hh3[i].innerHTML==""){
                hh3[i].innerHTML=userChoice;
                userPlayed=true;
            }
            else if(userPlayed && hh3[i].innerHTML==""){
                hh3[i].innerHTML=botChoice;
                userPlayed=false;
            }
            
            winCheckX()
            winCheckO()
            checkDraw()

        });
    }
}


function winCheckX(){
    if(hh3[0].innerHTML=="X"  && hh3[1].innerHTML=="X" && hh3[2].innerHTML=="X"){
        setTimeout(()=>{alert("X"+" Win");ohGod()},50);
        return  true;
    }
    else if(hh3[3].innerHTML=="X"  && hh3[4].innerHTML=="X" && hh3[5].innerHTML=="X"){
        setTimeout(()=>{alert("X"+" Win");ohGod()},50);
        return  true;
    }
    else if(hh3[6].innerHTML=="X"  && hh3[7].innerHTML=="X" && hh3[8].innerHTML=="X"){
        setTimeout(()=>{alert("X"+" Win");ohGod()},50);
        return  true;
    }
    else if(hh3[0].innerHTML=="X"  && hh3[3].innerHTML=="X" && hh3[6].innerHTML=="X"){
        setTimeout(()=>{alert("X"+" Win");ohGod()},50);
        return  true;
    }
    else if(hh3[1].innerHTML=="X"  && hh3[4].innerHTML=="X" && hh3[7].innerHTML=="X"){
        setTimeout(()=>{alert("X"+" Win");ohGod()},50);
        return  true;
    }
    else if(hh3[2].innerHTML=="X"  && hh3[5].innerHTML=="X" && hh3[8].innerHTML=="X"){
        setTimeout(()=>{alert("X"+" Win");ohGod()},50);
        return  true;
    }
    else if(hh3[0].innerHTML=="X"  && hh3[4].innerHTML=="X" && hh3[8].innerHTML=="X"){
        setTimeout(()=>{alert("X"+" Win");ohGod()},50);
        return  true;
    }
    else if(hh3[2].innerHTML=="X"  && hh3[4].innerHTML=="X" && hh3[6].innerHTML=="X"){
        setTimeout(()=>{alert("X"+" Win");ohGod()},50);
        return  true;
    }
    else{
        return false;
    }
}

function winCheckO(){
    if(hh3[0].innerHTML=="O"  && hh3[1].innerHTML=="O" && hh3[2].innerHTML=="O"){
        setTimeout(()=>{alert("O"+" Win");ohGod()},50);
        return true;
    }
    else if(hh3[3].innerHTML=="O"  && hh3[4].innerHTML=="O" && hh3[5].innerHTML=="O"){
        setTimeout(()=>{alert("O"+" Win");ohGod()},50);
        return true;
    }
    else if(hh3[6].innerHTML=="O"  && hh3[7].innerHTML=="O" && hh3[8].innerHTML=="O"){
        setTimeout(()=>{alert("O"+" Win");ohGod()},50);
        return  true;
    }
    else if(hh3[0].innerHTML=="O"  && hh3[3].innerHTML=="O" && hh3[6].innerHTML=="O"){
        setTimeout(()=>{alert("O"+" Win");ohGod()},50);
        return  true;
    }
    else if(hh3[1].innerHTML=="O"  && hh3[4].innerHTML=="O" && hh3[7].innerHTML=="O"){
        setTimeout(()=>{alert("O"+" Win");ohGod()},50);
        return  true;
    }
    else if(hh3[2].innerHTML=="O"  && hh3[5].innerHTML=="O" && hh3[8].innerHTML=="O"){
        setTimeout(()=>{alert("O"+" Win");ohGod()},50);
        return  true;
    }
    else if(hh3[0].innerHTML=="O"  && hh3[4].innerHTML=="O" && hh3[8].innerHTML=="O"){
        setTimeout(()=>{alert("O"+" Win");ohGod()},50);
        return  true;
    }
    else if(hh3[2].innerHTML=="O"  && hh3[4].innerHTML=="O" && hh3[6].innerHTML=="O"){
        setTimeout(()=>{alert("O"+" Win");ohGod()},50);
        return  true;
    }
    else{
        return false;
    }
}


function checkDraw(){
    
    if(hh3[0].innerHTML!="" && hh3[1].innerHTML!="" && hh3[2].innerHTML!="" && hh3[3].innerHTML!="" && hh3[4].innerHTML!="" && hh3[5].innerHTML!="" && hh3[6].innerHTML!="" && hh3[7].innerHTML!="" && hh3[8].innerHTML!=""){
        if(!winCheckX() && !winCheckO()){
            setTimeout(()=>{alert("Its draw");ohGod();},50);
        }
        
    } 
}

function ohGod(){
    hh3[0].innerHTML="";
    hh3[1].innerHTML="";
    hh3[2].innerHTML="";
    hh3[3].innerHTML=""; 
    hh3[4].innerHTML=""; 
    hh3[5].innerHTML=""; 
    hh3[6].innerHTML=""; 
    hh3[7].innerHTML=""; 
    hh3[8].innerHTML="";
    randomChoice();
    choiceMaker();
    userPlayed=false;

}