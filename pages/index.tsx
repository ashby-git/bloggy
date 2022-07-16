import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Bloggy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is Bloggy</h1>
    </div>
  );
};

export default Home;
