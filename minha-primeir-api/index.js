import express from "express";

const app = express(); //primeiro pilar: instancia do express

//app.get("/livros"); // primeiro a variavel depois o metodo http mapeando uma rota =>("/rota")

app.get("/", (req, res) => {
    res.send("Seja bem-vindo(a) á gestão de livros")
});

app.get("/livro", (req, res) => {
    res.send("Sejá bem-vindo(a) biblíoteca virtual >,<")
});

app.get("/livros", function(req,res) {
    //segundo pilar: rotas
    res.send("Hello World")
}); //req = requisição envelope pergunta (vai ter quem chamou o tipo do console e etc) res = resposta envelope resposta {o que a função vai fazer}

app.listen(3000); //definir a porta terceiro pilar: porta a ser ouvida