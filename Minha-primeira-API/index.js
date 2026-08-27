import express from 'express';

const app = express(); //Primeiro pilar: instancia do express

app.get('/livros', (req, res) => {
    //Segundo pilar: rotas
    res.send("Hello World");
});

app.listen(3000, () => {
    //Terceiro pilar: porta
    console.log("Servidor rodando na porta 3000");
});


app.get ((/)  (req, res) => {
    res.send("Bem-vindo à API de livros"),
});
