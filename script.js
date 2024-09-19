var mode = document.getElementById(center-button)
mode.innerHTML ='Night-mode';
 var changecolor=document.getElementById(center-button).addEventListener('click' , function(){

if(document.body.style.background === 'black'){
    document.body.style.background ='white';
    mode.style.backgroundColor ='black';
    mode.style.color ='white';
    mode.innerHTML = 'Night';
}
else {
    document.body.style.backgroundColor = 'black';
    mode.style.backgroundColor = 'white';
    mode.style.color = 'black';
    mode.innerHTML = 'Day';
}

})