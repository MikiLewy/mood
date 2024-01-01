'use client';

import { askQuestion } from '@/utils/api';
import { ChangeEvent, FormEvent, useState } from 'react';

const Question = () => {
  const [value, setValue] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const answer = await askQuestion(value);
    setResponse(answer);
    setValue('');
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            value={value}
            disabled={isLoading}
            onChange={onChange}
            placeholder="Ask a question"
            className="border border-black/20 px-4 py-2 text-lg rounded-lg"
          />
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-500 px-6 py-2 rounded-lg text-lg text-white"
          >
            Ask
          </button>
        </div>
      </form>
      <div className="mt-2">
        {isLoading ? <div>loading...</div> : null}
        {response ? <div>{response} </div> : null}
      </div>
    </div>
  );
};

export default Question;
