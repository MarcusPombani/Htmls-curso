// Att1 até o numero um
let valor = 300.0;
let codigos = window.prompt(`Digite o valor promocional`);
let d1 = 0.05;
let d2 = 0.1;
let d3 = 0.15;
let d4 = 0.2;
let d5 = 0.25;
switch (codigos) {
  case `DESC1`:
    console.log(
      `O valor original era R$:${valor} com o desconto fica ${
        valor - valor * d1
      }`
    );
    break;
  case `DESC2`:
    console.log(
      `O valor original era R$:${valor} com o desconto fica ${
        valor - valor * d2
      }`
    );
  case `DESC3`:
    console.log(
      `O valor original era R$:${valor} com o desconto fica ${
        valor - valor * d3
      }`
    );
  case `DESC4`:
    console.log(
      `O valor original era R$:${valor} com o desconto fica ${
        valor - valor * d4
      }`
    );
  case `DESC5`:
    console.log(
      `O valor original era R$:${valor} com o desconto fica ${
        valor - valor * d5
      }`
    );
  default:
    console.log(`Sem desconto`);
}
// 1
let acertou = false;
while (!acertou) {
  let numero = window.prompt(`Digite um número de 1 a 10`);
  if (numero == 5) {
    console.log(`Parabéns, você acertou!`);
    acertou = true;
  } else if (numero >= 1 && numero <= 10) {
    console.log(`Tente novamente`);
  }
}