let pr1 = document.querySelector(`#submit_calc`);
const resultado = () => {
  let alt = document.querySelector(`#altura_input`);
  let pes = document.querySelector(`#peso_input`);
  let results = document.querySelector(`#results`);
  let Num1 = Number(alt.value.replace(",", "."));
  let Num2 = Number(pes.value.replace(",", "."));
  let Imc = Num2 / (Num1 * Num1);
  results.innerHTML = `Seu IMC é: ${Imc.toFixed(2)}`;
};
pr1.addEventListener("click", resultado);