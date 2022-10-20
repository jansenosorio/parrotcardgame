// Variaveis globais
let quantidadeCartas = 0

// Array com todas as imagens
const listaImagens = [
  'bobrossparrot',
  'desktop',
  'explodyparrot',
  'fiestaparrot',
  'metalparrot',
  'mobile',
  'revertitparrot',
  'tripletsparrot',
  'unicornparrot'
]

function entradaDosNumeros() {
  quantidadeCartas = Number(prompt('Insira um número entre 4 e 14'))
  verificarNumerosEntrada()
}

function verificarNumerosEntrada() {
  let isImpar = quantidadeCartas % 2

  if (isImpar == 1 || quantidadeCartas < 4) {
    alert('O número precisa ser par e estar entre 4 e 14')
    entradaDosNumeros()
  } else {
    alert('Bom jogo!')
  }
}

function flip(item) {
  item.classList.toggle('flip')
}

function criarCartas() {
  const cartas = document.querySelector('.container')
}

entradaDosNumeros()
