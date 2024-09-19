// var mode = document.getElementById(center-button)
// mode.innerHTML ='Night-mode';
//  var changecolor=document.getElementById(center-button).addEventListener('onclick' , function(){

// if(document.body.style.background === 'black'){
//     document.body.style.background ='white';
//     mode.style.backgroundColor ='black';
//     mode.style.color ='white';
//     mode.innerHTML = 'Night';
// }
// else {
//     document.body.style.backgroundColor = 'black';
//     mode.style.backgroundColor = 'white';
//     mode.style.color = 'black';
//     mode.innerHTML = 'Day';
// }

// })
var button = document.getElementById('btn');
button.innerHTML = 'Night';
var colorchnager =  document.getElementById('btn').addEventListener('click', function(){
    if(document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
        button.innerHTML = 'Night';
    } else {
        document.body.style.backgroundColor = 'black';
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
        button.innerHTML = 'Day';
    }
})