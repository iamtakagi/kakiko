import Head from 'next/head';
import React from 'react';

interface Props {
  title: string;
  description: string;
  ogp?: string;
}

export const Seo: React.FC<Props> = ({ title, description, ogp }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="referrer" content="origin" />
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta name="twitter:card" content={ogp ? 'summary_large_image' : 'summary'} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={'kakiko'} />
      <meta property="og:image" content={ogp ? ogp : 'https:///kakiko.vercel.app/icon.jpg'} />
      <meta property="og:url" content="https:///kakiko.vercel.app/" />
    </Head>
  );
};
