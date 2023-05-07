import Link from 'next/link';
import { Message } from './message.client';

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
