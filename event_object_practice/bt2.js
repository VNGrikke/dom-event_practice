let button = document.getElementById('button');
button.style.backgroundColor = 'yellow';
button.style.border = '1px solid transparent';
button.style.borderRadius = '4px';
button.style.width = '48px';

let check = 0;
button.onclick = function(){
    check++;
    if(check%2===0){
        button.innerText = 'OFF';
        button.style.position = 'relative'
        button.style.left = '-3px'
    }else{
        button.innerText = 'ON';
        button.style.position = 'relative'
        button.style.left = '20px'
    }
}

