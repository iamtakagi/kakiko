'use client'

import { MessageForm } from "@/components/message-form";
import { MessageTimeline } from "@/components/message-timeline";
import RefreshButton from "@/components/refresh-button";

export default async function Page() {
    return (
        <div>
          <MessageForm />
          <RefreshButton />
          <MessageTimeline />
        </div>
    );
  }