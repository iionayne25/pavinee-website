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
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />
      <div className="main flex flex-col gap-5 md:pb-64 pb-48  pt-24 overflow-scroll">
        <div className="flex flex-col xl:flex-row gap-5 justify-between items-center">
          <p className="text-2xl font-semibold flex-wrap text-green">
            IT Service Management Flashcard
          </p>
          <div className="flex flex-col gap-5 md:flex-row items-center pt-5">
            <Link href="/projects">
              <button
                className="bg-gray-400 w-[330px] py-3 text-base md:w-fit md:px-4 md:py-2 md:text-sm border-b-2 border-gray-600/60 hover:scale-110 rounded-full
              hover:bg-black hover:text-greenLight font-medium hover:-translate-y-1"
              >
                Back
              </button>
            </Link>
            <a href="https://justremember.vercel.app/" target="_blank">
              <button className="btnLink text-base py-3 md:text-sm w-[330px] md:w-fit md:px-4  md:py-2 ">
                Play Game
              </button>
            </a>
            <a
              href="https://github.com/yanisapths/itil-memory-game"
              target="_blank"
            >
              <button className="btnLink text-base py-3  w-[330px] md:text-sm md:w-fit md:px-4 md:py-2">
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
        <div className="hidden md:flex md:justify-center md:items-center md:pt-4">
          <iframe
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFc8D_ZvLA&#x2F;h0odzpEjCXsfhWPNryEnOA&#x2F;view?embed"
            allowFullScreen="allowFullScreen"
            allow="fullScreen"
            className="w-[800px] h-[500px]  rounded-xl"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
