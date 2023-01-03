const descript = document.querySelector('.descript');

function calcular() {
  let nomeAluno = prompt('Qual é o nome do Aluno');
  let nota1 = +prompt(`Qual foi a primeira nota de ${nomeAluno}?`);
  let nota2 = +prompt(
    `Além de ${nota1}, qual foi a outra nota de ${nomeAluno}`
  );
  let media = (nota1 + nota2) / 2;
  descript.innerHTML = `Calculando a média final de ${nomeAluno}. <br> As notas obtidas foram ${nota1} e ${nota2}. <br>A média final será: ${media}.`;
}
