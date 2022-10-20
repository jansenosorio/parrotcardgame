// Variaveis globais
let quantidadeCartas = 0

// Array com todas as imagens
const listaImagens = [
  'bobrossparrot',
  'explodyparrot',
  'fiestaparrot',
  'metalparrot',
  'revertitparrot',
  'tripletsparrot',
  'unicornparrot'
]

let listaImagensEmbaralhada = []

// Abertura da página, conferindo se as entradas do jogador estão de acordo com o solicitado

function entradaDosNumeros() {
  quantidadeCartas = Number(prompt('Insira um número entre 4 e 14'))
  verificarNumerosEntrada()
}

function verificarNumerosEntrada() {
  let isImpar = quantidadeCartas % 2

  if (isImpar == 1 || quantidadeCartas < 4 || quantidadeCartas > 14) {
    alert('O número precisa ser par e estar entre 4 e 14')
    entradaDosNumeros()
  } else {
    criarCartas()
  }
}

function embaralharCartas() {
  listaImagens.sort(function () {
    return 0.5 - Math.random()
  })

  for (let i = 0; i < quantidadeCartas / 2; i++) {
    listaImagensEmbaralhada.push(listaImagens[i])
  }
}

// Função para criar as cartas

function criarCartas() {
  const cartas = document.querySelector('.container')
  let contadorImagem = 0
  cartas.innerHTML = ''

  embaralharCartas()

  for (let i = 0; i < quantidadeCartas / 2; i++) {
    contadorImagem = listaImagensEmbaralhada[i]
    cartas.innerHTML += `
          <div class="card" onclick="flip(this)">
            <div class="face front" style="background-image: url('../img/${contadorImagem}.gif')"></div>
            <div class="face back"></div>
          </div>
          <div class="card" onclick="flip(this)">
            <div class="face front" style="background-image: url('../img/${contadorImagem}.gif')"></div>
            <div class="face back"></div>
          </div>`
  }
}

function encerrarJogo() {
  const flipedCards = document.querySelectorAll('.flip')
  const numeroCartas = document.querySelectorAll('.card')

  if (flipedCards.length == numeroCartas.length) {
    let continuarJogar = prompt('Você venceu o jogo, deseja continuar?')

    if (continuarJogar == 'sim') {
      entradaDosNumeros()
    } else if (continuarJogar == 'não') {
      alert('Obrigado Por Jogar')
    }
  }
}

// Funções auxiliares

function flip(item) {
  item.classList.toggle('flip')
  encerrarJogo()
}

entradaDosNumeros()
