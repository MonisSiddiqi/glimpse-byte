import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      name: 'Super Admin',
      email: 'superadmin@basf.com',
      password: 'Password@123',
      role: "SUPER_ADMIN"
    },
    {
      name: 'Admin',
      email: 'admin@basf.com',
      password: 'Password@123',
      role: "CONTENT_CREATOR"
    }
  ];

  //Adding User
  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    await prisma.user.upsert({
      where: {
        email: user.email
      },
      update: {},
      create: {
        email: user.email,
        password: await createHash(user.password),
        role: user.role as Role
      }
    })

  }
}

const createHash = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
