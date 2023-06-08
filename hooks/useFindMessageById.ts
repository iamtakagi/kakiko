'use client';

import { Message } from '../types/messages';
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
      const data = (await (response.json()) as QueryResultRow);
      setMessage(data);
      setLoading(false);
    })();
  }, [id]);

  return {
    message,
    loading,
  };
};
