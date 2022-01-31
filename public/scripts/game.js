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

// criando a variavel que vai guardar as questões
var questions;

// Pegando a materia selecionada pelo localStorage
let matterId = window.localStorage.getItem("matterId");

async function getquestions() {
    await fetch('/public/scripts/adtion.json')
         .then(async (res) => {
             questions = await res.json()
         })
}

// // Selecionando as questions de acordo com a materia
// switch (matterId) {
//   case '1':
//         fetch('/public/scripts/adtion.json')
//         .then(async (res) => {
//             questions = await res.json()
//         })
//     //   questions = [
//     //       {
//     //           "question": "Quanto é 2+2?",
//     //           "choice1": "2",
//     //           "choice2": "4",
//     //           "choice3": "22",
//     //           "choice4": "17",
//     //           "choice5": "Nenhuma Das Alternativas",
//     //           "answer": 2
//     //       },
//     //       {
//     //           "question": "Qual o valor da soma: 17+5?",
//     //           "choice1": "21",
//     //           "choice2": "22",
//     //           "choice3": "12",
//     //           "choice4": "32",
//     //           "choice5": "Nenhuma Das Alternativas",
//     //           "answer": 2
//     //       },
//     //       {
//     //           "question": "Quanto vale 37+38?",
//     //           "choice1": "65",
//     //           "choice2": "68",
//     //           "choice3": "85",
//     //           "choice4": "75",
//     //           "choice5": "Nenhuma Das Alternativas",
//     //           "answer": 4
//     //       },
//     //       {
//     //           "question": "Quanto é 5+8?",
//     //           "choice1": "12",
//     //           "choice2": "10",
//     //           "choice3": "11",
//     //           "choice4": "7",
//     //           "choice5": "Nenhuma Das Alternativas",
//     //           "answer": 5
//     //       },
//     //       {
//     //           "question": "Qual o valor da soma: 17+15+7?",
//     //           "choice1": "33",
//     //           "choice2": "29",
//     //           "choice3": "39",
//     //           "choice4": "37",
//     //           "choice5": "Nenhuma Das Alternativas",
//     //           "answer": 3
//     //       },
//     //       {
//     //           "question": "Quanto é 53+69?",
//     //           "choice1": "120",
//     //           "choice2": "124",
//     //           "choice3": "122",
//     //           "choice4": "132",
//     //           "choice5": "Nenhuma Das Alternativas",
//     //           "answer": 3
//     //       },
//     //       {
//     //           "question": "Quanto vale 73+58?",
//     //           "choice1": "131",
//     //           "choice2": "133",
//     //           "choice3": "121",
//     //           "choice4": "123",
//     //           "choice5": "Nenhuma Das Alternativas",
//     //           "answer": 1
//     //       },
//     //       {
//     //           "question": "Qual o valor da soma: 23+36+17?",
//     //           "choice1": "86",
//     //           "choice2": "76",
//     //           "choice3": "70",
//     //           "choice4": "94",
//     //           "choice5": "Nenhuma Das Alternativas",
//     //           "answer": 2
//     //       },
//     //       {
//     //           "question": "Qual o valor da soma: 9+7+5?",
//     //           "choice1": "23",
//     //           "choice2": "27",
//     //           "choice3": "19",
//     //           "choice4": "21",
//     //           "choice5": "Nenhuma Das Alternativas",
//     //           "answer": 4
//     //       },
//     //       {
//     //           "question": "Qual o valor da soma: 9+14+7?",
//     //           "choice1": "40",
//     //           "choice2": "29",
//     //           "choice3": "31",
//     //           "choice4": "19",
//     //           "choice5": "Nenhuma Das Alternativas",
//     //           "answer": 5
//     //       }
//     //  ]
//       break
//   case '2':
//       questions = [
//               {
//                   "question": "Qual o valor da subtração: 17-9?",
//                   "choice1": "7",
//                   "choice2": "8",
//                   "choice3": "9",
//                   "choice4": "10",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 2
//               },
//               {
//                   "question": "Qual o valor da subtração: 32-17?",
//                   "choice1": "14",
//                   "choice2": "15",
//                   "choice3": "9",
//                   "choice4": "8",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 2
//               },
//               {
//                   "question": "Qual o valor da subtração: 36-15-8?",
//                   "choice1": "13",
//                   "choice2": "15",
//                   "choice3": "17",
//                   "choice4": "19",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 1
//               },
//               {
//                   "question": "Quanto é 9-3?",
//                   "choice1": "5",
//                   "choice2": "7",
//                   "choice3": "8",
//                   "choice4": "4",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 5
//               },
//               {
//                   "question": "Quanto é 15-13?",
//                   "choice1": "1",
//                   "choice2": "3",
//                   "choice3": "2",
//                   "choice4": "4",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 3
//               },
//               {
//                   "question": "Quanto é 58-29?",
//                   "choice1": "27",
//                   "choice2": "28",
//                   "choice3": "29",
//                   "choice4": "30",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 3
//               },
//               {
//                   "question": "Quanto vale 73-58?",
//                   "choice1": "15",
//                   "choice2": "14",
//                   "choice3": "13",
//                   "choice4": "12",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 1
//               },
//               {
//                   "question": "Quanto vale 16-7?",
//                   "choice1": "6",
//                   "choice2": "7",
//                   "choice3": "8",
//                   "choice4": "9",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 4
//               },
//               {
//                   "question": "Quanto vale 23-6?",
//                   "choice1": "17",
//                   "choice2": "15",
//                   "choice3": "20",
//                   "choice4": "18",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 1
//               },
//               {
//                   "question": "Qual o valor da subtração: 67-18-32?",
//                   "choice1": "18",
//                   "choice2": "27",
//                   "choice3": "16",
//                   "choice4": "26",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 5
//               }
//       ]
//       break
//   case '3':
//       questions = [
//               {
//                   "question": "Qual o valor da multiplicação: 3x7?",
//                   "choice1": "10",
//                   "choice2": "19",
//                   "choice3": "21",
//                   "choice4": "23",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 3
//               },
//               {
//                   "question": "Qual o valor da multiplicação: 7x5?",
//                   "choice1": "27",
//                   "choice2": "25",
//                   "choice3": "37",
//                   "choice4": "35",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 4
//               },
//               {
//                   "question": "Qual o valor da multiplicação: 9x6?",
//                   "choice1": "56",
//                   "choice2": "54",
//                   "choice3": "60",
//                   "choice4": "64",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 2
//               },
//               {
//                   "question": "Quanto é 2x13?",
//                   "choice1": "26",
//                   "choice2": "23",
//                   "choice3": "24",
//                   "choice4": "36",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 1
//               },
//               {
//                   "question": "Quanto é 7x11?",
//                   "choice1": "70",
//                   "choice2": "73",
//                   "choice3": "77",
//                   "choice4": "76",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 3
//               },
//               {
//                   "question": "Quanto é 13x5?",
//                   "choice1": "60",
//                   "choice2": "55",
//                   "choice3": "50",
//                   "choice4": "70",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 5
//               },
//               {
//                   "question": "Quanto vale 12x12?",
//                   "choice1": "124",
//                   "choice2": "134",
//                   "choice3": "144",
//                   "choice4": "154",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 3
//               },
//               {
//                   "question": "Quanto vale 7x8?",
//                   "choice1": "66",
//                   "choice2": "54",
//                   "choice3": "56",
//                   "choice4": "34",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 3
//               },
//               {
//                   "question": "Quanto vale 17x3?",
//                   "choice1": "31",
//                   "choice2": "43",
//                   "choice3": "57",
//                   "choice4": "51",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 4
//               },
//               {
//                   "question": "Qual o valor da multiplicação: 7x7x3?",
//                   "choice1": "143",
//                   "choice2": "157",
//                   "choice3": "149",
//                   "choice4": "159",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 5
//               }
//       ]
//       break
//   case '4':
//       questions = [
//               {
//                   "question": "Qual o valor da divisão: 15/3?",
//                   "choice1": "7",
//                   "choice2": "6",
//                   "choice3": "5",
//                   "choice4": "4",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 3
//               },
//               {
//                   "question": "Qual o valor da divisão: 16/4?",
//                   "choice1": "8",
//                   "choice2": "4",
//                   "choice3": "6",
//                   "choice4": "3",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 2
//               },
//               {
//                   "question": "Qual o valor da divisão: 28/7?",
//                   "choice1": "7",
//                   "choice2": "4",
//                   "choice3": "3",
//                   "choice4": "5",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 2
//               },
//               {
//                   "question": "Quanto é 54/9?",
//                   "choice1": "5",
//                   "choice2": "7",
//                   "choice3": "8",
//                   "choice4": "6",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 4
//               },
//               {
//                   "question": "Quanto é 84/3?",
//                   "choice1": "24",
//                   "choice2": "26",
//                   "choice3": "27",
//                   "choice4": "38",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 5
//               },
//               {
//                   "question": "Quanto é 65/5?",
//                   "choice1": "11",
//                   "choice2": "12",
//                   "choice3": "13",
//                   "choice4": "14",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 3
//               },
//               {
//                   "question": "Quanto vale 56/7?",
//                   "choice1": "6",
//                   "choice2": "8",
//                   "choice3": "9",
//                   "choice4": "7",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 2
//               },
//               {
//                   "question": "Quanto vale 63/3?",
//                   "choice1": "21",
//                   "choice2": "23",
//                   "choice3": "25",
//                   "choice4": "27",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 1
//               },
//               {
//                   "question": "Quanto vale 18/9?",
//                   "choice1": "9",
//                   "choice2": "3",
//                   "choice3": "2",
//                   "choice4": "10",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 3
//               },
//               {
//                   "question": "Qual o valor da divisão: 72/3/2?",
//                   "choice1": "24",
//                   "choice2": "12",
//                   "choice3": "48",
//                   "choice4": "16",
//                   "choice5": "Nenhuma Das Alternativas",
//                   "answer": 2
//               }
//       ]
//       break
// }

// quantidade de pontos por questão
const SCORE_POINTS = 100;
// quantidade máxima de questões
const MAX_QUESTIONS = 10;

// iniciando o jogo
async function startGame() {
    await getquestions();
  questionCounter = 0;
  score = 0;
  // chamando a função que traz uma questão
  getNewQuestion();
};

getNewQuestion = () => {
  // verificando se existe uma questão, ou se o contador de questões passou do limite máximo de questões
  if (questions.length === 0 || questionCounter > MAX_QUESTIONS) {
    // salvando no localStorage a pontuação
    localStorage.setItem("mostRecentScore", score);

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
