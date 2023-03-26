import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
const index = () => {
  return (
    <>
      <Head>
        <title>Pavinee | Resume</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />
    </>
  );
};

export default index;
