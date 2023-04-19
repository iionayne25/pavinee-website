import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import TimelineCard from "@/components/TimelineCard";
import BtnDownload from "../components/btnDownload";
import BtnProject from "../components/btnProject";
import Link from "next/link";
import Footer from "@/components/Footer";
import TimelineList from "@/components/TimelineList";
export default function Home() {
  return (
    <>
      <Head>
        <title>Pavinee | Home</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />
      <div className="main flex flex-col justify-center items-center ">
        <div className=" flex flex-col ">
          <div className="flex flex-col pt-4 md:w-full    ">
            <div className="xl:flex xl:flex-row xl:w-1/2">
              <div>
                <div className="text-black/50  ">
                  <p className="whitespace-nowrap overflow-hidden animate-typing  ">
                    {":>"}print(Hello, Welcome to my site..)
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold pt-4 text-green md:text-6xl ">
                    Pavinee
                  </p>
                  <p className="text-3xl font-bold pl-20 text-green md:text-6xl ">
                    Suthamjeam
                  </p>
                  <p className="pt-5 text-black/50 whitespace-wrap">
                    {":>"} Bachelor of Computer Engineering
                  </p>
                  <p className=" text-black/50 w-fit ">
                    {":>"} Chiang Mai University
                  </p>
                </div>
                <div className=" flex items-center gap-3 pt-6  ">
                  <div className="hover:scale-110 w-fit  ">
                    <BtnDownload />
                  </div>
                  <div className="hover:scale-110 w-fit">
                    <Link href="/projects">
                      <BtnProject />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden xl:block">
                  <TimelineCard />
                </div>
            </div>
          </div>
          <div className="md:pt-6 lg:pt-8 xl:hidden">
            <TimelineCard />
          </div>
          <div className="pt-8">
            <TimelineList />
          </div>

          <div className="flex justify-center items-center pt-8 md:gap-20 xl:pt-8 md:pt-24">
            <Link href="/about">
              <div className="flex flex-col justify-center items-center text-xs   gap-2 hover:translat-y-1 hover:scale-110 hover:text-green md:text-sm">
                <Image
                  src="/profile.png"
                  width="150"
                  height="150"
                  className=" rounded-full"
                />
                <p>Profile</p>
              </div>
            </Link>
            <Link href="/resume">
              <div className="flex flex-col justify-center items-center text-xs  gap-2 hover:translat-y-1 hover:scale-110 hover:text-green md:text-sm xl:text-base">
                <Image
                  src="/fileSheet.png"
                  width="150"
                  height="150"
                  className=" rounded-full"
                />
                <p>Resume</p>
              </div>
            </Link>
            <Link href="/projects">
              <div className="flex flex-col justify-center items-center text-xs gap-2 hover:translat-y-1 hover:scale-110 hover:text-green md:text-sm xl:text-base">
                <Image
                  src="/folder.png"
                  width="150"
                  height="150"
                  className=" rounded-full"
                />
                <p>Projects</p>
              </div>
            </Link>
          </div>
          <div className="relative bottom-[1100px] -left-[105px] md:bottom-80 md:-left-[130px] w-fit xl:text-base">
            <Image
              src="/deco1.png"
              width="200"
              height="200"
              className="opacity-70"
            />
          </div>
        </div>
      </div>
      <Footer className="" />
    </>
  );
}
