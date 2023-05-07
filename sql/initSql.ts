import { Message } from '@/types/messages';
import { QueryResult, sql } from '@vercel/postgres';

export const initSql = async (): Promise<QueryResult<Message>> => {
  const table = await sql`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      text VARCHAR(255) NOT NULL,
      createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;

  console.log(`Created "messages" table`);

  return table;
};
