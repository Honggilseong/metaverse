import React, { useRef } from 'react';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import Message from './Message';
import SendMessage from './SendMessage';

const MINS_DURATION = 15;
function Messages() {
  const { user } = useMoralis();
  const endOfMessasgeRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * MINS_DURATION),
        ),
    [],
    { live: true },
  );
  return (
    <div className="pb-56">
      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessasgeRef={endOfMessasgeRef} />
      </div>
      <div ref={endOfMessasgeRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}</p>
      </div>
    </div>
  );
}

export default Messages;
