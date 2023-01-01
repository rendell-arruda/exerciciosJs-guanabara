const descript = document.querySelector('.descript');

function calcular() {
  let numero1 = +prompt('Digite um número: ');
  let numero2 = +prompt('Digite outro número: ');
  let soma = numero1 + numero2;
  descript.innerHTML = `O soma entre ${numero1} e ${numero2} é igual a <b> ${soma}</b>`;
}
