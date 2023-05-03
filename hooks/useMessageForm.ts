import { useCallback, useState } from "react";

interface Hooks {
  text: string;
  onChangeText: (event: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const useMessageForm = (): Hooks => {
  const [text, setText] = useState("");
  const onChangeText = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      if (!(event.currentTarget instanceof HTMLInputElement)) return;
      const textValue = event.currentTarget.value;
      if (typeof textValue !== "string") return;
      setText(textValue);
    },
    []
  );
  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      console.log(text);
    },
    [text]
  );
  return {
    text,
    onChangeText,
    onSubmit,
  };
};
