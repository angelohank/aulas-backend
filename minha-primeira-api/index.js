import express from 'express';

const app = express(); // primeiro pilar: instancia do express

/**
 * idlivro -> identificador / int
 * dsTitulo -> string
 * dsAutor -> string
 * fgDisponivel -> boolean
 */ 

let livros = []; //banco de dados

app.get('/', (req, res) => {
    res.send("seja bem vindo a gestão de livros");
});

app.get('/livros', (req, res) => {
    //segundo pilar: rotas
    res.send("Hello world!!");
});

app.listen(3002); //terceiro pilar

/*
cadastrar livros
    POST

buscar todos livros
buscar um livro pelo nome
buscar um livro pelo id
    GET

emprestar livro 
devolver livro
    PUT/PATCH

deletar livro
    DELETE

*/