import { MessageItem } from '@/components/message-item';
import { Seo } from '@/components/seo';
import { useFindMessageById } from '@/hooks/useFindMessageById';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MessagePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  if (typeof id !== 'string') return <div>無効な ID です</div>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { message, loading } = useFindMessageById(id);

  if(loading) return <p>よみこみちゅう...</p>

  return (
    message && (
      <div>
        <Seo title={'kakiko'} description={message.text} />
        <MessageItem message={message}/>
        <Link href={'/'}>←トップページに戻る</Link>
      </div>
    )
  );
};

export default MessagePage;
