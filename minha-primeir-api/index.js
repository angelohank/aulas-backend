import express from "express";
import livros from "./routes/livros-routes.js"

const app = express();

app.use(livros);

app.listen(3000);