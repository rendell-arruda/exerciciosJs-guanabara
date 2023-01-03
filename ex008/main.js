const descript = document.querySelector('.descript');

function calcular() {
  let numero = prompt(`Digite um número`);
  descript.innerHTML = `O número a ser analisado será o ${numero}. <br>
  Seu valor absoluto é ${Math.abs(numero)}<br>
  A sua parte inteira é : ${Math.trunc(numero)}.<br>
  O valor inteiro mais próximo é : ${Math.round(numero)}.<br>
  A sua raiz quadrada é: ${Math.sqrt(numero).toFixed(2)}<br>
  A sua raiz cubica é: ${Math.cbrt(numero).toFixed(2)}<br>
  O valor de ${numero}<sup>2</sup> é: ${Math.pow(numero, 2).toFixed(2)}<br>
  O valor de ${numero}<sup>3</sup> é: ${Math.pow(numero, 3).toFixed(2)}<br>`;
}
