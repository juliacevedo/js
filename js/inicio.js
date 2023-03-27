let urname = prompt("What's your name?") 

//1st inner interaction
let div = document.getElementById ("app")
div.innerHTML= `<h1>Welcome to a silly site, ${urname}!</h1>`
document.body.appendChild(div)

//numbers and calculations
let a = Number
let b = Number

const suma = a + b
const resta = a - b
const producto = a * b
const promedio = ( a + b ) / 2
const porcentaje = Promedio * 100

//Calculator?
let screen = document.getElementById('screen');
const buttons = document.querySelectorAll("#buttons a");
 
for (const button of buttons) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
 
        if (e.target.dataset.key == 'equal') {
            screen.textContent = eval(screen.textContent);
            if (screen.textContent.length > 8) {
                screen.textContent = eval(screen.textContent).toFixed(8);
            }
        } else if (e.target.dataset.key == 'clear') {
            screen.textContent = '';
        } else {
            screen.textContent = screen.textContent + e.target.dataset.key;
        }   
    });
}
