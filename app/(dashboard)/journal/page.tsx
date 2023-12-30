import { getEntries } from '@/actions/entries';
import EntryCard from '@/components/EntryCard';
import NewEntryCard from '@/components/NewEntryCard';

const JournalPage = async () => {
  const entries = await getEntries();

  console.log(entries);

  return (
    <main className="p-10 bg-zinc-400/10 h-full">
      <h2 className="text-3xl mb-8 ">Journal</h2>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </main>
  );
};

export default JournalPage;
