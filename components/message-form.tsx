'use client';
import { useMessageForm } from '../hooks/useMessageForm';
import clsx from 'clsx';

export const MessageForm: React.FC = () => {
  const { text, onChangeText, onSubmit } = useMessageForm();
  return (
    <form onSubmit={e => onSubmit(e)} action="/api/messages" method="POST" className={clsx('mt-3')}>
      <input
        type="text"
        name="text"
        required
        size={50}
        maxLength={100}
        value={text}
        placeholder={'メッセージを入力してね'}
        onInput={(event): void => onChangeText(event)}
        className={clsx('border-2', 'border-slate-300', 'focus:border-blue-600', 'rounded')}
      />
      <button
        type="submit"
        className={clsx(
          'ml-2',
          'pl-2',
          'pr-2',
          'border',
          'border-slate-300',
          'hover:border-indigo-300',
          'rounded',
        )}
      >
        カキコ❕
      </button>
    </form>
  );
};
