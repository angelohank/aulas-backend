import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Seja bem vind a gestão de livros!");
});
app.get('/livros', (req, res) => {
    res.send("Hello, World!");
});

app.listen(3001);