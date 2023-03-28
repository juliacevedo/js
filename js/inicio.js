let urname = prompt("What's your name?") 

//1st inner interaction
let div = document.getElementById ("app")
div.innerHTML= `<h1>Welcome to a silly site, ${urname}!</h1>`
document.body.appendChild(div)

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('menu_on').addEventListener('click', ()=>{
        var elementos = document.querySelectorAll('body'); 
        elementos.forEach(function(e) {
           e.classList.toggle('visible_menu')
    })})
});

//numbers and calculations
let a = Number
let b = Number

const suma = a + b
const resta = a - b
const producto = a * b
const promedio = ( a + b ) / 2
const porcentaje = Promedio * 100

//Button with reaction + 1st event // vamos a usar esto para hacer que vea si el numero que sale en calculadora es par o no, al principio va a pedir un numero al usuario y le va a dar resultados nomas
function UGH () {
    let parrafo = document.getElementById ("parrafo")
    parrafo.innerHTML = "<h2>UGH</h2>"
    document.body.appendChild(parrafo)
    parrafo.addEventListener("click", Respuestaclick)    
}

UGH ()

function Respuestaclick (){  
    parrafo.innerHTML = "<h3>Thank You...</h3>" 
    parrafo.addEventListener("click", Respuestaclick2)
}

function Respuestaclick2 (){  
    parrafo.innerHTML = "<h3>You are very welcome!</h3>" 
    parrafo.addEventListener("click", Respuestaclick3)
}

function Respuestaclick3() {
    Swal.fire('Very welcome!!!!:))')
}

// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

// ternary operator
const result = (number % 2  == 0) ? "even" : "odd";

// display the result
console.log(`The number is ${result}.`);