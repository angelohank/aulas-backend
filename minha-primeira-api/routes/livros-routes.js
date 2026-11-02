import Router from "express";
import {
  criarLivro,
  deletarLivro,
  findAll,
  findOne,
} from "../controllers/livros-controller.js";
import { verificaAdmin } from "../controllers/usuarios-controller.js";
const router = Router();

router.get("/", async (req, res) => {
  const todosOsLivros = await findAll();

  console.log(todosOsLivros);
  res.json(todosOsLivros);
});
router.get("/:id", async (req, res) => {
  const idLivro = parseInt(req.params.id);

  if (isNaN(idLivro)) {
    return res
      .status(400)
      .json({ mensagem: "identificador deve ser um numero" });
  }

  let livro = await findOne(idLivro);

  if (!livro) {
    return res.status(404).send();
  }

  res.json(livro);
});

router.post("/", async (req, res) => {
  let autor_enviado = req.body.dsAutor;
  let titulo_enviado = req.body.dsTitulo;

  if (!autor_enviado || !titulo_enviado) {
    return res
      .status(400)
      .json({ mensagem: "dados faltando, verifique autor e titulo" });
  }
  //antes de criar, temos que verificar, se o usuario que fez a chamada, eh admin

  // let auth = req.headers.authorization; //Basic Y2FybG9z

  // if (!auth) {
  //   return res.status(401).send();
  // }

  // //split
  // let username = auth.split(" ")[1]; //aqui eu tenho o nome de usuario

  // let ehAdmin = verificaAdmin(username);
  // if (!ehAdmin) {
  //   return res.status(403).send();
  // }

  let livro_criado = await criarLivro(titulo_enviado, autor_enviado);
  if (!livro_criado) {
    return res.status(500).json({ mensagem: "algo deu errado" });
  }

  return res.status(201).json(livro_criado);
});

router.delete("/:id", async (req, res) => {
  const idLivro = parseInt(req.params.id);

  if (isNaN(idLivro)) {
    return res
      .status(400)
      .json({ mensagem: "identificador deve ser um numero" });
  }

  let livro = await findOne(idLivro);
  if (!livro) {
    return res.status(404).send();
  }

  await deletarLivro(idLivro);
  return res.status(204).send();
});
router.patch("/:id", (req, res) => {});
export default router;
