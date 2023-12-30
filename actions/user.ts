import { prisma } from '@/utils/db';
import { auth, currentUser } from '@clerk/nextjs';
import { User } from '@prisma/client';
import { redirect } from 'next/navigation';

export const getUserByClerkID = async (): Promise<User> => {
  const { userId } = auth();

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string,
    },
  });

  return user;
};

export const createNewUser = async () => {
  const user = await currentUser();

  if (!user) {
    return;
  }

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
      },
    });
  }

  redirect('/journal');
};
