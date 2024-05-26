-- CreateTable
CREATE TABLE `Professor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `especialidade` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aluno` (
    `ra` VARCHAR(8) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `nascimento` DATETIME(3) NOT NULL,
    `idTurma` INTEGER NOT NULL,

    PRIMARY KEY (`ra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `abreviacao` VARCHAR(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Leciona` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idProf` INTEGER NOT NULL,
    `idTurma` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_idTurma_fkey` FOREIGN KEY (`idTurma`) REFERENCES `Turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Leciona` ADD CONSTRAINT `Leciona_idProf_fkey` FOREIGN KEY (`idProf`) REFERENCES `Professor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Leciona` ADD CONSTRAINT `Leciona_idTurma_fkey` FOREIGN KEY (`idTurma`) REFERENCES `Turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
