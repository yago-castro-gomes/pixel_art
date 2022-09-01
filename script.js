

const paleta = document.querySelectorAll('.color');
const btnColor = document.getElementById('button-random-color');
const pixels = document.getElementsByClassName('.pixel');

// let storage = localStorage;
// let salvaCor = JSON.parse(storage.getItem('colorPallet'));
//  paleta[1].style.backgroundColor = salvaCor;

const corUm = paleta[0];
const corDois = paleta[1];
const corTres = paleta[2];
const corQua = paleta[3];

function classInicia () {
  corUm.classList.add('selected');

  return classInicia;
};

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


