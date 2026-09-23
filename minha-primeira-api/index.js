import express from "express";

const app = express();//Primeiro pilar: instancia do express
app.use(express.json())
const PORT = 3000;

let ultimo_id = 1
let livros = [
  { id: 1, dsTitulo: "As cronicas de narnia", dsAutor: "C.S. Lewis" },
]; // banco de dados

// metodos + caminhos + funcção
app.get("/", (req, res) => {
  res.send("rota raiz");
});

app.get("/livros", (req, res) => {
  res.json(livros);
});

app.get("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "o parametro deve ser um numero valido" });
  }
console.log(livros)
  //find
  let livro = livros.find((livro)=>{
    return livro.id === id;
  });

  if (!livro){
    return res.status(404).send()
  }

  res.json(livro);
});

app.post("/livros", (req,res) => {
    let autor_enviado = req.body.dsautor
    let titulo_enviado = req.body.dstitulo


    if (!autor_enviado || !titulo_enviado) {
        return res.status(400)
        .json({mensagem: "dados faltando, verifique autor e titulo"})
    }

    let id_novo = ultimo_id +1
    ultimo_id++


    let novo_livro = {
        idLivro: id_novo,
        fgDisponivel: true,
        dsTitulo: titulo_enviado,
        dsAutor: autor_enviado,
    };
    livros.push(novo_livro)// eu adicionei um novo livro ao banco de dados

    res.status(201).json(novo_livro)
})

app.listen(PORT); // porta a ser ouvida

/*
cadastrarm livros
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
