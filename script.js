const paleta = document.querySelectorAll('.color');
const btnColor = document.getElementById('button-random-color');
const pixels = document.querySelectorAll('.pixel');
const boardPix = document.getElementById('pixel-board');
const btnLimpa = document.getElementById('clear-board');
const black = document.getElementById('black');
const brown = document.getElementById('brown');
const yellow = document.getElementById('yellow');
const orange = document.getElementById('orange');

// let storage = localStorage;
// let salvaCor = JSON.parse(storage.getItem('colorPallet'));
//  paleta[1].style.backgroundColor = salvaCor;

const corUm = paleta[0];
const corDois = paleta[1];
const corTres = paleta[2];
const corQua = paleta[3];

black.style.backgroundColor = 'black'

backgroundPalets()

function classInicia() {
  corUm.classList.add('selected');

  return classInicia;
}

window.onload = classInicia();

function corAleatória() {
  const r = parseInt(Math.random() * 255, 0);
  const g = parseInt(Math.random() * 255, 0);
  const b = parseInt(Math.random() * 255, 0);

  return `rgb(${r}, ${g}, ${b})`;
}

function backgroundPalets() {
  corDois.style.backgroundColor = corAleatória();
  corTres.style.backgroundColor = corAleatória();
  corQua.style.backgroundColor = corAleatória();

  return backgroundPalets;
}

btnColor.addEventListener('click', () => {
  backgroundPalets();

//   storage.setItem('colorPallet', JSON.stringify(paleta[1].style.backgroundColor));
});

// function salvaCor () {
//   localStorage.setItem('colorPalette', JSON.stringify(paletaUm));
// };

// function liberaCor () {
//   JSON.parse(localStorage.getItem('colorPalette'));
// };

function trocaClass(e) {
  for (let i = 0; i < paleta.length; i += 1) {
    if (paleta[i].className === 'color selected') {
      paleta[i].className = 'color';
    }
  }
  e.target.classList.add('selected');
}

corUm.addEventListener('click', trocaClass);
corDois.addEventListener('click', trocaClass);
corTres.addEventListener('click', trocaClass);
corQua.addEventListener('click', trocaClass);



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
  
}

for (let i = 0; i < pixels.length; i += 1) {
     pixels[i].addEventListener('click', preenche);
}


function limpaTudo() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

btnLimpa.addEventListener('click', limpaTudo);

// pixels.addEventListener('click'
