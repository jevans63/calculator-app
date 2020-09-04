const display = document.querySelector(".display");
var num = " ";
function displayUpdate(value){
    num += value;
    display.innerHTML = num;
}