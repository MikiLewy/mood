'use client';

import { updateEntry } from '@/utils/api';
import { JournalEntry } from '@prisma/client';
import { useState } from 'react';
import { useAutosave } from 'react-autosave';

interface Props {
  entry: JournalEntry;
}

const Editor = ({ entry }: Props) => {
  const [value, setValue] = useState(entry.content);
  const [isSaving, setIsSaving] = useState(false);

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsSaving(true);
      const updatedEntry = await updateEntry(entry.id, _value);
      setIsSaving(false);
    },
  });

  return (
    <div className="h-full w-full overflow-x-hidden">
      {isSaving ? <div>Saving...</div> : null}
      <textarea
        className="w-full h-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Editor;
