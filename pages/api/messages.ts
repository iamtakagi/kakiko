import { findMessageById } from '@/types/messages/findMessageById';
import { NextApiRequest, NextApiResponse } from 'next';
import { insertMessage } from '@/types/messages/insertMessage';
import { selectMessages } from '@/types/messages/selectMessages';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('X-Robots-Tag', 'noindex');

  if (req.method === 'GET') {
    if (req.query && req.query['id']) {
      const { id } = req.query;
      if (typeof id !== 'string') return;
      const message = await findMessageById(id);
      res.json(message);
      return;
    }

    const data = await selectMessages();
    res.json(data.rows);
    return;
  }

  if (req.method === 'POST') {
    if (!req.body) return;
    const { text } = req.body;
    if (typeof text !== 'string') return;
    if (text.length > 30) return;
    await insertMessage(text);
    res.status(201);
    res.redirect('/');
  }
};

export default handler;
