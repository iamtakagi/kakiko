import React from 'react';

const App: React.FC<{
  Component: React.FC;
  pageProps: any;
}> = ({ Component, pageProps }) => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="pt-4 pb-8 justify-start">kakiko (むりょうのけいじばん)</h1>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
