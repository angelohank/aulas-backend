const usuarios = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 10 },
  //   { nome: "Cleber", idade: 52 },
  { nome: "Matheus", idade: 6 },
  { nome: "Suzana", idade: 22 },
  { nome: "Camila", idade: 25 },
  { nome: "Jonathan", idade: 24 },
  //   { nome: "Fernando", idade: 34 },
  //   { nome: "Clara", idade: 41 },
  { nome: "Bruno", idade: 18 },
];

const posicao_do_primeiro = usuarios.findIndex((user) => user.idade > 30);
console.log(`[INDEX DO USER COM MAIS DE 30] ${posicao_do_primeiro}`);

if (posicao_do_primeiro > -1) {
  const user = usuarios[posicao_do_primeiro];
  console.log(user);
} else {
  console.log("registro nao encontrado");
}
