//data
function login(showhide){
    if(showhide == "show"){
        document.getElementById('help').style.visibility="visible";
    }else if(showhide == "hide"){
        document.getElementById('help').style.visibility="hidden"; 
    }
}

const localsave = (key, value) => { localStorage.setItem(key, value) };
const sesionsave = (key, value) => { sessionStorage.setItem(key, value) };

//Forms auto reboot not allowed + getting the info out of them and saving it

fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Coderhouse',
            body: 'Post de prueba',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    
let formsnr = document.getElementById("form1");
formsnr.addEventListener("submit", formvalidation);

function formvalidation(e){
    e.preventDefault();
    console.log("The form was sent!");    
    let forminfo1 = e.target
    const input1JSON = JSON.stringify(forminfo1)
    localsave("input1",input1JSON)
    let shitty = document.getElementsByClassName("waste").valueAsNumber ;
    let wastename = forminfo1.children[1].value
    localsave("ws",shitty) 
    localsave("wsn",wastename)
    waste.push({lost: shitty, name: wastename})
    let wasted = waste.reduce((a, b) => a + b, 0);
    let total = pay - wasted
    let drip = document.getElementById("card2") 
    drip.className = "card2"
    drip.innerHTML = `<p>${wastename}: ${shitty}<p>`
    let driped = document.getElementById("card1.2") 
    driped.className = "card1"
    driped.innerHTML = `<p>The ammount now: ${total}<p>`
}

let formfooter = document.getElementById("form2");
formfooter.addEventListener("submit", formvalidation2);

function formvalidation2(e){
    e.preventDefault();
    console.log("The form was sent!"); 
    let forminfo2 = e.target
    const input2JSON = JSON.stringify(forminfo2)
    localsave("input2",input2JSON)
}

//we are using the 'for' here? i think
function goodornot(){
    const array = [];
    const array2 = []
    for (let i = 1; i <= 10; i++) {
        let result = parseFloat(pay + i*1000) ;
        let interesting = (`
        ${pay} + ${i*1000} = ${result}`)
        array.push(result)
        array2.push(interesting)
    } 
    const bigplus = array.reduce((result, pay) => result + pay, 0)
    let annoy = document.getElementById("card3") 
    annoy.className = "card3"
    annoy.innerHTML = `<h5>I mean you could go up to a lot more... </h5>
    <h5>Like ${array2}</h5>
    <h5> You could even go up to ${bigplus},if you were lucky enough.</h5>
    <h5>Not that in Argentina going up by thousands makes a big difference... </h5>
    <h5>But well I can't jugde you for that. I would do the same. </h5>
    <h5>That chocolate was really begging to be my food. I get it. A girl needs to eat.</h5>`
    document.body.appendChild(annoy);
}

const libreria = document.getElementById("changeimage")

libreria.addEventListener ("click", () =>{
    Toastify({
        text: `Welcome to the initial functions of this site, ${urname}!`,
        className: "toast",
        duration: 3000,
        destination: "https://github.com/juliacevedo/js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        offset: {
            x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function(){} // Callback after click
    }).showToast();
})

//making popup work)?
document.getElementById("popup").onclick = function() {cardthree()};

function cardthree() {
  document.getElementById("card3").classList.toggle("show");
  goodornot()
}


// hide the menu when a click event occurs outside the menu
document.addEventListener('click', (event) => {
    if (!card3.contains(event.target) && !popup.contains(event.target)) {
      card3.classList.add('hide');
}});

// program to check if the number is even or odd + change of image?? is not working currently
function evenornot(){
    let result2 = (pay % 2  == 0) ? "even" : "odd";
    result2 === "even" ? document.getElementById("changeimage").src = "media/g1195.png": document.getElementById("changeimage").src = "media/g1073.png";
}

function list(d1,d2,d3){
    console.log(d1,", ",d2," and ",d3)
}

//putting data they asking for in the console, the cicle function GOES HEREEEEEEEEE
function consolefirst(){ 
    console.log(`Welcome to the initial functions of this site, ${urname}!`);
    let names = [urname,"Richard","Helena","Victoria"];
    names.splice(2,3);
    const [ a, b,,] = names
    console.log( names.join(", meet "));
    console.log(b+", meet"+a)
    console.log("That's the name this site won after I didn't know where to use arrays.");
    console.log("This is the information you gave us:");
    list(persona1.name,persona1.wins,persona1.wastes)
    console.log(enJSON)
    console.log("Soo, you put numbers for us and in a couple seconds I will tell you...");
    console.log(0)
    console.log(Math.random() * 1)
    let numbers = [1,2,3];
    numbers.forEach( (num)=> {
        console.log(num)
    } )      
    console.log("You should really be using what you can see, and not this! But go on, I suposse?");
}

function innerfirst(){
    let drip = document.getElementById("card1.1") 
    drip.className = "card1"
    drip.innerHTML = `<h6>Initial ammount: ${pay}</h6>`
    consolefirst();
    evenornot();
}


//data again
let urname = prompt("Hey! What's your name?")
let pay = prompt("How much money do you make?")
let waste = [{lost:0 , name: "bithc"}]


const persona1 = {
    name : urname ,
    wins: pay ,
    wastes: waste ,
}

const enJSON = JSON.stringify(persona1)
const random = JSON.parse(enJSON)
localsave("localuser",enJSON)
const random2 = JSON.parse(localStorage.getItem("producto1"));

innerfirst();
