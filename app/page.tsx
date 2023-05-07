'use client';

import { MessageForm } from '@/components/message-form';
import { MessageTimeline } from '@/components/message-timeline';
import { MoeCounter } from '@/components/moe-counter';
import RefreshButton from '@/components/refresh-button';

export default async function Page() {
  return (
    <div>
      <MoeCounter />
      <MessageForm />
      <RefreshButton />
      <MessageTimeline />
    </div>
  );
}
