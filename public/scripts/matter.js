// Limpando o localStorage
localStorage.clear()
// Função para pegar a matéria clickada e guardar no localStorage
getMatter = (matterName) => {
    window.localStorage.setItem('matterName', matterName)
}