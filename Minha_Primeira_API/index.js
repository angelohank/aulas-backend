import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Seja bem vind a gestão de livros!");
});
app.get('/livros', (req, res) => {
    res.send("Hello, World!");
});

app.listen(3001);

let pi = parseFloat("3.14");
console.log(typeof pi);
console.log(pi);