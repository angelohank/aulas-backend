

const lista_de_cangurus = [
    {nome: "Jonas", idade: 5, cor: "marrom"},
    {nome: "Joaquim", idade: 3, cor: "cinza"},
    {nome: "Malena", idade: 4, cor: "cinza"},
    {nome: "Jucimara", idade: 6, cor: "marrom"},
    {nome: "Joaquina", idade: 2, cor: "marrom"},
    {nome: "Bartolomeu", idade: 1, cor: "cinza"}
];

for (i = 0; i < lista_de_cangurus.length; i++) {
    let canguru_da_vez = lista_de_cangurus[i];
    if (canguru_da_vez.idade >= 6) {
        console.log("Canguru velho encontrado: " + canguru_da_vez.nome);
        break;
    }
};

// const maiorDeIdade = lista_de_cangurus.find((canguru) => canguru.idade >= 6);
// console.log(maiorDeIdade);