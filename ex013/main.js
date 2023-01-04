let saida = document.querySelector('.saida');

function checkEven() {
  let numb1 = +prompt(`Digite um número`);
  let numb2 = +prompt(`Digite outro número`);
  if (numb1 < numb2) {
    saida.innerHTML = `<p>Analisando os valor ${numb1} e ${numb2}, o numero ${numb2} <b>é Maior</b></p>`;
  } else if (numb1 > numb2) {
    saida.innerHTML = `<p>Analisando os valor ${numb1} e ${numb2},o numero ${numb1} <b>é Maior</b></p>`;
  } else {
    saida.innerHTML = `<p>Analisando os valor ${numb1} e ${numb2}, ambos são <b>iguais</b></p>`;
  }
}
