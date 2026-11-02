-- CreateTable
CREATE TABLE "Livros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dsTitulo" TEXT NOT NULL,
    "dsAutor" TEXT NOT NULL,
    "fgDisponivel" BOOLEAN NOT NULL DEFAULT true
);
