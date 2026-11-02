import { prisma } from "../client.js";

let livros = [
  {
    idLivro: 1,
    dsTitulo: "as cronicas de narnia",
    dsAutor: "C S Lewis",
    fgDisponivel: true,
  },
];

let ultimoId = 1;

export async function findAll() {
  const livrosEncontrados = await prisma.livros.findMany();
  return livrosEncontrados;
}
export async function findOne(idLivro) {
  const livro = await prisma.livros.findUnique({
    where: {
      id: idLivro,
    },
  });

  return livro;
}
export async function criarLivro(titulo, autor) {
  const livroCriado = await prisma.livros.create({
    data: {
      dsTitulo: titulo,
      dsAutor: autor,
    },
  });

  return livroCriado;
}

export async function deletarLivro(idLivro) {
  const livroDeltado = await prisma.livros.delete({
    where: {
      id: idLivro,
    },
  });
}
function editarLivro() {}
