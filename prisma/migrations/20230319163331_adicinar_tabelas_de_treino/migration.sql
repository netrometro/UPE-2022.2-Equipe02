/*
  Warnings:

  - You are about to drop the column `id_conta` on the `Perfil` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Perfil" DROP CONSTRAINT "Perfil_id_conta_fkey";

-- DropIndex
DROP INDEX "Perfil_id_conta_key";

-- AlterTable
ALTER TABLE "Perfil" DROP COLUMN "id_conta";

-- CreateTable
CREATE TABLE "ExerSegunda" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "serie" TEXT,
    "repeticao" TEXT,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "ExerSegunda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerTerca" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "serie" TEXT,
    "repeticao" TEXT,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "ExerTerca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerQuarta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "serie" TEXT,
    "repeticao" TEXT,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "ExerQuarta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerQuinta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "serie" TEXT,
    "repeticao" TEXT,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "ExerQuinta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerSexta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "serie" TEXT,
    "repeticao" TEXT,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "ExerSexta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerSabado" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "serie" TEXT,
    "repeticao" TEXT,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "ExerSabado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerDomingo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "serie" TEXT,
    "repeticao" TEXT,
    "id_conta" INTEGER NOT NULL,

    CONSTRAINT "ExerDomingo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExerSegunda" ADD CONSTRAINT "ExerSegunda_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerTerca" ADD CONSTRAINT "ExerTerca_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerQuarta" ADD CONSTRAINT "ExerQuarta_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerQuinta" ADD CONSTRAINT "ExerQuinta_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerSexta" ADD CONSTRAINT "ExerSexta_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerSabado" ADD CONSTRAINT "ExerSabado_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerDomingo" ADD CONSTRAINT "ExerDomingo_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
