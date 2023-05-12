'use client';
import { MessageItem } from '@/components/MessageItem';
import { useFindMessageById } from '@/hooks/useFindMessageById';
import { notFound } from 'next/navigation';

interface Props {
  id: string;
}

export const MessageItemLoader: React.FC<Props> = ({ id }) => {
  if (typeof id !== 'string') return <p>無効な ID です</p>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { message, loading } = useFindMessageById(id);

  if (loading) return <p>よみこみちゅう...</p>;

  if (!message) return notFound();

  return <MessageItem message={message} />;
};
