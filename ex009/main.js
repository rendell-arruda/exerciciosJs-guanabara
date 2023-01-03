// const descript = document.querySelector('.descript');
// descript.innerHTML = `O contador está com 0 cliques`;

// var contador = 0;
// function contar() {
//   contador += 1;
//   descript.innerHTML = `O contador está com ${contador} cliques`;
// }

// function zerar() {
//   contador = 0;
//   descript.innerHTML = `O contador está com 0 cliques`;
// }

let contador = 0;
let descript = document.querySelector('.descript');

function contar() {
  contador++;
  descript.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques</p>`;
}

function zerar() {
  contador = 0;
  descript.innerHTML = null;
}
