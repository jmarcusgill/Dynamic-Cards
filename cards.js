console.log("pooping")

var input = document.getElementById("userInput");
var button = document.getElementById("btn");
var deleteButton = document.getElementById("btnDelete");
var outputEl = document.getElementById("outputCard");


function printCard() {
  var newCard = "";
  newCard += `<article class="cardBox">`;
  newCard += `<h3> ${input.value} </h3>`;
  newCard += `<button id="btnDelete">Delete Me!</button>`
  newCard += `</article>`
  outputEl.innerHTML += newCard;
  console.log("test")
};

function deleteOutput() {
  outputEl.innerHTML = "";
}

button.addEventListener("click", printCard);
deleteButton.addEventListener("click", deleteOutput);
