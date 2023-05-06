import Link from 'next/link';
import { useFetchMessages } from '../hooks/useFetchMessages';
import { MessageItem } from './message-item';

export const MessageTimeline: React.FC = () => {
  const { messages, loading } = useFetchMessages();

  if (loading) return <p>よみこみちゅう...</p>;

  return (
    <div>
      {messages?.map((message, i) => {
        return <MessageItem key={message.id} message={message} />;
      })}
    </div>
  );
};
