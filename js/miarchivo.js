//data
let urname = prompt("What's your name?");
let pay = Number(prompt("How much money do you have?"));
let waste = Number(prompt("How much of that do you use? I'm asking for numbers..."));
var total =  pay - waste ;

const persona1 = {
    name : urname ,
    wins: pay ,
    wastes: waste ,
}

//Forms auto reboot not allowed + getting the info out of them and saving it
let formsnr = document.getElementById("form1");
formsnr.addEventListener("submit", formvalidation);

function formvalidation(e){
    e.preventDefault();
    console.log("The form was sent!");    
    let forminfo1 = e.target
    let payment = forminfo1.children[0].value
    let importance = forminfo1.children[1].value
    let note = forminfo1.children[2].value
}

//we are using the 'for' here? i think
function goodornot(){
    console.log("I mean you could go up to a lot more... Like")
    const array = [];
    for (let i = 1; i <= 10; i++) {
        let result = total + i*1000 ;
        array.push(result)
        console.log(`${total} + ${i*1000} = ${result}`);
    } 
    const bigplus = array.reduce((result, total) => result + total, 0)
    console.log("You could even go up to",bigplus,"if you were lucky enough.")
    console.log("Not that in Argentina going up by thousands makes a big difference...")   
    console.log("But well I can't jugde you for that. I would do the same. That chocolate was really begging to be my food. I get it. A girl needs to eat.") 
}

// program to check if the number is even or odd + change of image?? is not working currently
function evenornot(){
    let result = (total % 2  == 0) ? "even" : "odd";
    console.log(`The number is ${result}. But it could be not. You never know. Just saying.`);
    if (result === "even"){
        document.getElementById("changeimage").src = "media/g1195.png";
    } else {
        document.getElementById("changeimage").src = "media/g1073.png";
    }
}

function list(d1,d2,d3){
    console.log(d1,", ",d2," and ",d3)
}

//putting data they asking for in the console, the cicle function GOES HEREEEEEEEEE
function consolefirst(){ 
    console.log(`Welcome to the initial functions of this site, ${urname}!`);
    let names = [urname,"Richard","Helena","Victoria"];
    names.splice(2,3);
    console.log( names.join(", meet "));
    console.log("That's the name this site won after I didn't know where to use arrays.");
    console.log("This is the information you gave us:");
    list(persona1.name,persona1.wins,persona1.wastes)
    console.log("Soo, you put numbers for us and in a couple seconds I will tell you...");
    let numbers = [1,2,3];
    numbers.forEach( (num)=> {
        console.log(num)
    } )       
    goodornot();
    evenornot();
}

//separated this if so we don't have nested work
function wasted(){
    if ((waste !="")){
        alert("Neat! Do me a favor and go to Ctrl+Shift+I or go to the developer tools and then direct yourself to the console there. We already have data waiting for you!")
        consolefirst();
    } else {
        alert("ERROR: The data given is not valid. Recharge the page and try again. We were asking for a number.")
    }  
}

//Asking for more data & firecting to console so they can see their results
function prompts2(){
    if ((pay !="")){
        wasted()
    } else {
        alert("ERROR: The data given is not valid. Recharge the page and try again. We were asking for a number.")
    }
}

//initial if
if (urname !="") {
    prompts2();
} else {
    alert("ERROR: The name given is not valid. Recharge the page and try again.")
}
