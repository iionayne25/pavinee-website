import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import TimelineCard from "@/components/TimelineCard";
import BtnDownload from "../components/btnDownload";
import BtnProject from "../components/btnProject";
import Link from "next/link";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Pavinee | Home</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />
      <main className="main flex-col bg-url('/circle1.svg')">
        <div className="relative top-24 left-80 w-fit">
          <Image
            src="/circle2.svg"
            width="380"
            height="200"
            className="relative 
      "
          />
        </div>
        <div className="flex  absolute top-16 w-screen ">
          <div className="flex flex-col w-1/2  ">
            <div className="text-black/50  ">
              <p className="whitespace-nowrap overflow-hidden animate-typing ">
                {":>"}print(Hello, Welcome to my site..)
              </p>
            </div>
            <p className="text-6xl font-bold pt-4 text-green">Pavinee</p>
            <p className="text-6xl font-bold pl-20 text-green ">Suthamjeam</p>
            <p className="pt-5 text-black/50">
              {":>"} Bachelor of Information Systems and Network Engineering
            </p>
            <p className=" text-black/50">{":>"} Chiang Mai University</p>
          </div>
          <div className="">
            <TimelineCard />
          </div>
        </div>
        <div className="flex gap-3 relative -top-5 ">
          <div className="hover:scale-110 ">
            <BtnDownload />
          </div>
          <div className="hover:scale-110 ">
            <Link href="/projects">
              <BtnProject />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center gap-20 pt-8 ">
          <Link href="/about">
            <div className="flex flex-col justify-center items-center text-xs  gap-2 hover:translat-y-1 hover:scale-110 hover:text-green">
              <Image
                src="/profile.png"
                width="150"
                height="150"
                className=" rounded-full"
              />
              <p>profile</p>
            </div>
          </Link>
          <Link href="/resume">
            <div className="flex flex-col justify-center items-center text-xs gap-2 hover:translat-y-1 hover:scale-110 hover:text-green">
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
            <div className="flex flex-col justify-center items-center text-xs gap-2 hover:translat-y-1 hover:scale-110 hover:text-green">
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
        <div className="relative bottom-80 -left-[130px] w-fit">
          <Image
            src="/deco1.png"
            width="200"
            height="200"
            className="opacity-70"
          />
        </div>
      </main>
      <Footer/>
    </>
  );
}
