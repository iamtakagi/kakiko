import { Message } from "../types/messages/message";
import { QueryResultRow } from "@vercel/postgres";
import { useEffect, useState } from "react";

interface Hooks {
  message?: Message;
}

export const useFindMessageById = (id: string): Hooks => {
  const [message, setMessage] = useState<Message>();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/messages?id=${id}`);
      const data: QueryResultRow = await response.json();
      setMessage(data);
    })();
  }, [id]);

  return {
    message,
  };
};
