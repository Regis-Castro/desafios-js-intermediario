let inputs = document.querySelectorAll('.requerido')
let camposObrigatorios = document.querySelectorAll('.obrigatorio')
let enviar = document.querySelector('[type="submit"]')


function alertarCampoObrigatorio() {
  inputs.forEach((item, index) => {
    if (item.value == '') {
      camposObrigatorios[index].classList.remove('escondido')
      item.classList.add('borda-vermelha')
    }
  })
}

function regularizarCampo() {
  inputs.forEach((item, index) => {
    if (item.value != '') {
      camposObrigatorios[index].classList.add('escondido')
      item.classList.add('borda-verde')
    } else if (item.value == '') {
      item.classList.remove('borda-verde')
    }
  })
}


inputs.forEach(item => {
  item.addEventListener('change', () => {
    regularizarCampo()
  })
})

enviar.addEventListener('click', (e) => {
  e.preventDefault()

  alertarCampoObrigatorio()
})