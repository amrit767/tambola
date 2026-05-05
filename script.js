const mylabel = document.getElementById("mylabel");
const mybutton = document.getElementById("mybutton");

const mybutton2 = document.getElementById("mybutton2");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");

const mybutton3 = document.getElementById("mybutton3");
const mylabel4 = document.getElementById("mylabel4");
const mylabel5 = document.getElementById("mylabel5");
const mylabel6 = document.getElementById("mylabel6");

const min = 1;
const max = 100;

let randomnum;
let secondrandomnum;
let thirdrandomnum;
let forthrandomnum;
let fifthrandomnum;
let sixthrandomnum;

mybutton.onclick = function(){
    randomnum = Math.floor(Math.random() * max) + min;

    mylabel.textContent = randomnum;
  
}

mybutton2.onclick = function(){
    secondrandomnum = Math.floor(Math.random() * max) + min;
    thirdrandomnum = Math.floor(Math.random() * max) + min;

    mylabel2.textContent = secondrandomnum;
    mylabel3.textContent = thirdrandomnum;
}

mybutton3.onclick = function(){
    forthrandomnum = Math.floor(Math.random() * max) + min;
    fifthrandomnum = Math.floor(Math.random() * max) + min;
    sixthrandomnum = Math.floor(Math.random() * max) + min;

    mylabel4.textContent = forthrandomnum;
    mylabel5.textContent = fifthrandomnum;
    mylabel6.textContent = sixthrandomnum;
}