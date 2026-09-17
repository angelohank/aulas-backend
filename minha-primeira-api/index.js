import express from "express";

const app = express(); //primeiro pilar: instancia do express

/**
 * idLivro -> identificador / int
 * dsTitulo -> string
 * dsAutor -> string
 * fgDisponivel -> boolean
 */

let livros = [
  {
    idLivro: 1,
    dsTitulo: "as cronicas de narnia",
    dsAutor: "C S Lewis",
    fgDisponivel: true,
  },
]; //banco de dados

app.get("/", function (req, res) {
  res.send("seja bem vindo à gestao de livros");
});

app.get("/livros", function (req, res) {
  res.json(livros);
});

app.get("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "o parametro precisa ser um numero valido" });
  }
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
