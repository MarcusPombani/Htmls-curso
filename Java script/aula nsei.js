let carros = [
  {
    Nome: `Corsa`,
    Marca: `Chevrolet`,
    Cor: `Prata`,
    Ano: 2004,
  },
  {
    Nome2: `Gol`,
    Marca2: `Volkswagen`,
    Cor2: `Vermelho`,
    Ano2: 1998,
  },
  {
    Nome3: `Corolla`,
    Marca3: `Toyota`,
    Cor3: `Prata`,
    Ano3: 2018,
  },
  {
    Nome4: `City`,
    Marca4: `Honda`,
    Cor4: `Prata`,
    Ano4: 2018,
  },
];
console.log(carros);
let txt = JSON.stringify(carros);
console.log(typeof txt);
console.log(txt);
console.log(
  `Vamos ver qual carro é? ${carros[0].Nome} da ${carros[0].Marca} na cor ${carros[0].Cor} do ano ${carros[0].Ano}.`
);
console.log(
  `Vamos ver qual carro é? ${carros[1].Nome2} da ${carros[1].Marca2} na cor ${carros[1].Cor2} do ano ${carros[1].Ano2}.`
);
console.log(
  `Vamos ver qual carro é? ${carros[2].Nome3} da ${carros[2].Marca3} na cor ${carros[2].Cor3} do ano ${carros[2].Ano3}.`
);
console.log(
  `Vamos ver qual carro é? ${carros[3].Nome4} da ${carros[3].Marca4} na cor ${carros[3].Cor4} do ano ${carros[3].Ano4}.`
);
