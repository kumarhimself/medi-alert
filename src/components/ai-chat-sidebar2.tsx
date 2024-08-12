'use client';

import { useChat } from 'ai/react';

export default function Chat() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  // fixed bottom-0 w-full flex justify-center mb-8

  return (
    <div className="flex flex-col w-full max-w-md pt-10 pb-24">
      {messages.map(m => (
        <div key={m.id} className="w-full whitespace-pre-wrap my-2 mx-5 bg-red-100">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <div className="">
        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 mx-auto border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}


