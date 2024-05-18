-- CreateTable
CREATE TABLE `Destinos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(30) NOT NULL,
    `data` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pontos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_destino` INTEGER NOT NULL,
    `endereco` VARCHAR(255) NOT NULL,
    `telefone` VARCHAR(20) NOT NULL,
    `valor` VARCHAR(20) NULL,

    UNIQUE INDEX `Pontos_telefone_key`(`telefone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hoteis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_destino` INTEGER NOT NULL,
    `nome` VARCHAR(30) NOT NULL,
    `valor` VARCHAR(20) NOT NULL,
    `avaliacao` VARCHAR(10) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `site` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pontos` ADD CONSTRAINT `Pontos_id_destino_fkey` FOREIGN KEY (`id_destino`) REFERENCES `Destinos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hoteis` ADD CONSTRAINT `Hoteis_id_destino_fkey` FOREIGN KEY (`id_destino`) REFERENCES `Destinos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
