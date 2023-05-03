import { Message } from "../types/messages/message";
import { QueryResultRow } from "@vercel/postgres";
import { useEffect, useState } from "react";

interface Hooks {
  messages: Message[];
  loading: boolean;
}

export const useFetchMessages = (): Hooks => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/messages');
      const data: Message[] = await response.json();
      setMessages(data);
      setLoading(false);
    })();
  }, []);

  return {
    messages,
    loading
  };
};