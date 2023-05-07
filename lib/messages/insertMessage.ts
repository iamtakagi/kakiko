import { Message } from '@/types/messages';
import { initSql } from '../../sql/initSql';
import { QueryResult, sql } from '@vercel/postgres';

export const insertMessage = async (text: string): Promise<QueryResult<Message>> => {
  let data: QueryResult<Message>;
  try {
    data = await sql`INSERT INTO messages (text) VALUES (${text});`;
  } catch (e: any) {
    if (e.message === `relation "messages" does not exist`) {
      console.log('Table does not exist, creating and seeding it with dummy data now...');
      await initSql();
      data = await sql`INSERT INTO messages (text) VALUES (${text});`;
    } else {
      throw e;
    }
  }
  return data;
};
