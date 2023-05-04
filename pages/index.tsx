import { MessageForm } from '@/components/message-form';
import { MessageTimeline } from '@/components/message-timeline';
import RefreshButton from '@/components/refresh-button';

const IndexPage: React.FC = () => {
  return (
    <div>
      <MessageForm />
      <RefreshButton />
      <MessageTimeline />
    </div>
  );
};

export default IndexPage;
