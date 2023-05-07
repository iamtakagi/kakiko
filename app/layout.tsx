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