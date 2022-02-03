// pegando as informoções do html
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

// criando as variaveis
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let feedbackQuestions = [];

// criando a variavel que vai guardar as questões
var questions;

// Pegando a materia selecionada pelo localStorage
let matterName = window.localStorage.getItem("matterName");

// Pega os arquivos JSON das questions e guarda na variavel
async function getQuestions(matter) {
  await fetch(`/public/assets/${matter}.json`).then(async (res) => {
    questions = await res.json();
  });
}

// quantidade de pontos por questão
const SCORE_POINTS = 100;
// quantidade máxima de questões
const MAX_QUESTIONS = 10;

// iniciando o jogo
async function startGame() {
  await getQuestions(matterName);
  questionCounter = 0;
  score = 0;
  // chamando a função que traz uma questão
  getNewQuestion();
}

getNewQuestion = () => {
  // verificando se existe uma questão, ou se o contador de questões passou do limite máximo de questões
  if (questions.length === 0 || questionCounter > MAX_QUESTIONS) {
    // salvando no localStorage a pontuação
    localStorage.setItem("mostRecentScore", score);
    // Salvando o Gabarito das questões selecionadas no LocalStorage
    localStorage.setItem("feedbackQuestions", JSON.stringify(feedbackQuestions));

    // redirecionado para tela end.htlm
    return window.location.assign("/end");
  }

  // aumentando o contador de questões em +1
  questionCounter++;
  // inserindo o contador de questões no html, ProgressText
  progressText.innerText = `Questão ${questionCounter} de ${MAX_QUESTIONS}`;
  // pitando a barra de progresso de acordo com o passar das questões
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  // pegando uma questão random
  const questionsIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[questionsIndex];
  // colocando o Titulo da questão no html
  question.innerText = currentQuestion.question;

  // colocando os textos nas alternativas
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  // removendo as questões que já apareceram
  questions.splice(questionsIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    // pegando a alternativa que foi clickada
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    // Adicionando à variavel de gabarito de questoes as respostas do player e corretas
    feedbackQuestions.push({
      titleQuestion: currentQuestion.question,
      answerPlayer: currentQuestion[`choice${selectedAnswer}`],
      answerCorrect: currentQuestion[`choice${currentQuestion.answer}`]
    })

    // verificando se foi a alternativa correta
    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }

    // adicionando a classe correct ou incorrect nas alternativas dentro do html
    selectedChoice.parentElement.classList.add(classToApply);

    // aplicando um delay e tirando as classe correct ou incorrect das alternativas dentro do html
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

// aumentando a pontuação
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
