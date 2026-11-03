import express from "express";
import livrosRouter from "./routes/livros-router";

const app = express();

app.use(express.json())
const PORT = 3005;

app.use("/livros", livrosRouter);

app.listen(PORT); 


