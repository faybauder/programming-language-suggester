// Business Logic


// User Interface Logic


    const answer1 = document.getElementId("question1");
    const answer2 = document.getElementById("question2");
    const answer3 = document.getElementById("question3");
    const answer4 = document.getElementById("question4");
    const answer5 = document.getElementById("question5");


// question 1
function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name=operator]:checked").value
}

window.addEventListener("load", function() {
  this.document.getElementById("question1").addEventListener("submit, handleRadio");

});

// question 2
function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name=operator]:checked").value
}

window.addEventListener("load", function() {
  this.document.getElementById("question1").addEventListener("submit, handleRadio");

});



// submit and reset buttons

const submitButton = document.getElementById("submit");

const resetButton = document.getElementById("reset");

// the text that the button is initialized with
const initialText = submitButton.textContent;

// the text that the button contains after being clicked
const clickedText = "Submit If You Dare";

// we hoist the event listener callback function
// to prevent having duplicate listeners attached
function eventListener() {
  submitButton.textContent = clickedText;
}

function addListener() {
  submitButton.addEventListener(
    "click",
    eventListener,
    {
      passive: true,
      once: true
    }
  );
}

// when the reset button is clicked, the example button is reset,
// and allowed to have its state updated again
resetButton.addEventListener(
  "click",
  () => {
    submitButton.textContent = initialText;
    addListener();
  }
);

addListener();