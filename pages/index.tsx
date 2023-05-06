import { MessageForm } from '@/components/message-form';
import { MessageTimeline } from '@/components/message-timeline';
import RefreshButton from '@/components/refresh-button';
import { Seo } from '@/components/seo';

const IndexPage: React.FC = () => {
  return (
    <>
      <Seo title={'kakiko'} description={'最強の無料掲示板'} />
      <div>
        <MessageForm />
        <RefreshButton />
        <MessageTimeline />
      </div>
    </>
  );
};

export default IndexPage;
