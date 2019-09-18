//keeps track of computer light sequence
let sequence = [];
//keep track of player sequence
let playerSequence = [];
let turn;
let compTurn;
let win;
const startButton = document.querySelector('#start')
let rounds =5;
let response;

startButton.addEventListener('click', function(event){
    if (start) {
        play();
    }
    play();

});
function play(){
    win=false;
    let gameRound =1;
    gameOver = false;
    sequence = [];
    playerSequence = [];
    while (!gameOver){
        computerPlay(gameRound)
       
        if (response === 'no'){
            gameOver = true;
        }
        if (gameRound >= rounds){
            gameOver = true;
        }
        gameRound ++;
        console.log(gameRound)
        response= prompt('do you want to continue? yes/no')
    } 
}

var randomSquare = document.querySelectorAll('.square')
function computerLightSquare(){
    let index = Math.floor(Math.random() * 4)
    randomSquare[index].style.opacity = .2;
    setTimeout(function(){
        randomSquare[index].style.opacity = 1;    
    },500)

}
function computerPlay(numPlay){
    
    if (numPlay > 0){
        computerLightSquare();
        setTimeout(function(){
            computerPlay(numPlay -1)  
        },1000)
    }
        
}



document.querySelector('#square1').addEventListener('click', function() {
  document.getElementsByClassName('square11')[0].style.backgroundColor = 'lightcoral'
 
});

document.querySelector('#square2').addEventListener('click', function() {
    document.getElementsByClassName('square22')[0].style.backgroundColor = 'lightblue'
});

document.querySelector('#square3').addEventListener('click', function() {
    document.getElementsByClassName('square33')[0].style.backgroundColor = 'lightgreen'
});

document.querySelector('#square4').addEventListener('click', function() {
    document.getElementsByClassName('square44')[0].style.backgroundColor = 'yellow'
});
//testtest

// function sequence(){
//     document.getElementsByClassName('square11')[0].style.backgroundColor = 'lightcoral'
//     setTimeout(function(){
//         document.getElementsByClassName('square11')[0].style.backgroundColor = 'red'
//     },2000)

//     document.getElementsByClassName('square22')[0].style.backgroundColor = 'lightblue'
//     setTimeout(function(){
//         document.getElementsByClassName('square22')[0].style.backgroundColor = 'blue'
//     },2000)

//     document.getElementsByClassName('square33')[0].style.backgroundColor = 'lightgreen'

//     document.getElementsByClassName('square44')[0].style.backgroundColor = 'yellow'
// }