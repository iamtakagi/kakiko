import Link from "next/link";
import { useFetchMessages } from "../hooks/useFetchMessages";

export const MessageTimeline: React.FC = () => {
  const { messages } = useFetchMessages();
  return (
    <div>
      {messages?.map((message, i) => {
        return (
          <div key={message.id}>
          <hr />
          <Link href={`/messages/${message.id}`}>
            <p>{message.id}: {message.createdAt}</p>
          </Link>
          <p>{message.text}</p>
        </div>
        );
      })}
    </div>
  );
};
