// pegando a lista de pontuação do html
const highScoresList = document.querySelector('#highScoresList')
// pegando as pontuações do localStorage
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

// Colocando as pontuações no html
highScoresList.innerHTML =
// mapeando todas as pontuações e colocando dentro de uma lista
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")