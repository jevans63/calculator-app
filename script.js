const display = document.querySelector(".display");
var num = null;
var temp;
var oper;
var result;

//
function displayUpdate(value){
    if(num == null)num = value;
    else num += value;
    display.innerHTML = num;
}

//
function operator(value){
    temp = parseFloat(display.innerHTML);
    oper = value;
    num = null;
    display.innerHTML = oper;
}

//
function equals(){
    num = parseFloat(display.innerHTML); 
    ////////////////////////////
    if(oper == '+') result = temp + num;
    if(oper == '-') result = temp - num;
    if(oper == '*') result = temp * num;
    if(oper == '/') result = temp / num;
    ////////////////////////////
    num = temp;
    display.innerHTML = result;
}