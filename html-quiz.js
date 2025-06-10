const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Hyper Tool Made Language", correct: false }
    ]
  },
  {
    question: "Which HTML tag is used to define a paragraph?",
    answers: [
      { text: "<div>", correct: false },
      { text: "<p>", correct: true },
      { text: "<span>", correct: false },
      { text: "<section>", correct: false }
    ]
  },
  {
    question: "What is the correct HTML tag for inserting a line break?",
    answers: [
      { text: "<br>", correct: true },
      { text: "<lb>", correct: false },
      { text: "<break>", correct: false },
      { text: "<hr>", correct: false }
    ]
  },
  {
    question: "Which attribute is used to provide an alternate text for an image?",
    answers: [
      { text: "alt", correct: true },
      { text: "title", correct: false },
      { text: "src", correct: false },
      { text: "href", correct: false }
    ]
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<hyper>", correct: false }
    ]
  },
  {
    question: "What is the correct element for inserting an image?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<image>", correct: false },
      { text: "<pic>", correct: false },
      { text: "<src>", correct: false }
    ]
  },
  {
    question: "Which tag is used to define the largest heading?",
    answers: [
      { text: "<h6>", correct: false },
      { text: "<heading>", correct: false },
      { text: "<h1>", correct: true },
      { text: "<head>", correct: false }
    ]
  },
  {
    question: "How do you create an ordered list in HTML?",
    answers: [
      { text: "<ul>", correct: false },
      { text: "<ol>", correct: true },
      { text: "<li>", correct: false },
      { text: "<list>", correct: false }
    ]
  },
  {
    question: "Which tag is used to create a table row?",
    answers: [
      { text: "<td>", correct: false },
      { text: "<tr>", correct: true },
      { text: "<th>", correct: false },
      { text: "<table>", correct: false }
    ]
  },
  {
    question: "What is the correct DOCTYPE declaration for HTML5?",
    answers: [
      { text: "<!DOCTYPE html>", correct: true },
      { text: "<DOCTYPE html>", correct: false },
      { text: "<!html5>", correct: false },
      { text: "<html type='5'>", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result");
const scoreText = document.getElementById("score-text");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultBox.classList.add("hide");
  nextButton.classList.remove("hide");
  showQuestion();
}

function showQuestion() {
  resetState();
  const current = questions[currentQuestionIndex];
  questionElement.innerText = current.question;

  current.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) button.dataset.correct = true;
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  answerButtons.innerHTML = "";
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

  Array.from(answerButtons.children).forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.correct === "true") btn.classList.add("correct");
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
  questionElement.innerText = "";
  answerButtons.innerHTML = "";
  nextButton.classList.add("hide");
  resultBox.classList.remove("hide");
  scoreText.innerText = `Your Score: ${score} / ${questions.length}`;
}

startQuiz();