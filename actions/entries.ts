import { getUserByClerkID } from '@/actions/user';
import { prisma } from '@/utils/db';

export const getEntries = async () => {
  const user = await getUserByClerkID();

  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return entries;
};
