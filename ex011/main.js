function calcularMedia() {
  let nome = prompt('Qual é o nome do aluno');
  let nota1 = +prompt(`Qual foi a primeira nota de ${nome}`);
  let nota2 = +prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}`);
  let media = (nota1 + nota2) / 2;
  let msg;

  if (media >= 5) {
    msg = 'Parabéns você foi aprovado';
  } else {
    msg = 'Infelizmente você foi reprovado, estude um pouco mais';
  }

  let saida = document.querySelector('.saida');
  saida.innerHTML += `<p>Calculando a média de ${nome}</p>`;
  saida.innerHTML += `<p>As notas obtidas foram ${nota1} e ${nota2}</p>`;
  saida.innerHTML += `<p>A média obtida foi ${media} </p>`;
  saida.innerHTML += msg;
}
