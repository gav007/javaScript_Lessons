// 05 - Quiz Engine
// Goal: use an array of objects to drive the screen.

const questions = [
  {
    question: "What does DOM stand for?",
    answers: ["Document Object Model", "Data Output Mode", "Digital Object Map"],
    correctIndex: 0
  },
  {
    question: "Which method selects the first matching element?",
    answers: ["querySelector", "getAll", "selectFirst"],
    correctIndex: 0
  },
  {
    question: "What type does input.value usually give you?",
    answers: ["Number", "String", "Boolean"],
    correctIndex: 1
  }
];

const progressText = document.querySelector("#progressText");
const questionText = document.querySelector("#questionText");
const answers = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const nextBtn = document.querySelector("#nextBtn");

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  // TODO 1: update progressText and questionText.
  // TODO 2: clear answers.innerHTML.
  // TODO 3: loop through currentQuestion.answers and create a button for each answer.
  // TODO 4: each answer button should call checkAnswer(index).
}

function checkAnswer(selectedIndex) {
  if (hasAnswered === true) {
    return;
  }

  hasAnswered = true;
  const currentQuestion = questions[currentQuestionIndex];

  // TODO 5: compare selectedIndex with currentQuestion.correctIndex.
  // TODO 6: update score and feedback.
}

nextBtn.addEventListener("click", function () {
  // TODO 7: move to next question or show final score.
});

renderQuestion();
