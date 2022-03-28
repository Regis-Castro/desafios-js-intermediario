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

function setaEsquerdaNitida() {
  setaEsquerda.classList.remove('seta-opaca')
}

function setaEsquerdaOpaca() {
  setaEsquerda.classList.add('seta-opaca')
}

function setaDireitaNitida() {
  setaDireita.classList.remove('seta-opaca')
}

function setaDireitaOpaca() {
  setaDireita.classList.add('seta-opaca')
}


setaDireita.addEventListener('click', function () {
  if (imagemAtual == 0) {
    setaEsquerdaNitida()

  }
 

  if (imagemAtual == slides.length - 2) {
    setaDireitaOpaca()
  }


  if (imagemAtual < slides.length - 1) {
    imagemAtual++

    esconderImagens()
    mostrarImagem()
  }
})


setaEsquerda.addEventListener('click', function () {
  if (imagemAtual == 1) {
    setaEsquerdaOpaca()
  }


  if (imagemAtual <= slides.length - 1 && imagemAtual > 0) {
    setaDireitaNitida()

    imagemAtual--
    esconderImagens()
    mostrarImagem()
  }
})

