import { useMessageForm } from '../hooks/useMessageForm';

export const MessageForm: React.FC = () => {
  const { text, onChangeText, onSubmit } = useMessageForm();
  return (
    <form onSubmit={e => onSubmit(e)} action="/api/messages" method="POST">
      <input
        type="text"
        name="text"
        required
        size={30}
        value={text}
        placeholder={'メッセージを入力してね'}
        onInput={(event): void => onChangeText(event)}
      />
      <button type="submit">おくる！</button>
    </form>
  );
};
