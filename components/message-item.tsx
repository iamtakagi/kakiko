import { Message } from '../types/messages';
import Link from 'next/link';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import clsx from 'clsx';

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault('Asia/Tokyo');

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
