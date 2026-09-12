const usuarios = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 10 },
  //   { nome: "Cleber", idade: 52 },
  { nome: "Matheus", idade: 6 },
  { nome: "Suzana", idade: 22 },
  { nome: "Camila", idade: 25 },
  { nome: "Jonathan", idade: 24 },
  //   { nome: "Fernando", idade: 34 },
  { nome: "Clara", idade: 41 },
  { nome: "Bruno", idade: 18 },
];

// for (i = 0; i < usuarios.length; i++) {
//   let usuario_da_vez = usuarios[i];
//   if (usuario_da_vez.idade > 30) {
//     console.log(usuario_da_vez);
//     break;
//   }
// }

const maiorDeTrinta = usuarios.find((usuario) => usuario.idade > 30);
console.log(maiorDeTrinta);
