import express from "express";

function validaParametro( parametro_a_ser_validado){
  const numero = parseInt(parametro_a_ser_validado)
  return isNaN(numero);
}
const app = express();
app.use(express.json())
const PORT = 3000;

let ultimo_id = 1
let livros = [
  { id: 1, dsTitulo: "As cronicas de narnia", dsAutor: "C.S. Lewis", fgDisponivel: true },
];


app.get("/", (req, res) => {
  res.send("rota raiz");
});

app.get("/livros", (req, res) => {
  res.json(livros);
});

app.get("/livros/:id", (req, res) => {
  if (!validaParametro(id)) {
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

    let id_novo = ultimo_id +1;
    ultimo_id++;


    let novo_livro = {
        id: id_novo,
        fgDisponivel: true,
        dsTitulo: titulo_enviado,
        dsAutor: autor_enviado,
    };
    livros.push(novo_livro)

    res.status(201).json(novo_livro)
})

app.patch('/livros/:id', (req,res) =>{
  const id = parseInt(req.params.id)
  const novo_titulo = req.body.dsTitulo;
  const novo_autor = req.body.dsAutor;


  if(isNaN(id)) {
    return res
    .status(400)
    .json({mensagem: "indentificador presisa ser um numero valido"})
  }

  let index_livro = livros.findIndex((livro)=> {
    return livro.id === id;
  })

  if (index_livro ===-1) {
    return res.sendStatus(404);
  }

  let livro_a_ser_atualizado = livros[index_livro];
  console.log("Livro antes de atualizar")
  console.log(livro_a_ser_atualizado)

  if (novo_autor !==undefined ) livro_a_ser_atualizado.dsAutor = novo_autor;
  if (novo_titulo !==undefined) livro_a_ser_atualizado.dsTitulo = novo_titulo;
  res.json(livro_a_ser_atualizado);
  console.log("Livro depois de atuaizar")
  console.log(livro_a_ser_atualizado)
});

app.patch("/livros/:id/emprestar", (req,res) => {
  const id = parseInt(req.params.id)
  emprestimo(id)
})
  const index_livro = livros.findIndex((livro) => livro.id === id);

  if (index_livro === -1) {
    return { status: 404, mensagem: "Livro não encontrado" };
  }

  if (livros[index_livro].fgDisponivel) {
    return { status: 400, mensagem: "Livro já está disponível" };
  }

  livros[index_livro].fgDisponivel = true;
  return { status: 200, livro: livros[index_livro] };


app.patch("/livros/:id/emprestar", (req, res) => {
  const id = Number(req.params.id);

  if (!validaParametro(id)) {
    return res.status(400).json({ mensagem: "o parametro deve ser um numero valido" });
  }

  const resultado = emprestimo(id);

  if (resultado.status !== 200) {
    return res.status(resultado.status).json({ mensagem: resultado.mensagem });
  }

  res.json(resultado.livro);
});

app.patch("/livros/:id/devolver", (req, res) => {
  const id = Number(req.params.id);

  if (!validaParametro(id)) {
    return res.status(400).json({ mensagem: "o parametro deve ser um numero valido" });
  }

  const resultado = devolucao(id);

  if (resultado.status !== 200) {
    return res.status(resultado.status).json({ mensagem: resultado.mensagem });
  }

  res.json(resultado.livro);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


app.listen(PORT); 


