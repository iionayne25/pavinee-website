import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import BtnDownload from "@/components/btnDownload";
import Footer from "@/components/Footer";
import ResumeFrame from "@/components/ResumeFrame";
import BtnViewResume from "@/components/BtnViewResume";

const index = () => {
  return (
    <>
      <Head>
        <title>Pavinee | Resume</title>
        <meta name="description" content="This is resume page of my website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="main  my-4 pb-0 h-screen md:h-full lg:my-10 lg:pb-10 xl:pt-16 xl:pb-10 w-screen overflow-clip md:overflow-none ">
        <div className="my-4 flex flex-col gap-3 items-center md:hidden">
          <BtnDownload />
          <BtnViewResume/>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center h-screen ">
        <ResumeFrame />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
