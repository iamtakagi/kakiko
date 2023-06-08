'use client';

import { Message } from '../types/messages';
import { useEffect, useState } from 'react';

interface Hooks {
  messages: Message[];
  loading: boolean;
}

export const useFetchMessages = (): Hooks => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let ignore = false;
      const setIgnore = (value: boolean) => {
        ignore = value;
      };
      if (!ignore) {
        const response = await fetch('/api/messages');
        const data = (await response.json()) as Message[];
        setMessages(data);
        setLoading(false);
      }
      return () => {
        setIgnore(true);
      };
    })();
  }, []);

  return {
    messages,
    loading,
  };
};
