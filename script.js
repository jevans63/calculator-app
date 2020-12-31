const display = document.querySelector(".display");

////////////////////////////////////////////////////////////////
var num = null;
var submit = false;
var decimal = false;
var temp, oper, result;

//
function displayUpdate(value){
    if(value == "." && decimal){
        num = "error";
    } 
    if(num == null) num = value;
    else if(!submit) num += value;
    display.innerHTML = num;
    if(value == "." && !decimal){
        decimal = true;
    } 
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
    if(!submit){ 
        num = parseFloat(display.innerHTML); 
        submit = true; 
    }
    else{
        temp = parseFloat(display.innerHTML); 
    }

    if(oper == '+') result = temp + num;
    if(oper == '-') result = temp - num;
    if(oper == '*') result = temp * num;
    if(oper == '/') result = temp / num;

    display.innerHTML = result;
}
////////////////////////////////////////////////////////////////