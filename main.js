const boxes = document.querySelectorAll(".same ");
const hh3 = document.querySelectorAll(".same h3");
const playerMsg = document.querySelector(".p");
const botMsg = document.querySelector(".b");
const playerName = document.querySelector(".pname");



let userPlayed = false;
let userChoice,botChoice;
let userName = prompt("Your Good Name?");
let choices = ["X","O"];
let winList = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[1, 4, 7],[2, 5, 8],[3, 6, 9],[1, 5, 9],[3, 5, 7]];

window.onload = function(){
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
        botMsg.innerHTML="Bots "+botChoice;
    }
    else{
        botChoice="O";
        playerMsg.innerHTML="Yours "+userChoice;
        botMsg.innerHTML="Bots "+botChoice;
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
            else{
                alert("Opps")
            }
            winCheck();
            checkDraw()
        });
    }
}


function winCheck(){
    if(hh3[0].innerHTML==userChoice  && hh3[1].innerHTML==userChoice && hh3[2].innerHTML==userChoice){
        setTimeout(()=>{alert(userChoice+" Win")},50);
        return true;
    }
    else if(hh3[3].innerHTML==userChoice  && hh3[4].innerHTML==userChoice && hh3[5].innerHTML==userChoice){
        setTimeout(()=>{alert(userChoice+" Win")},50);
        return true;
    }
    else if(hh3[6].innerHTML==userChoice  && hh3[7].innerHTML==userChoice && hh3[8].innerHTML==userChoice){
        setTimeout(()=>{alert(userChoice+" Win")},50);
        return true;
    }
    else if(hh3[0].innerHTML==userChoice  && hh3[3].innerHTML==userChoice && hh3[6].innerHTML==userChoice){
        setTimeout(()=>{alert(userChoice+" Win")},50);
        return true;
    }
    else if(hh3[1].innerHTML==userChoice  && hh3[4].innerHTML==userChoice && hh3[7].innerHTML==userChoice){
        setTimeout(()=>{alert(userChoice+" Win")},50);
        return true;
    }
    else if(hh3[2].innerHTML==userChoice  && hh3[5].innerHTML==userChoice && hh3[8].innerHTML==userChoice){
        setTimeout(()=>{alert(userChoice+" Win")},50);
        return true;
    }
    else if(hh3[0].innerHTML==userChoice  && hh3[5].innerHTML==userChoice && hh3[8].innerHTML==userChoice){
        setTimeout(()=>{alert(userChoice+" Win")},50);
        return true;
    }
    else if(hh3[2].innerHTML==userChoice  && hh3[5].innerHTML==userChoice && hh3[6].innerHTML==userChoice){
        setTimeout(()=>{alert(userChoice+" Win")},50);
        return true;
    }
    else if(hh3[0].innerHTML==botChoice  && hh3[1].innerHTML==botChoice && hh3[2].innerHTML==botChoice){
        setTimeout(()=>{alert(botChoice+" Win")},50);
        return true;
    }
    else if(hh3[3].innerHTML==botChoice  && hh3[4].innerHTML==botChoice && hh3[5].innerHTML==botChoice){
        setTimeout(()=>{alert(botChoice+" Win")},50);
        return true;
    }
    else if(hh3[6].innerHTML==botChoice  && hh3[7].innerHTML==botChoice && hh3[8].innerHTML==botChoice){
        setTimeout(()=>{alert(botChoice+" Win")},50);
        return true;
    }
    else if(hh3[0].innerHTML==botChoice  && hh3[3].innerHTML==botChoice && hh3[6].innerHTML==botChoice){
        setTimeout(()=>{alert(botChoice+" Win")},50);
        return true;
    }
    else if(hh3[1].innerHTML==botChoice  && hh3[4].innerHTML==botChoice && hh3[7].innerHTML==botChoice){
        setTimeout(()=>{alert(botChoice+" Win")},50);
        return true;
    }
    else if(hh3[2].innerHTML==botChoice  && hh3[5].innerHTML==botChoice && hh3[8].innerHTML==botChoice){
        setTimeout(()=>{alert(botChoice+" Win")},50);
        return true;
    }
    else if(hh3[0].innerHTML==botChoice  && hh3[5].innerHTML==botChoice && hh3[8].innerHTML==botChoice){
        setTimeout(()=>{alert(botChoice+" Win")},50);
        return true;
    }
    else if(hh3[2].innerHTML==botChoice  && hh3[5].innerHTML==botChoice && hh3[6].innerHTML==botChoice){
        setTimeout(()=>{alert(botChoice+" Win")},50);
        return true;
    }
    else{
        return false;
    }
}


function checkDraw(){
    
    if(hh3[0].innerHTML!="" && hh3[1].innerHTML!="" && hh3[2].innerHTML!="" && hh3[3].innerHTML!="" && hh3[4].innerHTML!="" && hh3[5].innerHTML!="" && hh3[6].innerHTML!="" && hh3[7].innerHTML!="" && hh3[8].innerHTML!=""){
        if(!winCheck){
            alert("Its draw");
        }
        
    } 
}
    

