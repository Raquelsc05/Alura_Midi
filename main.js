function tocaSom(selectorAudio) {
  const element = document.querySelector(selectorAudio)

  if (element && element.localName === 'audio') {
    element.play();
  } else {
    console.log('Elemento Nao encontrado ou seletor invalido')
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

//Para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador]

  const instrumentos = tecla.classList[1]

  // Template String
  const idAudio = `#som_${instrumentos}`

  tecla.onclick = function () {
    tocaSom(idAudio)
  }
  tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa')
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }
}

//Enquanto
/*funcao while
const listaDeTeclas = document.querySelectorAll('.tecla')
// Contador
let contador = 0

// Enquanto

while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador]

  const instrumentos = tecla.classList[1]

  // Template String
  const idAudio = `#som_${instrumentos}`

  // console.log(idAudio);

  tecla.onclick = function () {
    tocaSom(idAudio)
  }

  contador = contador + 1

  // console.log(contador);
}
*/
