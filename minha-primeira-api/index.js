import express from 'express';

const app = express(); // primeiro pilar: instancia do express

app.get('/', (req, res) => {
    res.send("seja bem vindo a gestão de livros");
});

app.get('/livros', (req, res) => {
    //segundo pilar: rotas
    res.send("Hello world!!");
});

app.listen(3002); //terceiro pilar

