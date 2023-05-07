import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'kakiko',
  description: '最強の無料掲示板',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    siteName: 'kakiko',
    title: 'kakiko',
    description: '最強の無料掲示板',
    url: 'https:///kakiko.vercel.app/',
  },
  twitter: {
    card: 'summary',
    title: `kakiko`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <main className="relative flex min-h-screen flex-col items-center justify-center">
          <h1 className="pt-4 pb-8 justify-start">kakiko (むりょうのけいじばん)</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
