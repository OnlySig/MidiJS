const listaDeTeclas = document.querySelectorAll('.tecla')

function tocaSom(selectAudio) {
  const element = document.querySelector(selectAudio);
  if(element === null || element.localName != 'audio'){
    console.log('Elemento não encontrado ou seletor inválido.')
  } else {
    element.play()
  }
}

for(c=0;c<listaDeTeclas.length;c++){
  const tecla = listaDeTeclas[c]
  const instrumento = tecla.classList[1]
  const idAudio = `#som_${instrumento}`

  tecla.addEventListener("click", () => tocaSom(idAudio))
  
  tecla.onkeydown = (event) => {
    if(event.code === "Enter" || event.code === "Space"){
      tecla.classList.add('ativa')
    }
  } 
  tecla.onkeyup = () => {
    tecla.classList.remove('ativa')
  } 
}

/**Código antigo usando while
 *let c = 0
  while(c < listaDeTeclas.length){
    const tecla = listaDeTeclas[c]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    tecla.onclick = () => {
      tocaSom(idAudio)
    }
    c++
    console.log(instrumento)
    console.log(c)
} */