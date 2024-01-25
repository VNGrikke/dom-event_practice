let input1 = document.getElementById('input-1');
let input2 = document.getElementById('input-2');
let input3 = document.getElementById('input-3');
let input4 = document.getElementById('input-4');
let input5 = document.getElementById('input-5');
let input6 = document.getElementById('input-6');
let button = document.getElementById('button');
function displayInput(){
    let value1 = parseInt(input1.value) || 0;
    let value2 = parseInt(input2.value) || 0;
    input3.value = value1+value2;
}
button.onclick = function(){
    let value4 = parseInt(input4.value) || 0;
    let value5 = parseInt(input5.value) || 0;
    input6.value = value4+value5;
}

