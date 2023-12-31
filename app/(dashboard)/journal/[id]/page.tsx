import Editor from '@/components/Editor';
import { getUserByClerkID } from '@/utils/auth';
import { prisma } from '@/utils/db';
import { JournalEntry } from '@prisma/client';

interface Props {
  params: {
    id: string;
  };
}

const getEntry = async (entryId: string): Promise<JournalEntry> => {
  const user = await getUserByClerkID();

  const entry = await prisma.journalEntry.findUniqueOrThrow({
    where: {
      userId_id: {
        userId: user.id,
        id: entryId,
      },
    },
    include: {
      analysis: true,
    },
  });

  return entry;
};

const EntryPage = async ({ params }: Props) => {
  const entry = await getEntry(params.id);

  return <Editor entry={entry} />;
};

export default EntryPage;
