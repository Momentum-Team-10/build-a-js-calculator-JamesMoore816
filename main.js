let display = document.getElementById('display');

let b1 = document.getElementById('1');
let b2 = document.getElementById('2');
let b3 = document.getElementById('3');
let b4 = document.getElementById('4');
let b5 = document.getElementById('5');
let b6 = document.getElementById('6');
let b7 = document.getElementById('7');
let b8 = document.getElementById('8');
let b9 = document.getElementById('9');
let b0 = document.getElementById('0');
let b_add = document.getElementById('add');
let b_subtract = document.getElementById('subtract');
let b_multiply = document.getElementById('multiply');
let b_divide = document.getElementById('divide');
let b_decimal = document.getElementById('decimal');
let b_equals = document.getElementById('equals');
let b_C = document.getElementById('C');

b1.addEventListener('click', () => {
    display.innerText += b1.innerText
})
b2.addEventListener('click', () => {
    display.innerText += b2.innerText
})
b3.addEventListener('click', () => {
    display.innerText += b3.innerText
})
b4.addEventListener('click', () => {
    display.innerText += b4.innerText
})
b5.addEventListener('click', () => {
    display.innerText += b5.innerText
})
b6.addEventListener('click', () => {
    display.innerText += b6.innerText
})
b7.addEventListener('click', () => {
    display.innerText += b7.innerText
})
b8.addEventListener('click', () => {
    display.innerText += b8.innerText
})
b9.addEventListener('click', () => {
    display.innerText += b9.innerText
})
b0.addEventListener('click', () => {
    display.innerText += b0.innerText
})
b_decimal.addEventListener('click', () => {
    if (display.innerText.includes('.') === false) { display.innerText += b_decimal.innerText }
})
b_add.addEventListener('click', () => {
    display.innerText += b_add.innerText
})
b_subtract.addEventListener('click', () => {
    display.innerText += b_subtract.innerText
})
b_divide.addEventListener('click', () => {
    display.innerText += b_divide.innerText
})
b_multiply.addEventListener('click', () => {
    display.innerText += '*'
})
b_C.addEventListener('click', () => {
    display.innerText = ''
})

b_equals.addEventListener('click', () => {
    display.innerText = eval(display.innerText)
})