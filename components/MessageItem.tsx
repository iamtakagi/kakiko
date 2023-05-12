import { Message } from '../types/messages';
import Link from 'next/link';
import dayjs from '@/lib/external/dayjs'
import clsx from 'clsx';

interface Props {
  message: Message;
}

export const MessageItem: React.FC<Props> = ({ message }) => {
  return (
    <div key={message.id} className={clsx('pt-3')}>
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
