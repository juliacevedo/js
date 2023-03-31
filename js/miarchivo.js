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
    if ((pay !="")){
        waste()
    } else {
        alert("ERROR: The data given is not valid. Recharge the page and try again. We were asking for a number.")
    }
} 

//separated this if so we don't have nested work
function waste(){
    let waste = Number(prompt("How much of that do you use? I'm asking for numbers..."));
    if ((waste !="")){
        alert("Neat! Do me a favor and go to Ctrl+Shift+I or go to the developer tools and then direct yourself to the console there. We already have data waiting for you!")
    } else {
        alert("ERROR: The data given is not valid. Recharge the page and try again. We were asking for a number.")
    }  
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
    console.log("Soo, you put numbers for us and in a cuple seconds I will tell you...");
    for (let i = 1; i <= 3; i++) {
        console.log(i);
    }    
    goodornot();
    evenornot();
}

//we are using the for here? i think
function goodornot(){
    let total =  pay - waste ;
    for (let i = 1; i <= 10; i++) {
        let resultado = total * i ;
        console.log(total +" X "+ i +" = "+ resultado);
    }    
}

// program to check if the number is even or odd
function evenornot(){
    const result = (number % 2  == 0) ? "even" : "odd";
    console.log(`The number is ${result}.`);
}
