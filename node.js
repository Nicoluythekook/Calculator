
let a = '';  // first number
let b = '';  // second number
let sign = '';  //знак
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/',]

// экран
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = '';       // first number and second
    b = '';       // second number
    sign = '';    // знак
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll();

document.querySelector('.buttons').onclick = (events) => {

// нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
//нажата кнопка ClearALL ac
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
// получаю нажатую кнопку

    const key = events.target.textContent;

//




}
