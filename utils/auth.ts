import { prisma } from '@/utils/db';
import { auth } from '@clerk/nextjs';
import { User } from '@prisma/client';

export const getUserByClerkID = async (): Promise<User> => {
  const { userId } = auth();

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string,
    },
  });

  return user;
};
