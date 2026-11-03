let livros = [
  {
    idLivro: 1,
    dsTitulo: "as cronicas de narnia",
    dsAutor: "C S Lewis",
    fgDisponivel: true,
  },
];

let ultimoId = 1;

export function findAll() {
  return livros;
}
export function findOne(id) {
  let livro = livros.find((livro) => {
    return livro.idLivro === id;
  });

  return livro;
}
export function criarLivro(titulo, autor) {
  let novoId = ultimoId + 1;
  ultimoId++;

  let novo_livro = {
    idLivro: novoId,
    fgDisponivel: true,
    dsTitulo: titulo,
    dsAutor: autor,
  };

  livros.push(novo_livro);
  return novo_livro;
}

export function deletarLivro(id) {
  let index_livro = livros.findIndex((livro) => {
    return livro.idLivro === id;
  });

  livros.splice(index_livro, 1);
}

export function editarLivro(id, titulo, autor) {
  let index_livro = livros.findIndex((livro) => {
    return livro.idLivro === id;
  });

  if (index_livro !== -1) {
    livros[index_livro].dsTitulo = titulo;
    livros[index_livro].dsAutor = autor;
  }
}