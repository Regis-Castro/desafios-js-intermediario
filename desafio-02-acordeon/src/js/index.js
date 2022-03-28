const perguntas = document.querySelectorAll('.pergunta')
const respostas = document.querySelectorAll('.resposta')
const setas = document.querySelectorAll('.seta')

function esconderRespostas() {
  respostas.forEach(item => {
    item.classList.add('escondido')
  })
}

function acinzentarSetas() {
  setas.forEach(item => {
    item.setAttribute('src', 'src/images/seta-cinza.png')
  })
}

perguntas.forEach((item, index) => {
  item.addEventListener('click', () => {
    esconderRespostas()
    acinzentarSetas()

    respostas[index].classList.remove('escondido')
    setas[index].setAttribute('src', 'src/images/seta-laranja.png')
  })
})





