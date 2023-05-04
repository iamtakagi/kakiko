import { Message } from '../types/messages/types';
import Link from 'next/link';

interface Props {
  message: Message;
}

export const MessageItem: React.FC<Props> = ({ message }) => {
  return (
    <div key={message.id}>
      <hr />
      <Link href={`/messages/${message.id}`}>
        <p>
          {message.id}: {message.createdAt}
        </p>
      </Link>
      <p>{message.text}</p>
    </div>
  );
};
