// pegando as informoções do html
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

// criando as variaveis
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

// criando a variavel que vai guardar as questões
var questions = [
    {
        "question": "Quanto é 2+2?",
        "choice1": "2",
        "choice2": "4",
        "choice3": "22",
        "choice4": "17",
        "choice5": "Nenhuma Das Alternativas",
        "answer": 2
    },
    {
        "question": "Qual o valor da soma: 17+5?",
        "choice1": "21",
        "choice2": "22",
        "choice3": "12",
        "choice4": "32",
        "choice5": "Nenhuma Das Alternativas",
        "answer": 2
    },
    {
        "question": "Quanto vale 37+38?",
        "choice1": "65",
        "choice2": "68",
        "choice3": "85",
        "choice4": "75",
        "choice5": "Nenhuma Das Alternativas",
        "answer": 4
    },
    {
        "question": "Quanto é 5+8?",
        "choice1": "12",
        "choice2": "10",
        "choice3": "11",
        "choice4": "7",
        "choice5": "Nenhuma Das Alternativas",
        "answer": 5
    },
    {
        "question": "Qual o valor da soma: 17+15+7?",
        "choice1": "33",
        "choice2": "29",
        "choice3": "39",
        "choice4": "37",
        "choice5": "Nenhuma Das Alternativas",
        "answer": 3
    },
    {
        "question": "Quanto é 53+69?",
        "choice1": "120",
        "choice2": "124",
        "choice3": "122",
        "choice4": "132",
        "choice5": "Nenhuma Das Alternativas",
        "answer": 3
    },
    {
        "question": "Quanto vale 73+58?",
        "choice1": "131",
        "choice2": "133",
        "choice3": "121",
        "choice4": "123",
        "choice5": "Nenhuma Das Alternativas",
        "answer": 1
    },
    {
        "question": "Qual o valor da soma: 23+36+17?",
        "choice1": "86",
        "choice2": "76",
        "choice3": "70",
        "choice4": "94",
        "choice5": "Nenhuma Das Alternativas",
        "answer": 2
    },
    {
        "question": "Qual o valor da soma: 9+7+5?",
        "choice1": "23",
        "choice2": "27",
        "choice3": "19",
        "choice4": "21",
        "choice5": "Nenhuma Das Alternativas",
        "answer": 4
    },
    {
        "question": "Qual o valor da soma: 9+14+7?",
        "choice1": "40",
        "choice2": "29",
        "choice3": "31",
        "choice4": "19",
        "choice5": "Nenhuma Das Alternativas",
        "answer": 5
    }
]

// quantidade de pontos por questão
const SCORE_POINTS = 100
// quantidade máxima de questões
const MAX_QUESTIONS = 10

// iniciando o jogo
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    // chamando a função que traz uma questão
    getNewQuestion()
}

getNewQuestion = () => {
    // verificando se existe uma questão, ou se o contador de questões passou do limite máximo de questões
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        // salvando no localStorage a pontuação
        localStorage.setItem('mostRecentScore', score)

        // redirecionado para tela end.htlm
        return window.location.assign('/end')
    }

    // aumentando o contador de questões em +1
    questionCounter++
    // inserindo o contador de questões no html, ProgressText
    progressText.innerText = `Questão ${questionCounter} de ${MAX_QUESTIONS}`
    // pitando a barra de progresso de acordo com o passar das questões
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    // pegando uma questão random
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    // colocando o Titulo da questão no html
    question.innerText = currentQuestion.question

    // colocando os textos nas alternativas
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    // removendo as questões que já apareceram
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        // pegando a alternativa que foi clickada
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        
        // verificando se foi a alternativa correta
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        // adicionando a classe correct ou incorrect nas alternativas dentro do html
        selectedChoice.parentElement.classList.add(classToApply)

        // aplicando um delay e tirando as classe correct ou incorrect das alternativas dentro do html
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

// aumentando a pontuação
incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()