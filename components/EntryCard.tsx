import { JournalEntry } from '@prisma/client';

interface Props {
  entry: JournalEntry;
}

const EntryCard = ({ entry }: Props) => {
  const date = new Date(entry.createdAt).toDateString();

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5">{date}</div>
    </div>
  );
};

export default EntryCard;
