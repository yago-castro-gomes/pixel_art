const paleta = document.querySelectorAll('.color');
const btnColor = document.getElementById('button-random-color');
const pixels = document.getElementsByClassName('.pixel');

// let storage = localStorage;
// let salvaCor = JSON.parse(storage.getItem('colorPallet'));
//  paleta[1].style.backgroundColor = salvaCor;
//  function corInicial () {
//   if (paleta[0].className === 'color') {
//     paleta[0].classList.add('selected');
//     paleta[0].classList.remove('color');
//   }
// }
// corInicial();

function corAleatória() {
  const r = parseInt(Math.random() * 255, 0);
  const g = parseInt(Math.random() * 255, 0);
  const b = parseInt(Math.random() * 255, 0);

  return `rgb(${r}, ${g}, ${b})`;
}

function backgroundPalets() {
  paleta[1].style.backgroundColor = corAleatória();
  paleta[2].style.backgroundColor = corAleatória();
  paleta[3].style.backgroundColor = corAleatória();

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
    for (conteudo in paleta) {
      if (paleta[conteudo].classList == 'selected') {
        paleta[conteudo].classList = 'color'
      }
    }
        e.target.classList.remove('color');
        e.target.classList.add('selected');

}

paleta[0].addEventListener('click', trocaClass);
paleta[1].addEventListener('click', trocaClass);
paleta[2].addEventListener('click', trocaClass);
paleta[3].addEventListener('click', trocaClass);
