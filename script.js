const display = document.querySelector(".display");
var num = null;
var temp;
var oper;
var result;
var submit = false;

////////////////////////////////////////////////////////////////

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

    if(!submit){ 
        num = parseFloat(display.innerHTML); 
        submit = true; 
    }

    else{
        temp = parseFloat(display.innerHTML); 
    }

    if(oper == '+') result = temp + num;

    if(oper == '-'){
        result = temp - num;
        //temp = result;
    } 

    if(oper == '*') result = temp * num;

    if(oper == '/'){
        result = temp / num;
        //temp = result;
    }

    display.innerHTML = result;
}

////////////////////////////////////////////////////////////////