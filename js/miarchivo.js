//data
let urname = prompt("What's your name?");
let pay = Number(prompt("How much money do you have?"));
let waste = 0

const persona1 = {
    name : urname ,
    wins: pay ,
    wastes: waste ,
}

const localsave = (key, value) => { localStorage.setItem(key, value) };

localsave("localuser",persona1)

//Forms auto reboot not allowed + getting the info out of them and saving it
let formsnr = document.getElementById("form1");
formsnr.addEventListener("submit", formvalidation);

function formvalidation(e){
    e.preventDefault();
    console.log("The form was sent!");    
    let forminfo1 = e.target
    localsave("firstwaste",forminfo1)
    let pname = forminfo1.children[1].value
    let waste = forminfo1.children[0].value
    let total = pay - waste
    let drip = document.getElementById("card2") 
    drip.className = "card2"
    drip.innerHTML = `<p>${pname}: ${waste}<p>`
    let driped = document.getElementById("card1.2") 
    driped.className = "card1"
    driped.innerHTML = `<p>The ammount now: ${total}<p>`
}

//we are using the 'for' here? i think
function goodornot(){
    const array = [];
    for (let i = 1; i <= 10; i++) {
        let result = pay + i*1000 ;
        let interesting = (`${pay} + ${i*1000} = ${result}`)
        array.push(interesting)
    } 
    const bigplus = array.reduce((result, pay) => result + pay, 0)
    let annoy = document.getElementById("card3") 
    annoy.className = "card3"
    annoy.innerHTML = `<h5>I mean you could go up to a lot more... 
    Like ${array} 
    You could even go up to,${bigplus},if you were lucky enough.
    Not that in Argentina going up by thousands makes a big difference... 
    But well I can't jugde you for that. I would do the same. 
    That chocolate was really begging to be my food. I get it. A girl needs to eat.<h5>`
}

//making popup work)?
document.getElementById("popup").onclick = function() {card3()};

function card3() {
  document.getElementById("card3").classList.toggle("show");
  goodornot()
}


// program to check if the number is even or odd + change of image?? is not working currently
function evenornot(){
    let result = (pay % 2  == 0) ? "even" : "odd";
    console.log(`The number is ${result}. But it could be not. You never know. Just saying.`);
    result === "even" ? document.getElementById("changeimage").src = "media/g1195.png": document.getElementById("changeimage").src = "media/g1073.png";
}

function list(d1,d2,d3){
    console.log(d1,", ",d2," and ",d3)
}

//putting data they asking for in the console, the cicle function GOES HEREEEEEEEEE
function consolefirst(){ 
    alert("Neat! Do me a favor and go to Ctrl+Shift+I or go to the developer tools and then direct yourself to the console there. We already have data waiting for you!")
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
}

function innerfirst(){
    let drip = document.getElementById("card1.1") 
    drip.className = "card1"
    drip.innerHTML = `<h6>Initial ammount: ${pay}</h6>`
    consolefirst();
    evenornot();
}

//Asking for more data & firecting to console so they can see their results
function prompts2(){
    pay !="" ? innerfirst() : alert("ERROR: The data given is not valid. Recharge the page and try again. We were asking for a number.")
}

//initial if
urname !="" ? prompts2() : alert("ERROR: The name given is not valid. Recharge the page and try again.")
