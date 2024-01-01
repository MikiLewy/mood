import { JournalEntry } from '@prisma/client';

const createURL = (path: string) => {
  return window.location.origin + path;
};

export const updateEntry = async (
  id: string,
  content: string
): Promise<JournalEntry> => {
  const res = await fetch(new Request(createURL(`/api/journal/${id}`)), {
    method: 'PATCH',
    body: JSON.stringify({
      content,
    }),
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const { data } = await res.json();

  return data;
};

export const createEntry = async () => {
  const res = await fetch(new Request(createURL('/api/journal')), {
    method: 'POST',
  });

  if (res.ok) {
    const { data } = await res.json();

    return data;
  }
};

export const askQuestion = async (question: string) => {
  const res = await fetch(new Request(createURL('/api/question')), {
    method: 'POST',
    body: JSON.stringify({ question }),
  });

  if (res.ok) {
    const { data } = await res.json();

    return data;
  }
};
