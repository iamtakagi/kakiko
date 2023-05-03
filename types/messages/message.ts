import { QueryResultRow } from "@vercel/postgres";

export interface IMessage {
  id: string;
  text: string;
  createdAt: string;
}

export type Message = IMessage | QueryResultRow;
