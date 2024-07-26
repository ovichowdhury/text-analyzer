import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.texts.upsert({
    where: { id: 1 },
    update: {},
    create: {
      text: 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.',
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
