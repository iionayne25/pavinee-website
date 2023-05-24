import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import BtnDownload from "@/components/btnDownload";
import Footer from "@/components/Footer";
import ResumeFrame from "@/components/ResumeFrame";
import BtnViewResume from "@/components/BtnViewResume";
import ImageCollection from "@/components/ImageCollection";
const index = () => {
  return (
    <>
      <Head>
        <title>Pavinee | Resume</title>
        <meta name="description" content="This is resume page of my website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="main h-full my-4 pb-0  md:h-screen lg:my-10 lg:pb-10 w-screen overflow-y-scroll scroll-smooth xl:my-0 ">
        <ImageCollection/>

      </main>
      <Footer />
    </>
  );
};

export default index;
