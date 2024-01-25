let input = document.getElementById('input');
let button = document.getElementById("button");
input.style.borderRadius = '13px';
button.style.borderRadius = '4px';
button.style.padding = '4px 16px';
button.style.color = 'white';
button.style.backgroundColor = 'green';
button.style.border = '1px solid transparent';
button.onclick = function(){
    let answer =  document.getElementById('input').value;
    if(answer.length > 10) alert('không hợp lệ');
    else alert('thành công');
}