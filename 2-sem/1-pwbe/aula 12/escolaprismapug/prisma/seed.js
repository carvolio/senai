const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const proData = require('./proData.json');

async function main() {
    console.log('Start Seeding...');
  
    for (const p of proData) {
        const professor = await prisma.professor.create({
            data: p
        });
        console.log(professor.id);
    }
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })