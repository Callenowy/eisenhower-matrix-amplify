import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eisenhower Matrix</title>
        <meta name="description" content="Small productivity application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2
        css={css`
          font-size: 24px;
          font-weight: 200;
        `}
      >
        Sunday, January 9th, 2022
      </h2>
    </>
  );
};

export default Home;
