'use client';

import { MessageForm } from '@/components/MessageForm';
import { MessageTimeline } from '@/components/MessageTimeline';
import { MoeCounter } from '@/components/MoeCounter';
import { RefreshButton } from '@/components/RefreshButton';

export default function Page() {
  return (
    <div>
      <MoeCounter />
      <MessageForm />
      <RefreshButton />
      <MessageTimeline />
    </div>
  );
}
