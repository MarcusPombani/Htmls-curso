const mediaAluno = () => {
  let nt1 = document.getElementById(`nota1`);
  let nt2 = document.getElementById(`nota2`);
  let results = document.getElementById(`resultado`)
  let Notan1 = Number(nt1.value)
  let Notan2 = Number(nt2.value)
  let media = (Notan1 + Notan2) / 2
  results.innerHTML = `Sua mãe é, opa média é:${media}`
};
