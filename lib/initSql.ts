import { sql } from '@vercel/postgres'

export const initSql = async () => {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      text VARCHAR(255) NOT NULL,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `
    
  console.log(`Created "messages" table`)

  return {
    createTable
  }
}
