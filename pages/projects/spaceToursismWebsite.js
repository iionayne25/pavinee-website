import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const spaceToursismWebsite = () => {
  return (
    <>
      <Head>
        <title>Pavinee | Projects</title>
        <meta
          name="description"
          content="This is space toursism website project page of my website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col gap-5 main mb-10">
        <h5 className="text-2xl font-semibold flex-wrap text-center md:hidden">
         Space Toursism Website
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
          <a
            href="https://github.com/iionayne25/space-tourism-website"
            target="_blank"
          >
            <button className="btnLink text-base py-3  w-[330px] md:text-[16px] md:w-fit md:px-6 md:py-1">
              GitHub
            </button>
          </a>
          <a href="https://space-tourism-website-by-pavinee.vercel.app/" target="_blank">
            <button className="btnLink text-base py-3  w-[330px] md:text-[16px] md:w-fit md:px-6 md:py-1">
              Visit Website
            </button>
          </a>
        </div>
        <h5 className="hidden md:flex md:text-2xl md:font-semibold md:flex-wrap md:justify-center md:text-center ">
        Space Tourism Website
        </h5>
        <div className="flex flex-col lg:flex-row gap-2 justify-center items-center">
          <div className="space-y-2 lg:w-1/2 flex flex-col gap-2 justify-center items-center">
            <Image
              src="/screenshots/space-tourism-website-home-desktop.jpg"
              width={450}
              height={500}
              alt="screenshot space-tourism-website desktop view image"
              className="rounded-xl"
            />
            <h6 className="text-[14px] text-center">Desktop View</h6>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-2 justify-center items-center">
            <div>
              <Image
                src="/screenshots/space-tourism-website-home-mobile.jpg"
                width={200}
                height={120}
                alt="screenshot sspace-tourism-website mobile view image"
                className="rounded-xl self-center"
              />
            </div>
            <div>
              <p className="text-[14px] text-center">Mobile View</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default spaceToursismWebsite;
