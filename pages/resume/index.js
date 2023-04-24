import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import BtnDownload from "@/components/btnDownload";
import Footer from "@/components/Footer";
import { Document, Page, pdfjs } from "react-pdf";
import iframe from "iframe";
import ResumeFrame from "@/components/ResumeFrame";
import BtnViewResume from "@/components/BtnViewResume";

const index = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Head>
        <title>Pavinee | Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="main pt-12 my-4 pb-0 h-screen md:h-full xl:pt-32 xl:pb-10 w-screen overflow-clip md:overflow-none ">
        <div className="my-4 flex flex-col gap-3 items-center md:hidden">
          <BtnDownload />
          <BtnViewResume/>
        </div>

        <Image
          src="/deco4.png"
          width={450}
          height={200}
          className="hidden md:relative  md:-bottom-[450px]  xl:-bottom-[520px] "
        />
        <Image
          src="/circle3.svg"
          width={400}
          height={400}
          className="relative top-0 -left-32 xl:top-[300px]  rounded-full xl:left-[1000px] "
        />

        <div className="hidden md:flex md:justify-center md:items-center h-screen ">
        <ResumeFrame />
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default index;
