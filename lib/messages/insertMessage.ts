import { initSql } from '../../sql/initSql';
import { sql } from '@vercel/postgres';

export const insertMessage = async (text: string): Promise<void> => {
  await initSql();
  await sql`INSERT INTO messages (text) VALUES (${text});`;
  return Promise.resolve();
};
