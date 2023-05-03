import { useFindMessageById } from "@/hooks/useFindMessageById";
import Link from "next/link";
import { useRouter } from "next/router";

const MessagePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  if (typeof id !== "string") return <div>無効な ID です</div>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { message } = useFindMessageById(id);

  if(!message) return <></>

  return (
    message && (
      <div>
        <Link href={`/messages/${message.id}`}>
          <p>
            {message.id}: {message.createdAt}
          </p>
        </Link>
        <p>{message.text}</p>
        <Link href={'/'}>←トップページに戻る</Link>
      </div>
    )
  );
};

export default MessagePage;
