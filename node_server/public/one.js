//Remember, don't forget ; after each statement
//Simplify code by creating constants
const alertButton = document.getElementById("alert");
const donateButton = document.getElementById("donate");

//Alert when Press Button
alertButton.addEventListener("click", function () {
  alert("Bro, You Rock!!! How much do you want to donate?");
});

//I want to make a button that brings up an input to put in money to donate
//The button will appear after pressing the touch me button
//Create new button, id="donate" and hide using css => style -> display:'none'
//Make donate button appear when press touch button
function myFunction() {
  donateButton.style.display = "inline";
}

alertButton.addEventListener("click", myFunction);

//Now going to try a different way of writing function within addEventListener () =>
//Pressing Donate Button will bring up input box to put money in
//make sure only occurs once

const moneyInput = document.getElementById("moneyInput")

//bring up input by pressing donate button. There is very little in HTML, mostly JS
donateButton.addEventListener(
  "click",
  () => {
    moneyInput.removeAttribute("hidden");
    //newElement(); //make sure to include () in function
  },
  { once: true }
); //ensure only occurs once; other ways to set event only once https://www.30secondsofcode.org/js/s/event-listener-once/

//set auto length of input box
moneyInput.style.width = moneyInput.placeholder.length + 1 + 'ch'  

//now put in some value in input box bring out thank note with happy elephant
//add submit button
const submit_button = document.getElementById("submit");
//submit_button will appear once input money amount
function appearFunc() {
  submit_button.removeAttribute("hidden");
}
//submit button will appear once an input is put into box
moneyInput.addEventListener("input", appearFunc);


// Function to display message on submit
var inputValue = moneyInput.value.trim();
const message = document.getElementById("message");

//reset input value on page reload
window.addEventListener('load', () => {
    moneyInput.value='';
});

function displayMessage() {
if (inputValue !== '') {
    message.textContent = `The elephants thank you for your ${inputValue} donation`;
    message.removeAttribute('hidden');
}
else {
    message.setAttribute('hidden');
};
};

const submit= document.getElementById('submit');
submit.addEventListener('click', displayMessage);

//**************Garbage***************
//Create Input Box with JS. Will incorporate various elements. Create new element from scratch with text
//And add it to existing element <div>
/* function newElement() {
    const money_input = document.createElement("input");
    money_input.setAttribute('id','moneyInput');
    money_input.placeholder = "Give money to the elephants!"; //use value to put in set amount
    money_input.style.width = (money_input.placeholder.length + 1) + 'ch'  //sets auto length of input box
    const element = document.getElementById("money");
    element.appendChild(money_input);
  }   DOESNT WORK*/