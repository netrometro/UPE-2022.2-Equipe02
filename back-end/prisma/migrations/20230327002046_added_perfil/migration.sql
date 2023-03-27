/*
  Warnings:

  - A unique constraint covering the columns `[id_conta]` on the table `Perfil` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_conta` to the `Perfil` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Perfil" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Perfil_id_conta_key" ON "Perfil"("id_conta");

-- AddForeignKey
ALTER TABLE "Perfil" ADD CONSTRAINT "Perfil_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
