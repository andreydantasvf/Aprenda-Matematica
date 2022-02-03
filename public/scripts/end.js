// pegando as informações do html
const username = document.querySelector('#username')
const saveScoreButton = document.querySelector('#saveScoreButton')
const finalScore = document.querySelector('#finalScore')
const score = document.querySelector('#userScore')
const openModalButton = document.querySelector('#feedback')
const modalFeedback = document.querySelector('.modal-feedback')
const closeModalButton = document.querySelector('#modal-close')
const feedbackContainer = document.querySelector('.feedback-container')
const feedbackQuestions = JSON.parse(localStorage.getItem('feedbackQuestions'))

// Pegando cada questão do array no localStorage e criando a div no html
feedbackQuestions.forEach(question => {

    divFeedback = document.createElement('div')
    divFeedback.classList.add('feedback')

    pTitleQuestion = document.createElement('p')
    pTitleQuestion.classList.add('title-question')
    pTitleQuestion.innerText = question.titleQuestion

    pAnswerPlayer = document.createElement('p')
    pAnswerPlayer.classList.add('answer')
    pAnswerPlayer.innerText = `Sua resposta: ${question.answerPlayer}`

    pAnswerCorrect = document.createElement('p')
    pAnswerCorrect.classList.add('answer')
    pAnswerCorrect.innerText = `Resposta correta: ${question.answerCorrect}`

    divFeedback.appendChild(pTitleQuestion)
    divFeedback.appendChild(pAnswerPlayer)
    divFeedback.appendChild(pAnswerCorrect)

    feedbackContainer.appendChild(divFeedback)
})

// Abrindo a modal do Gabarito de questões
openModalButton.addEventListener('click', () => {
    modalFeedback.classList.add('modal-active')
})

// Fechando a modal do Gabarito de questões
closeModalButton.addEventListener('click', () => {
    modalFeedback.classList.remove('modal-active')
})

// pegando a pontuação que foi salva no localStorage no game.js
const mostRecentScore = localStorage.getItem('mostRecentScore')

// Inserindo o score do player no input do form end.html
score.value = mostRecentScore

// Iserindo o score do player no layout do end.html
finalScore.innerText = mostRecentScore

// liberando o botão salvar ao digitar no campo do nome
username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value
})