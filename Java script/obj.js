let pessoa = {
  nome: `Marcus`,
  sobrenome1: `Vinícius`,
  sobrenome2: `Pombani`,
  sobrenome3: `Dias`,
  idade: 17,
  endereço: {
    rua:`Rua Bandiuaçu`,
    numero: 81,
  },
  hobbies: `Vídeo-games e desenhar.`,
};
console.log(
  `Meu nome é ${pessoa.nome} ${pessoa.sobrenome1} ${pessoa.sobrenome2} ${pessoa.sobrenome3}, eu tenho ${pessoa.idade} anos, eu moro em ${pessoa.endereço.rua}, ${pessoa.endereço.numero}, meus hobbies são ${pessoa.hobbies}`
);
console.log(typeof pessoa);