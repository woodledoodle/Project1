

document.querySelector('#square1').addEventListener('click', function() {
  document.getElementsByClassName('square11')[0].style.backgroundColor = 'lightcoral'
   

   
    
});

document.querySelector('#square2').addEventListener('click', function() {
    console.log("youve been clicked")
});

document.querySelector('#square3').addEventListener('click', function() {
    console.log("youve been clicked")
});

document.querySelector('#square4').addEventListener('click', function() {
    console.log("youve been clicked")
});
//testtest

function sequence(){
    document.getElementsByClassName('square11')[0].style.backgroundColor = 'lightcoral'
    setTimeout(function(){
        document.getElementsByClassName('square11')[0].style.backgroundColor = 'red'
    },2000)

    document.getElementsByClassName('square22')[0].style.backgroundColor = 'lightblue'
    setTimeout(function(){
        document.getElementsByClassName('square22')[0].style.backgroundColor = 'blue'
    },2000)

//     document.getElementsByClassName('square33')[0].style.backgroundColor = 'lightcoral'

//     document.getElementsByClassName('square44')[0].style.backgroundColor = 'lightcoral'
}