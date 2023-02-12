//  Elementos do DOM
const paleta = document.querySelectorAll('.color');
const btnColor = document.getElementById('button-random-color');
const pixels = document.querySelectorAll('.pixel');
const boardPix = document.getElementById('pixel-board');
const btnLimpa = document.getElementById('clear-board');
const black = document.getElementById('black');
// const brown = document.getElementById('brown');
// const yellow = document.getElementById('yellow');
// const orange = document.getElementById('orange');
const btnTable = document.getElementById('generate-board');
const inputTable = document.getElementById('board-size');

let div = [];
let divDaDiv = [];

//  Cores da paleta
const corUm = paleta[0];
const corDois = paleta[1];
const corTres = paleta[2];
const corQua = paleta[3];

console.log(corQua);

// Define cor inicial pro background
black.style.backgroundColor = 'black';

// Gera cor aleatória
function corAleatória() {
  const r = parseInt(Math.random() * 255, 0);
  const g = parseInt(Math.random() * 255, 0);
  const b = parseInt(Math.random() * 255, 0);

  const cores = `rgb(${r}, ${g}, ${b})`;
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
  retornapaleta();
  retornaPintura();
  voltaBoard();
};

// Função de retornar cor da palheta

function retornapaleta() {
  if (localStorage.getItem('colorPalette')) {
    const retornaCor = JSON.parse(localStorage.getItem('colorPalette'));
    for (let i = 0; i <= retornaCor.length; i += 1) {
      paleta[i].style.backgroundColor = retornaCor[i - 1];
    }
  }
}

//  retornar pixels que foram pintados
function retornaPintura() {
  if (localStorage.getItem('pixelBoard')) {
    const retornaPixel = JSON.parse(localStorage.getItem('pixelBoard'));
    for (let i2 = 0; i2 < retornaPixel.length; i2 += 1) {
      pixels[i2].style.backgroundColor = retornaPixel[i2];
    }
  }
}

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

// apaga a tabela anterior
function apagaTabela() {
  boardPix.innerHTML = '';
}

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
      divDaDiv.addEventListener('click', preenche);
      divDaDiv.addEventListener('dblclick', limpaUm);
    }
  }
  salvaBoard();
}

btnTable.addEventListener('click', aumentaTabela);

// Colore todos os pixels de branco
function limpaTudo() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
  const divs = document.querySelectorAll('.pixel');
  for (let i2 = 0; i2 < divs.length; i2 += 1) {
    divs[i2].style.backgroundColor = 'white';
  }
  salvaPixels();
}

function limpaUm(e) {
  e.target.style.backgroundColor = 'white';
  salvaPixels();
}

// Botão para limpar/deixar branco os pixels
btnLimpa.addEventListener('click', limpaTudo);

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
      pixels[i].addEventListener('dblclick', limpaUm);
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

function salvaBoard() {
  const pixelados = [];
  const divss = document.querySelectorAll('.pixel');
  for (let i = 0; i < divss.length; i += 1) {
    pixelados.push(divss[i].outerHTML);
  }
  localStorage.setItem('boardSize', JSON.stringify(pixelados));
}

function voltaBoard() {
  if (localStorage.getItem('boardSize')) {
    const retornaBoard = JSON.parse(localStorage.getItem('boardSize'));
    for (let i = 0; i < retornaBoard.length; i += 1) {
      //  boardPix.innerHTML += retornaBoard[i];
    }
  }
}

pintaPixel();
