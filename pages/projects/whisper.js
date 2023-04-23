import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const index = () => {
  return (
    <>
      <Head>
        <title>Pavinee | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main pt-20 pb-[630px] md:pb-16  xl:px-4 overflow-x-hidden">
        <div className="flex flex-row justify-between items-center px-5">
          <p className="text-2xl font-semibold flex-wrap text-green">Whisper</p>
          
            <Link href="/projects">
              <button
                className="bg-gray-400 px-5 md:px-8 py-2 text-xs border-b-2 border-gray-600/60 hover:scale-110 rounded-full
              hover:bg-black hover:text-greenLight font-medium hover:-translate-y-1"
              >
                Back
              </button>
            </Link>
          
        </div>
        <div className="pt-4 self-center">
          <a
            href="https://www.canva.com/design/DAFbxV7U6do/net4PfJ8bqi5YmkuWROyEQ/view?utm_content=DAFbxV7U6do&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
          >
            <button className="btnLink text-base py-3 w-[330px] md:text-sm  md:px-4 md:py-2 md:hidden ">
              Presentation
            </button>
          </a>
        </div>

        <div className="hidden md:flex md:justify-center md:items-center">
          <iframe
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFbxV7U6do&#x2F;8r6bt2ycgHBV1cpy_0erIg&#x2F;view?embed"
            allowFullScreen="allowFullScreen"
            allow="fullScreen"
            className="rounded-3xl md:w-[700px] md:h-[500px] lg:w-[750px] lg:h-[600px] xl:w-[900px]"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
