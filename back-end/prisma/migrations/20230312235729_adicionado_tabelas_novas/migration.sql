/*
  Warnings:

  - A unique constraint covering the columns `[id_conta]` on the table `Perfil` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_conta` to the `Perfil` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Perfil" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "IMC" (
    "id" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "IMC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jantar" (
    "id" SERIAL NOT NULL,
    "proteina" TEXT,
    "carboidrato" TEXT,
    "gordura" TEXT,
    "nome_alimento" TEXT,
    "quantidade" TEXT,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "Jantar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cafe" (
    "id" SERIAL NOT NULL,
    "proteina" TEXT,
    "carboidrato" TEXT,
    "gordura" TEXT,
    "nome_alimento" TEXT,
    "quantidade" TEXT,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "Cafe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lanche_manha" (
    "id" SERIAL NOT NULL,
    "proteina" TEXT,
    "carboidrato" TEXT,
    "gordura" TEXT,
    "nome_alimento" TEXT,
    "quantidade" TEXT,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "Lanche_manha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Almoco" (
    "id" SERIAL NOT NULL,
    "proteina" TEXT,
    "carboidrato" TEXT,
    "gordura" TEXT,
    "nome_alimento" TEXT,
    "quantidade" TEXT,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "Almoco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lanche_tarde" (
    "id" SERIAL NOT NULL,
    "proteina" TEXT,
    "carboidrato" TEXT,
    "gordura" TEXT,
    "nome_alimento" TEXT,
    "quantidade" TEXT,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "Lanche_tarde_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IMC_id_conta_key" ON "IMC"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "Perfil_id_conta_key" ON "Perfil"("id_conta");

-- AddForeignKey
ALTER TABLE "IMC" ADD CONSTRAINT "IMC_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perfil" ADD CONSTRAINT "Perfil_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jantar" ADD CONSTRAINT "Jantar_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cafe" ADD CONSTRAINT "Cafe_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lanche_manha" ADD CONSTRAINT "Lanche_manha_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Almoco" ADD CONSTRAINT "Almoco_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lanche_tarde" ADD CONSTRAINT "Lanche_tarde_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
