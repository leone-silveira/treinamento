-- CreateTable
CREATE TABLE "Medico" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "telefone" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Medico_email_key" ON "Medico"("email");
