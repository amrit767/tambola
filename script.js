const mylabel = document.getElementById("mylabel");
const mybutton = document.getElementById("mybutton");
const min = 1;
const max = 100;
let randomnum;

mybutton.onclick = function(){
    randomnum = Math.floor(Math.random() * max) + min;
    mylabel.textContent = randomnum;
}