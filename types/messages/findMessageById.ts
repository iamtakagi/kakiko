import { initSql } from "@/sql/initSql";
import { sql } from "@vercel/postgres";
import { Message } from "./message";

export const findMessageById = async (id: string): Promise<Message> => {
  let data
  try {
    data = await sql`SELECT * FROM messages WHERE id = ${id};`;
  } catch (e: any) {
    if (e.message === `relation "messages" does not exist`) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      await initSql();
      data = await sql`SELECT * FROM messages WHERE id = ${id};`;
    } else {
      throw e;
    }
  }
  return Promise.resolve(data.rows[0]);
};
