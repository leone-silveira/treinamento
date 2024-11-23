/*
  Warnings:

  - You are about to alter the column `age` on the `Paciente` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `age` on the `Usuarios` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gravidade" TEXT NOT NULL
);
INSERT INTO "new_Paciente" ("age", "email", "gravidade", "id", "name") SELECT "age", "email", "gravidade", "id", "name" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
CREATE UNIQUE INDEX "Paciente_email_key" ON "Paciente"("email");
CREATE TABLE "new_Usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL
);
INSERT INTO "new_Usuarios" ("age", "email", "id", "name") SELECT "age", "email", "id", "name" FROM "Usuarios";
DROP TABLE "Usuarios";
ALTER TABLE "new_Usuarios" RENAME TO "Usuarios";
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
