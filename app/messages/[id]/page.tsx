import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Message } from './message.client';
import { findMessageById } from '@/lib/messages/findMessageById';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault('Asia/Tokyo');

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  const message = await findMessageById(id);
  if (!message) return notFound();

  return {
    title: `kakiko | ${message.id}: ${dayjs(message.createdAt).tz('Asia/Tokyo').format()}`,
    description: message.text,
    openGraph: {
      type: 'website',
      siteName: 'kakiko',
      title: 'kakiko',
      description: message.text,
      url: 'https:///kakiko.vercel.app/',
    },
    twitter: {
      card: 'summary',
      title: `kakiko`,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <>
      <div>
        <Message id={id} />
        <Link href={'/'}>←トップページに戻る</Link>
      </div>
    </>
  );
}
