//data
let urname = prompt("What's your name?");
let pay = Number(prompt("How much money do you have?"));
let waste = Number(prompt("How much of that do you use? I'm asking for numbers..."));
let total =  pay - waste ;

//initial if
if (urname !="") {
    prompts2();
    inner1();
} else {
    alert("ERROR: The name given is not valid. Recharge the page and try again.")
}

//1st inner interaction
function inner1(){
    let div = document.getElementById ("app");
    div.innerHTML= `<h1>Welcome to a silly site, ${urname}!</h1>`;
    document.body.appendChild(div);
}

//Asking for more data & firecting to console so they can see their results
function prompts2(){
    if ((pay !="")){
        wasted()
    } else {
        alert("ERROR: The data given is not valid. Recharge the page and try again. We were asking for a number.")
    }
}

//separated this if so we don't have nested work
function wasted(){
    if ((waste !="")){
        alert("Neat! Do me a favor and go to Ctrl+Shift+I or go to the developer tools and then direct yourself to the console there. We already have data waiting for you!")
        inner1();
        consolefirst();
    } else {
        alert("ERROR: The data given is not valid. Recharge the page and try again. We were asking for a number.")
    }  
}

//putting data they asking for in the console, the cicle function GOES HEREEEEEEEEE
function consolefirst(){
    console.log(`Welcome to the initial functions of this site, ${urname}!`);
    console.log("Soo, you put numbers for us and in a couple seconds I will tell you...");
    for (let i = 1; i <= 3; i++) {
        console.log(i);
    }    
    goodornot();
    evenornot();
}

//we are using the for here? i think
function goodornot(){
    if ((total > 1000 )){
        console.log("Well you doing better than other people... At least.")
    }else if ((total <= 1000 )){
        console.log("That's barely enough for buying EGGS, you doing ok there?")
    } else if ((total = 0)){
        console.log("Maybe think about saving more money...")
    } else ((total < 0)){
        console.log("YOU OK? Poverty is a thing... Not wasting more than you have sounds wise.")
    }
    if ((total <= 1000 )){
        console.log("That's barely enough for buying EGGS, you doing ok there?")
    }else if ((0 <= total)){
        console.log("YOU OK? Poverty is a thing... Maybe think about saving more money... Or not wasting more than you have.")
    } else{
        console.log()
    }
    console.log("I mean you could go up to a lot more... Like")
    for (let i = 0; i <= 10; i++) {
        let resultado = total + i*1000 ;
        console.log(total +" + "+ i*1000 +" = "+ resultado);
    } 
    console.log("Not that in Argentina going up by thousands makes a big difference...")   
    console.log("But well I can't jugde you for that. I would do the same. That chocolate was really begging to be my food. I get it. A girl needs to eat.") 
}

// program to check if the number is even or odd
function evenornot(){
    const result = (total % 2  == 0) ? "even" : "odd";
    console.log(`The number is ${result}. But it could be not. You never know. Just saying.`);
}
