import dayjs from 'dayjs';
import { Message } from '../types/messages';
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
          {message.id}: {dayjs(message.createdAt).format()}
        </p>
      </Link>
      <p>{message.text}</p>
    </div>
  );
};
