class Carro {
  constructor(Nome, Tpo, Categ, Ano, Marca) {
    this.Nome = Nome;
    this.Tpo = Tpo;
    this.Categ = Categ;
    this.Ano = Ano;
    this.Marca = Marca;
  }
}
let Corsa = new Carro(`Corsa`, `Sedan`, `Particular`, 2004, `Chevrolet`)
let City = new Carro(`City`, `Sedan`, `Particular`, 2018, `Honda`)

class Animal {
  constructor(Tpo, Nome, Idade, Carac, Raca) {
    this.Tpo = Tpo;
    this.Nome = Nome;
    this.Idade = Idade;
    this.Carac = Carac;
    this.Raca = Raca;
  }
}
let Nick = new Animal(`Gato`, `Nick`, 6, `Preguiçoso`, `Vira-Lata`)
let Neguin = new  Animal(`Gato`, `Felix`, 0.7, `Elétrico`, `Vira-Lata`)
console.log(`Meu pai tem um ${Corsa.Nome}, já meu tio tem um ${City.Nome}.`);
console.log(`Eu tenho dois gatos um se chama ${Nick.Nome} e outro se chama ${Neguin.Nome}.`);