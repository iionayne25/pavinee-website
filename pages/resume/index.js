import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import BtnDownload from "@/components/btnDownload";
import Footer from "@/components/Footer";
import { Document, Page, pdfjs } from "react-pdf";
import iframe from "iframe";
import ResumeFrame from "@/components/ResumeFrame";

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
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header/>

      <div className="main pt-12 my-4  xl:pt-32 xl:pb-10  w-screen ">
        <Image
          src="/deco4.png"
          width={450}
          height={450}
          className="relative -bottom-[440px] md:-bottom-[470px] xl:-bottom-[520px] -left-5 "
        />
        <Image
          src="/circle3.svg"
          width={400}
          height={400}
          className="relative -top-10 right-40 xl:-top-[300px]  rounded-full xl:left-[850px] "
        />
        
       <ResumeFrame />
      </div>
      <Footer />
    </>
  );
};

export default index;
