let input = document.getElementById('input');
let button = document.getElementById('add');
let ul = document.getElementById('ul');
let todoListDatabase = [];
function selected() {
    input.style.backgroundColor = "white";
}
button.onclick = function () {
    let inputValue = input.value;
    todoListDatabase.push(inputValue);
    ul.innerHTML = "";
    for (let i = 0; i < todoListDatabase.length; i++) {
        let li = document.createElement('li');
        li.textContent = todoListDatabase[i];
        ul.appendChild(li);
    }
    input.value = "";
    selected();
};