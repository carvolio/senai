# venturas & Cia

### Projeto de agencia de viagems desenvolvido com javascript, nodeJS, prisma e SASS, no padrão de desenvolvimento MVC.

## Guia de Instalação

1. cmd: npm i -g prisma
2. cmd: npm i @prisma/client espress cors
3. cmd: prisma init --datasource-provider mysql
4. viagens/.env: DATABASE_URL="mysql://root:@localhost:3306/nome_banco_de_dados?schema=public&timezone=UTC"
5. cmd: prisma migrate dev --name init
6. cmd: nodemon
7. viagens/front/index.html: live server 