// pegando as informações do html
const username = document.querySelector('#username')
const saveScoreButton = document.querySelector('#saveScoreButton')
const finalScore = document.querySelector('#finalScore')
// pegando a pontuação que foi salva no localStorage no game.js
const mostRecentScore = localStorage.getItem('mostRecentScore')

// pegando as pontuações que já estão no localStorage
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

// liberando o botão salvar ao digitar no campo do nome
username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value
})


// salvando a pontuação em JSON
saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    // adicionando o nome e a pontuação na variavel highScores
    highScores.push(score)

    // fazendo a comparação das pontuações
    highScores.sort((a,b) => {
        return b.score - a.score
    })
    
    highScores.splice(5)

    // enviando o Json com as pontuações para o LocalStorage
    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}