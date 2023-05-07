import { MessageItem } from '@/components/message-item';
import { Seo } from '@/components/seo';
import { useFindMessageById } from '@/hooks/useFindMessageById';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  if (typeof id !== 'string') return <p>無効な ID です</p>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { message, loading } = useFindMessageById(id);

  if (loading) return <p>よみこみちゅう...</p>;

  if (!message) return notFound();

  return (
    message && (
      <>
        <Seo title={'kakiko'} description={message.text} />
        <div>
          <MessageItem message={message} />
          <Link href={'/'}>←トップページに戻る</Link>
        </div>
      </>
    )
  );
}
