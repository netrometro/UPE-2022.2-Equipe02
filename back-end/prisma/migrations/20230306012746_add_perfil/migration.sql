-- CreateTable
CREATE TABLE "Perfil" (
    "id" SERIAL NOT NULL,
    "idade" TEXT NOT NULL,
    "peso" TEXT NOT NULL,
    "altura" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "fatorAtividade" TEXT NOT NULL,

    CONSTRAINT "Perfil_pkey" PRIMARY KEY ("id")
);
