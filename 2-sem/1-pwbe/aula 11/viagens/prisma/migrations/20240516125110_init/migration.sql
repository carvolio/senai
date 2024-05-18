/*
  Warnings:

  - Added the required column `valor` to the `Destinos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `destinos` ADD COLUMN `valor` VARCHAR(20) NOT NULL;
