//  Elementos do DOM
const paleta = document.querySelectorAll('.color');
const btnColor = document.getElementById('button-random-color');
const pixels = document.querySelectorAll('.pixel');
const boardPix = document.getElementById('pixel-board');
const btnLimpa = document.getElementById('clear-board');
const black = document.getElementById('black');
const brown = document.getElementById('brown');
const yellow = document.getElementById('yellow');
const orange = document.getElementById('orange');
const btnTable = document.getElementById('generate-board');
const inputTable = document.getElementById('board-size');

//  paleta[1].style.backgroundColor = salvaCor;

//  Cores da paleta
const corUm = paleta[0];
const corDois = paleta[1];
const corTres = paleta[2];
const corQua = paleta[3];

// Define cor inicial pro background
black.style.backgroundColor = 'black';

// Gera cor aleatória
function corAleatória() {
  const r = parseInt(Math.random() * 255, 0);
  const g = parseInt(Math.random() * 255, 0);
  const b = parseInt(Math.random() * 255, 0);

  const cores = `rgb(${r}, ${g}, ${b})`
  return cores;
}

// Define cor aleatória para as paletas
function backgroundPalets() {
  corDois.style.backgroundColor = corAleatória();
  corTres.style.backgroundColor = corAleatória();
  corQua.style.backgroundColor = corAleatória();

  return backgroundPalets;
}
// Salva cor no LocalStorage
function salvaCor() {
  const array = [corDois.style.backgroundColor,
    corTres.style.backgroundColor,
    corQua.style.backgroundColor];
  localStorage.setItem('colorPalette', JSON.stringify(array));
}

// Clique do botão para gerar coles aleatórias e já salvar no LocalStorage
btnColor.addEventListener('click', () => {
  backgroundPalets();
  salvaCor();
});

// Função para pegar a cor salva assim que carregar a página
window.onload = function liberaCor() {
  if (localStorage.getItem('colorPalette')) {
    const retornaCor = JSON.parse(localStorage.getItem('colorPalette'));
    for (let i = 0; i <= retornaCor.length; i += 1) {
      paleta[i].style.backgroundColor = retornaCor[i - 1];
    }
  }
  if (localStorage.getItem('pixelBoard')) {
    const retornaPixel = JSON.parse(localStorage.getItem('pixelBoard'));
    for (let i = 0; i < retornaPixel.length; i += 1) {
      pixels[i].style.backgroundColor = retornaPixel[i];
    }
  }
};

// Função para trocar as classes deixando uma de cada vez com o 'selected'
function trocaClass(e) {
  for (let i = 0; i < paleta.length; i += 1) {
    if (paleta[i].className === 'color selected') {
      paleta[i].className = 'color';
    }
  }
  e.target.classList.add('selected');
}
// Troca a classe quando clicamos na cor
corUm.addEventListener('click', trocaClass);
corDois.addEventListener('click', trocaClass);
corTres.addEventListener('click', trocaClass);
corQua.addEventListener('click', trocaClass);

// função para salvar os pixel
function salvaPixels() {
  const pixelados = [];
  for (let i = 0; i < pixels.length; i += 1) {
    pixelados.push(pixels[i].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(pixelados));
}

// Colore todos os pixels de branco
function limpaTudo() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
  salvaPixels();
}
// Botão para limpar/deixar branco os pixels
btnLimpa.addEventListener('click', limpaTudo);

function apagaTabela() {
  boardPix.innerHTML = '';
}
let div = [];
let divDaDiv = [];
// Função para aumentar a tabela.
function aumentaTabela(valor) {
  apagaTabela();
  verficaBoard();
  valor = inputTable.value;
  for (let i = 1; i <= valor; i += 1) {
    div = document.createElement('div');
    boardPix.appendChild(div);
    for (let i2 = 1; i2 <= valor; i2 += 1) {
      divDaDiv = document.createElement('div');
      divDaDiv.classList.add('pixel');
      div.appendChild(divDaDiv);
  }
  }
}

btnTable.addEventListener('click', aumentaTabela);

// Preenche os pixels com a cor clicada
function preenche(e) {
  for (let i = 0; i < paleta.length; i += 1) {
    if (paleta[i].className === 'color selected') {
      e.target.style.backgroundColor = paleta[i].style.backgroundColor;
    }
    salvaPixels();
  }
}

// Adiciona cor a cada pixel clicado
function pintaPixel() {
  for (let i = 0; i < pixels.length; i += 1) {
    if (pixels[i].className === 'pixel') {
      pixels[i].addEventListener('click', preenche);
    }
  }
}


function verficaBoard() {
  if (inputTable.value === '') {
    alert('Board Inválido!');
  }
  if (inputTable.value < 5) {
    inputTable.value = 5;
  }
  if (inputTable.value > 50) {
    inputTable.value = 50;
  }
}

// function salvaBoard(elemento) {
//   const pixelados = [];
//   for (let i = 0; i < elemento.length; i += 1) {
//     pixelados.push(elemento[i]);
//   }
//   localStorage.setItem('boardSize', JSON.stringify(pixelados));
// }
pintaPixel();
