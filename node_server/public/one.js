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

//Using hidden attribute. Make sure to clear display = 'none' in CSS
/* function myFunction() {
    donateButton.removeAttribute('hidden');
};

//add function to alert button event
alertButton.addEventListener('click', myFunction); */

//Now going to try a different way of writing function within addEventListener () =>
//Pressing Donate Button will bring up input box to put money in
//make sure only occurs once

//Cool function. Will incorporate various elements. Create new element from scratch with text
//And add it to existing element <div>
function newElement() {
  const money_input = document.createElement("input");
  /* const donate_text = document.createTextNode("Give money to the elephants!");
  money_input.appendChild(donate_text); */
  money_input.placeholder = "Give money to the elephants!"; //use value to put in set amount

  const element = document.getElementById("money");
  element.appendChild(money_input);
}

//bring up input by pressing donate button. There is very little in HTML, mostly JS
donateButton.addEventListener(
  "click",
  () => {
    document.getElementById("hide_me").style.display = "block";
    newElement(); //make sure to include () in function
  },
  { once: true }
); //ensure only occurs once

//other ways to set event only once https://www.30secondsofcode.org/js/s/event-listener-once/
