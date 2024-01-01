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
  const [analysis, setAnalysis] = useState(entry?.analysis);

  const { mood, summary, color, subject, negative } = analysis;

  const analysisData = [
    {
      name: 'Summary',
      value: summary,
    },
    {
      name: 'Subject',
      value: subject,
    },
    {
      name: 'Mood',
      value: mood,
    },
    {
      name: 'Negative',
      value: negative ? 'True' : 'False',
    },
  ];

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsSaving(true);
      const data = await updateEntry(entry.id, _value);
      setAnalysis(data.analysis);
      setIsSaving(false);
    },
  });

  return (
    <div className="h-full w-full grid grid-cols-3">
      <div className="h-full w-full overflow-x-hidden col-span-2">
        {isSaving ? <div>Saving...</div> : null}
        <textarea
          className="w-full h-full p-8 text-xl outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="border-l border-black/10">
        <div className="px-6 py-10" style={{ backgroundColor: color }}>
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

export default Editor;
