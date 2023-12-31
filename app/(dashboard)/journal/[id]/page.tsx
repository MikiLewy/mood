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
  });

  return entry;
};

const EntryPage = async ({ params }: Props) => {
  const entry = await getEntry(params.id);

  const analysisData = [
    {
      name: 'Summary',
      value: '',
    },
    {
      name: 'Subject',
      value: '',
    },
    {
      name: 'Mood',
      value: '',
    },
    {
      name: 'Negative',
      value: 'False',
    },
  ];

  return (
    <div className="h-full w-full grid grid-cols-3">
      <div className="col-span-2">
        <Editor entry={entry} />
      </div>
      <div className="border-l border-black/10">
        <div className="bg-blue-300 px-6 py-10">
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((analysis) => (
              <li
                key={analysis.name}
                className="flex items-center px-2 py-4 justify-between border-b border-t border-black/10"
              >
                <span className="text-lg font-semibold">{analysis.name}</span>
                <span>{analysis.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
