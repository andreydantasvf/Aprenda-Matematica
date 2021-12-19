// pegando as informações do html
const username = document.querySelector('#username')
const saveScoreButton = document.querySelector('#saveScoreButton')
const finalScore = document.querySelector('#finalScore')
const score = document.querySelector('#userScore')

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