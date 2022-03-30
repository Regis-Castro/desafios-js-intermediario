const slides = document.querySelectorAll('.slide')
const setaEsquerda = document.querySelector('.seta-esquerda')
const setaDireita = document.querySelector('.seta-direita')
let imagemAtual = 0

function esconderImagens() {
  slides.forEach(item => {
    item.classList.add('escondido')
  })
}

function mostrarImagem() {
  slides[imagemAtual].classList.remove('escondido')
}

function setaNitida(seta) {
  seta.classList.remove('seta-opaca')
}

function setaOpaca(seta) {
  seta.classList.add('seta-opaca')
}

setaDireita.addEventListener('click', function () {
  if (imagemAtual == 0) {
    setaNitida(setaEsquerda)

  }
 

  if (imagemAtual == slides.length - 2) {
    setaOpaca(setaDireita)
  }


  if (imagemAtual < slides.length - 1) {
    imagemAtual++

    esconderImagens()
    mostrarImagem()
  }
})


setaEsquerda.addEventListener('click', function () {
  if (imagemAtual == 1) {
    setaOpaca(setaEsquerda)
  }


  if (imagemAtual <= slides.length - 1 && imagemAtual > 0) {
    setaNitida(setaDireita)

    imagemAtual--
    esconderImagens()
    mostrarImagem()
  }
})

