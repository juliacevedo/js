let urname = prompt("What's your name?") 

if (urname !="") {
    prompts2();
    inner1();
    consolefirst();
} else {
    alert("ERROR: The name given is not valid. Recharge the page and try again.")
}

//Asking for more data & firecting to console so they can see their results
function prompts2(){
    let pay = Number(prompt("How much money do you have?"));
}

//1st inner interaction
function inner1(){
    let div = document.getElementById ("app");
    div.innerHTML= `<h1>Welcome to a silly site, ${urname}!</h1>`;
    document.body.appendChild(div);
}

//putting data they asking for in the console, the cicle function GOES HEREEEEEEEEE
function consolefirst(){
    console.log(`Welcome to the initial functions of this site, ${urname}!`);
    
}

// program to check if the number is even or odd
function evenornot(){
    const number = prompt("Enter a number: ");
const result = (number % 2  == 0) ? "even" : "odd";
console.log(`The number is ${result}.`);
}
