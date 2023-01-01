alert('Seja bem-vindo(a) ao meu site!');

const descript = document.querySelector('.descript');

function calcular() {
  let numero1 = prompt('Digite um número: ');
  let dobro = numero1 * 2;
  let metade = numero1 / 2;
  descript.innerHTML = `O dobra de ${numero1} é ${dobro} e a metade é ${metade}`;
}
