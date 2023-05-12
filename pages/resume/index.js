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

      <div className="main  my-4 pb-0 h-screen md:h-full lg:my-10 lg:pb-10 xl:pt-16 xl:pb-10 w-screen overflow-clip md:overflow-none ">
        <div className="my-4 flex flex-col gap-3 items-center md:hidden">
          <BtnDownload />
          <BtnViewResume/>
        </div>

        <div className="hidden md:flex md:justify-center md:items-center h-screen ">
        <ResumeFrame />
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default index;
