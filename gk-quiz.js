const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Osmium", correct: false },
      { text: "Oxide", correct: false },
      { text: "Oganesson", correct: false }
    ]
  },
  {
    question: "What is the boiling point of water at sea level?",
    answers: [
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "80°C", correct: false },
      { text: "120°C", correct: false }
    ]
  },
  {
    question: "Which is the largest mammal?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false }
    ]
  },
  {
    question: "Which language runs in a web browser?",
    answers: [
      { text: "Python", correct: false },
      { text: "C", correct: false },
      { text: "JavaScript", correct: true },
      { text: "Java", correct: false }
    ]
  },
  {
    question: "What is the square root of 64?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "7", correct: false },
      { text: "9", correct: false }
    ]
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Hydrogen", correct: false },
      { text: "Nitrogen", correct: false }
    ]
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Australia", correct: false },
      { text: "South America", correct: false }
    ]
  },
  {
    question: "Which organ pumps blood throughout the body?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Brain", correct: false },
      { text: "Heart", correct: true },
      { text: "Lungs", correct: false }
    ]
  }
  ];
let currentQuestionIndex = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const quizBox = document.getElementById("quiz-box");
const resultScreen = document.getElementById("result-screen");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

function startQuiz() {
  startScreen.classList.add("hide");
  resultScreen.classList.add("hide");
  quizBox.classList.remove("hide");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let current = questions[currentQuestionIndex];
  questionElement.innerText = current.question;

  current.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = true;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  answerButtons.innerHTML = '';
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  nextButton.classList.remove("hide");
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.classList.add("hide");
  resultScreen.classList.remove("hide");
  scoreDisplay.innerText = `${score} / ${questions.length}`;
}