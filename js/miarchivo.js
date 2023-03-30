let urname = prompt("What's your name?") 

//1st inner interaction
let div = document.getElementById ("app")
div.innerHTML= `<h1>Welcome to a silly site, ${urname}!</h1>`
document.body.appendChild(div)

//Asking for more data & firecting to console so they can see their results



// program to check if the number is even or odd
const number = prompt("Enter a number: ");

// ternary operator
const result = (number % 2  == 0) ? "even" : "odd";

// display the result
console.log(`The number is ${result}.`);