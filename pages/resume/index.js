import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import BtnDownload from "@/components/btnDownload";
import BtnView from "@/components/BtnView";
import Footer from "@/components/footer";

const index = () => {
  return (
    <>
      <Head>
        <title>Pavinee | Resume</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header/>
     
        <div className="pt-4 my-4 h-screen relative">
          <Image
            src="/deco4.png"
            width={450}
            height={450}
            className="relative -bottom-24 left-0 "
          />
          <Image
            src="/circle3.svg"
            width={400}
            height={400}
            className="relative -top-[500px] rounded-full -left-14 "
          />
          <Image
            src="/circle4.svg"
            width={500}
            height={500}
            className="relative left-[690px] rounded-full -top-[700px] "
          />
          <div className="absolute top-0 left-80 ">
          <div className="flex justify-center items-start  gap-10 ">
            <div className="border-green items-center top-5 h-screen overflow-scroll scrollbar-hide  border-8 rounded-xl bg-white ">
              <Image
                src="/resume.jpg"
                alt="Resume of Pavinee Suthamjeam"
                width={430}
                height={100}
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <BtnDownload />
              <a href="files/ResumePDF.pdf" target="_blank">
                {" "}
                <BtnView />
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
