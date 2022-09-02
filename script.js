//Elementos do DOM
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

// Preenche os pixels com a cor clicada
function preenche(e) {
  if (black.className === 'color selected') {
    e.target.style.backgroundColor = black.style.backgroundColor;
  }
  if (brown.className === 'color selected') {
    e.target.style.backgroundColor = brown.style.backgroundColor;
  }
  if (yellow.className === 'color selected') {
    e.target.style.backgroundColor = yellow.style.backgroundColor;
  }
  if (orange.className === 'color selected') {
    e.target.style.backgroundColor = orange.style.backgroundColor;
  }
  salvaPixels()
}

// Adiciona cor a cada pixel clicado
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', preenche);
}

// Colore todos os pixels de branco
function limpaTudo() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
  salvaPixels()
}
// Botão para limpar/deixar branco os pixels
btnLimpa.addEventListener('click', limpaTudo);



function salvaPixels() {
  const pixelados = [];
  for (let i = 0; i < pixels.length; i += 1) {
    pixelados.push(pixels[i].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(pixelados));
}


// Função para aumentar a tabela.
function aumentaTabela() {
  const div = document.createElement('div');
  boardPix.appendChild(div);
  const divDaDiv = document.createElement('div');
  divDaDiv.classList.add('pixel');
  div.appendChild(divDaDiv);
}






// btnTable.addEventListener('click', (e) => {
//  aumentaTabela(multiplica);
// })

