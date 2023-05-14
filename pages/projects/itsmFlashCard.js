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
        <meta name="description" content="This is ITSM Flashcard project page of my website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main flex flex-col gap-5 md:pb-28 pb-48  pt-20 md:pt-14">
        <div className="flex flex-col xl:flex-row gap-5 justify-end items-center lg:px-5">
          <h5 className="text-2xl font-semibold flex-wrap text-center md:hidden">
            IT Service Management Flashcard
          </h5>
          <div className="flex flex-col justify-end gap-5  md:flex-row items-center md:items-end ">
            <Link href="/projects">
              <button
                className="bg-gray-400 w-[330px] py-3 text-base md:w-fit md:px-6 md:py-1 md:text-[16px] 
                border-b-2 border-gray-600/60 hover:scale-110 rounded-full
              hover:bg-black hover:text-greenLight font-medium hover:-translate-y-1"
              >
                Back
              </button>
            </Link>
            <a href="https://justremember.vercel.app/" target="_blank">
              <button className="btnLink text-base py-3 md:text-[16px] w-[330px] md:w-fit md:px-6  md:py-1 ">
                Play Game
              </button>
            </a>
            <a
              href="https://github.com/yanisapths/itil-memory-game"
              target="_blank"
            >
              <button className="btnLink text-base py-3  w-[330px] md:text-[16px] md:w-fit md:px-6 md:py-1">
                GitHub
              </button>
            </a>
            <a
              href="https://www.canva.com/design/DAFc8D_ZvLA/h0odzpEjCXsfhWPNryEnOA/edit?utm_content=DAFc8D_ZvLA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
            >
              <button className="btnLink text-base py-3  w-[330px] md:text-sm  md:px-4 md:py-2 md:hidden ">
                Presentation
              </button>
            </a>
          </div>
        </div>
        <h5 className="hidden md:flex md:justify-center md:text-2xl md:font-semibold md:flex-wrap md:text-center ">
            IT Service Management Flashcard
          </h5>
        <div className="hidden md:flex md:justify-center md:items-center ">
          <iframe
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFc8D_ZvLA&#x2F;h0odzpEjCXsfhWPNryEnOA&#x2F;view?embed"
            allowFullScreen="allowFullScreen"
            allow="fullScreen"
            className="rounded-3xl md:w-[700px] md:h-[500px] lg:w-[750px] lg:h-[600px] xl:w-[900px]"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
