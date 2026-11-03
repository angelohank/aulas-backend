const livros = [
    {
        id: 1, titulo: "O Senhor dos Anéis", ano: 1954,
    },
    {
        id: 2, titulo: "O Hobbit", ano: 1937,
    },
    {
        id: 3, titulo: "Harry Potter e o Prisioneiro de Azkaban", ano: 1999,
    },
    {
        id: 4, titulo: "As longas tranças de um careca", ano: 2020,
    }
];

for (let i = 0; i < livros.length; i++) {
    if (livros[i].ano < 2000) {
        console.log(livros[i].titulo);
    }
    break;
}

const livro_mais_novo = livros.find((livro) => livro.ano > 2000);
console.log(livro_mais_novo.titulo);

const posicao_livro_mais_novo = livros.findIndex((livro) => livro.ano < 1950);
console.log(posicao_livro_mais_novo);