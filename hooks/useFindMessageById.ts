import { Message } from '../types/messages/types';
import { QueryResultRow } from '@vercel/postgres';
import { useEffect, useState } from 'react';

interface Hooks {
  message?: Message;
  loading: boolean;
}

export const useFindMessageById = (id: string): Hooks => {
  const [message, setMessage] = useState<Message>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/messages?id=${id}`);
      const data: QueryResultRow = await response.json();
      setMessage(data);
      setLoading(false);
    })();
  }, [id]);

  return {
    message,
    loading,
  };
};
