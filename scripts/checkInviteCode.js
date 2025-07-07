const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    const organizations = await prisma.organization.findMany({
      select: {
        name: true,
        inviteCode: true,
      },
    });

    console.log('Organizations and their invite codes:', organizations);
  } catch (error) {
    console.error('Error fetching organizations:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
