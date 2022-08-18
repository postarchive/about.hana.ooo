import { NextPage } from "next";
import Head from "next/head";

import Index from "@/components/Index";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Hana</title>
        <meta
          name="description"
          content="내일을 위한 더 나은 오늘을 만들어가는 곳"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Index />
    </>
  );
};

export default Home;
