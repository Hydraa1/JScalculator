let one = parseFloat(prompt(""));
let two = parseFloat(prompt(""));
let num1 = document.getElementById('span1').textContent=one;
let num2 = document.getElementById('span2').textContent=two;
let sum = document.getElementById("sum");
let num;
// let numm = '';
// let nuum = '';

function add(){
    num = num1 + num2;
    sum.textContent = "Sum: " + num;
}
function sub(){
    num = num1 - num2;
    sum.textContent = "Sum: " + num;
}
function mult(){
    num = num1 * num2;
    sum.textContent = "Sum: " + num;
}
function div(){
    num = num1 / num2;
    sum.textContent = "Sum: " + num;
}
function cler(){
    sum.textContent = "Sum: ";
}
