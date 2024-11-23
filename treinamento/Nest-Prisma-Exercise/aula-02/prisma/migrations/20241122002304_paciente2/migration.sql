/*
  Warnings:

  - You are about to drop the column `gravidade` on the `Paciente` table. All the data in the column will be lost.
  - Added the required column `telefone` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "telefone" TEXT NOT NULL
);
INSERT INTO "new_Paciente" ("age", "email", "id", "name") SELECT "age", "email", "id", "name" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
CREATE UNIQUE INDEX "Paciente_email_key" ON "Paciente"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
