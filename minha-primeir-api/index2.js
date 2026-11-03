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
  res.send("Seja bem vindo à gestao de livros");
});

app.get("/livros", function (req, res) {
  res.json(livros);
});

app.get("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "identificador deve ser um numero" });
  }

  let livro = livros.find((livro) => {
    return livro.idLivro === id;
  });

  if (livro === undefined) {
    return res.status(404).send();
  }

  let array = [livro];
  res.json(array);
});

app.post("/livros", (req, res) => {
  let autor_enviado = req.body.dsAutor;
  let titulo_enviado = req.body.dsTitulo;

  console.log(req.body);

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

app.delete("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "identificador deve ser um numero" });
  }

  let index_livro = livros.findIndex((livro) => {
    return livro.idLivro === id;
  });

  if (index_livro === -1) {
    return res.status(404).send();
  }

  livros.splice(index_livro, 1);

  res.sendStatus(204);
});

app.patch("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const novo_titulo = req.body.dsTitulo;
  const novo_autor = req.body.dsAutor;

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "identificador precisa ser um numero valido" });
  }

  let index_livro = livros.findIndex((livro) => {
    return livro.idLivro === id;
  });

  if (index_livro === -1) {
    return res.sendStatus(404);
  }

  let livro_a_ser_atualizado = livros[index_livro];

  if (novo_autor !== undefined) {
    livro_a_ser_atualizado.dsAutor = novo_autor;
  }

  if (novo_titulo !== undefined) {
    livro_a_ser_atualizado.dsTitulo = novo_titulo;
  }

  res.sendStatus(204);
});

app.patch("/livros/:id/emprestar", (req, res) => {
  const id = parseInt(req.params.id);

  let index_livro = livros.findIndex((livro) => {
    return livro.idLivro === id;
  });

  if (index_livro === -1) {
    return res.sendStatus(404);
  }

  livros[index_livro].fgDisponivel = false;

  res.status(200).json(livros[index_livro]);
});


app.patch("/livros/:id/devolver", (req, res) => {
  const id = parseInt(req.params.id);

  let index_livro = livros.findIndex((livro) => {
    return livro.idLivro === id;
  });

  if (index_livro === -1) {
    return res.sendStatus(404);
  }

  livros[index_livro].fgDisponivel = true;

  res.status(200).json(livros[index_livro]);
});
app.listen(3000); //terceiro pilar: porta a ser ouvida
ldsadklmaskld
/* 
cadastrar um livros
post

buscar todos livros
get

buscar um livro pelo nome
get

buscar um livro pelo id
get

emprestar livros
put/patch

devolver livros
put/patch

deletar livros
delete
*/
