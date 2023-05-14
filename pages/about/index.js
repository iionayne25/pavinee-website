import React from "react";
import Head from "next/head";
import Header from "@/components/Header";

import Footer from "@/components/Footer";
import Summary from "@/components/Summary";
const index = () => {
  return (
    <>
      <Head>
        <title>Pavinee | About</title>
        <meta name="description" content="This is about page of my website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main px-10 pb-20">
        <Summary/>
      </main>
      <Footer />
    </>
  );
};

export default index;
