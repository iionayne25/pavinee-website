import React,{useState} from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import BtnDownload from "@/components/btnDownload";
import Footer from "@/components/Footer";
import { Document, Page, pdfjs } from "react-pdf";
import iframe from "iframe";

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
     
        <div className=" pt-4 my-4 xl:mb-28 h-screen w-screen relative">
          <Image
            src="/deco4.png"
            width={450}
            height={450}
            className="relative -bottom-[490px] md:-bottom-[470px] xl:-bottom-48 xl:left-0 "
          />
          <Image
            src="/circle3.svg"
            width={400}
            height={400}
            className="relative xl:-top-[500px] rounded-full xl:-left-14 "
          />
          <div className="absolute top-28 left-10 xl:top-14  md:top-20 md:left-20  lg:left-48 xl:left-[420px]">
          <div className="flex flex-col justify-center items-center  gap-5 ">
         
            <div className="items-center top-2 border-8 border-green rounded-2xl ">
              <iframe src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFfzyCTXwk&#x2F;Iy6pVmFEaGZTVB8HAmOYzA&#x2F;view?embed" allowFullScreen="allowFullScreen" allow="fullScreen" 
              className='h-[400px] md:w-[550px]  md:h-[700px] m xl:w-[450px] xl:h-[480px] rounded-xl'></iframe>
            </div>
            <div className="flex gap-2">
              <BtnDownload />
              <a href="/files/ResumePDF.pdf" target="_blank">
                {" "}
               
              </a>
            </div>
          </div>
        </div>
        </div>
      <Footer />
    </>
  );
};

export default index;
