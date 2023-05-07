import { findMessageById } from '@/lib/messages/findMessageById';
import { NextApiRequest, NextApiResponse } from 'next';
import { insertMessage } from '@/lib/messages/insertMessage';
import { selectMessages } from '@/lib/messages/selectMessages';

export default async function NextApiHandler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('X-Robots-Tag', 'noindex');
  switch (req.method) {
    case 'GET':
      if (req.query && req.query['id']) {
        const { id } = req.query;
        if (typeof id !== 'string') return;
        const message = await findMessageById(id);
        res.json(message);
        break;
      }
      const data = await selectMessages();
      res.json(data.rows);
      break;
    case 'POST':
      if (!req.body) return;
      const { text } = req.body;
      if (typeof text !== 'string') return;
      if (text.length > 100) return;
      await insertMessage(text);
      res.redirect(303, '/');
      break;
    default:
      res.status(405).end();
      break;
  }
}
