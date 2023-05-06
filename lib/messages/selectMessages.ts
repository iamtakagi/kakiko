import { initSql } from '../../sql/initSql';
import { QueryResult, QueryResultRow, sql } from '@vercel/postgres';

export const selectMessages = async (): Promise<QueryResult<QueryResultRow>> => {
  let data: QueryResult<QueryResultRow>;
  try {
    data = await sql`SELECT * FROM messages ORDER BY id DESC;`;
  } catch (e: any) {
    if (e.message === `relation "messages" does not exist`) {
      console.log('Table does not exist, creating and seeding it with dummy data now...');
      await initSql();
      data = await sql`SELECT * FROM messages ORDER BY id DESC;`;
    } else {
      throw e;
    }
  }
  return Promise.resolve(data);
};
