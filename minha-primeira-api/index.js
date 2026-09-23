import express from "express";

const app = express(); //primeiro pilar: instancia do express
app.use(express.json());
/**
 * idLivro -> identificador / int
 * dsTitulo -> string
 * dsAutor -> string
 * fgDisponivel -> boolean
 */
let ultimo_id = 1;
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
  console.log("chamando rota GET /livros");
  res.json(livros);
});

app.get("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    //se nao for um numero
    return res
      .status(400) //requisicao mal formada
      .json({ mensagem: "o parametro precisa ser um numero valido" });
  }

  let livro = livros.find((livro) => {
    return livro.idLivro === id;
  });

  if (!livro) {
    return res.status(404).send();
  }

  res.json(livro);
});

app.post("/livros", (req, res) => {
  let autor_enviado = req.body.dsAutor;
  let titulo_enviado = req.body.dsTitulo;

  if (!autor_enviado || !titulo_enviado) {
    return res
      .status(400)
      .json({ mensagem: "dados faltando, verifique autor e titulo" });
  }

  let id_novo = ultimo_id + 1;
  ultimo_id++;

  let novo_livro = {
    idLivro: id_novo,
    fgDisponivel: true,
    dsTitulo: titulo_enviado,
    dsAutor: autor_enviado,
  };

  livros.push(novo_livro); //eu adicionei um novo livro ao " banco de dados"

  res.status(201).json(novo_livro);
});

app.listen(3000); //terceiro pilar: porta a ser ouvida

/*
cadastrar livros
  POST

buscar todos livros
buscar um livro pelo id
  GET

emprestar livro
devolver livro
  PUT/PATCH


deletar livro
  DELETE
*/
