const descript = document.querySelector('.descript');

function clicar() {
  nome = prompt('Qual é o seu nome: ');
  descript.innerHTML = `Olá <b>${nome}</b>! É um grande prazer te conhecer 🖖🏻`;
}
