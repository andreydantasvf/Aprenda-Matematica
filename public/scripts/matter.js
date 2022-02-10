// Limpando o localStorage
localStorage.clear()
// Função para pegar a matéria clickada e guardar no localStorage
getMatter = (matterName, matterNamePt) => {
    window.localStorage.setItem('matterName', matterName)
    window.localStorage.setItem('matterNamePt', matterNamePt)

}