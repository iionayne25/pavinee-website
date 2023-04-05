import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Document, Page, pdfjs } from "react-pdf";
import Canvas from "@/components/Canvas";
import Link from "next/link";
const index = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(29);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  return (
    <>
      <Head>
        <title>Pavinee | Projects</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />
      <div className="main flex flex-col gap-5 relative">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/oliveLogo.png"
              width="70"
              height="70"
              className="rounded-full"
            />
            <p className="text-2xl font-semibold flex-wrap">
              Physical Therapy Clnic Service Platform
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/projects">
              <button className="bg-gray-400 px-3 py-1 text-xs border-b border-gray-600/70 hover:scale-110 rounded-full
              hover:bg-black hover:text-greenLight font-medium hover:-translate-y-1">
                Back
              </button>
            </Link>
            <a href="https://github.com/yanisapths/daycare-portal" target="_blank">
              <button className="btnLink">GitHub</button>
            </a>
            <a href="" target="_blank" >
              <button className="btnLink">Poster</button>
            </a>
            <a href="" target="_blank">
              {" "}
              <button className="btnLink">Report</button>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Canvas />
        </div>
        <div>
          <div className="flex justify-center items-center gap-4 pt-2">
          <a href="https://o-live.vercel.app/" target="_blank"><button className="bg-yellow px-4 py-2 text-xs shadow-xl hover:scale-105 rounded-full hover:bg-black hover:text-yellow hover:-translate-y-1">Visit Customer App</button></a>
            <a href="https://daycare-portal.vercel.app/" target="_blank"><button className="bg-yellow px-4 py-2 text-xs shadow-xl hover:scale-105 rounded-full hover:bg-black hover:text-yellow hover:-translate-y-1">Visit Clinic Management App </button></a>
            
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
