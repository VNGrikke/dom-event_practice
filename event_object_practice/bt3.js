let button = document.getElementById('button');
let div1 = document.getElementById('div1');
let div2   = document.getElementById('div2');
let input = document.getElementById('input');
function displayInput(){
    div1.innerText = 'cách 1:' + document.getElementById('input').value;
}
button.onclick = function(){
    div2.innerText = 'cách 2:' + document.getElementById('input').value;
}