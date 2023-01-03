let saida = document.querySelector('.saida');

function checkEven() {
  let numb = +prompt(`Digite um número`);
  if (numb % 2 === 0) {
    saida.innerHTML = `<p>O numero ${numb} que foi digitado é <b>PAR</p>`;
  } else {
    saida.innerHTML = `<p>O numero ${numb} que foi digitado é <b>IMPAR</b></p>`;
  }
}
