const display = document.querySelector(".display");
var num = null;
var temp;
var oper;
function displayUpdate(value){
    if(num == null)
    num = parseInt(value);
    else num += parseInt(value);
    display.innerHTML = num;
}
function operator(value){
    temp = parseInt(display.innerHTML);
    if(value == '+') oper = value;
    num = null;
    display.innerHTML = oper;
}
function equals(){
    num =  parseInt(display.innerHTML);
    if(oper == '+') num += temp;
    display.innerHTML = num;
}