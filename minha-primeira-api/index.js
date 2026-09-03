import express from "express";

const app = express(); //primeiro pilar: instancia do express

/**
 * idLivro -> identificador / int
 * dsTitulo -> string
 * dsAutor -> string
 * fgDisponivel -> boolean
 */

let livros = []; //banco de dados

//rota:
//metodo + caminho + funcao
app.get("/", function (req, res) {
  //rota raiz
  res.send("seja bem vindo à gestao de livros");
});

app.get("/livros", function (pergunta, resposta) {
  //segundo pilar: rotas
  resposta.send("hello world");
});

app.listen(3000); //terceiro pilar: porta a ser ouvida

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
