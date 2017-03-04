var input = document.getElementById("userInput");
var button = document.getElementById("btn");
var deleteButton = document.getElementsByClassName("Delete");
var outputEl = document.getElementById("outputCard");


function printCard() {
  var newCard = "";
  newCard += `<article class="cardBox">`;
  newCard += `<h3> ${input.value} </h3>`;
  newCard += `<button class="delete">Delete Me!</button>`;
  newCard += `</article>`;
  outputEl.innerHTML += newCard;
};


function deleteOutput(event) {
  if (event.target.className === "delete") {
    event.target.parentElement.remove();
  }
}

document.body.addEventListener("click", deleteOutput);
button.addEventListener("click", printCard);
