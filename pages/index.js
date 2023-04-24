import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import TimelineCard from "@/components/TimelineCard";
import BtnDownload from "../components/btnDownload";
import BtnProject from "../components/btnProject";
import Link from "next/link";
import Footer from "@/components/Footer";
import TimelineList from "@/components/TimelineList";
import NavigateItems from "@/components/NavigateItems";
export default function Home() {
  return (
    <>
      <Head>
        <title>Pavinee | Home</title>
        <link rel="shortvut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main lg:px-4 flex flex-col justify-center items-center ">
        <div className=" flex flex-col lg:w-11/12 justify-center items-center ">
          <div className="flex flex-col pt-4 md:w-full ">
            <div className="xl:flex xl:flex-row xl:w-1/2 ">
              <div className="">
                <div className="text-black/50   ">
                  <p className="whitespace-nowrap overflow-hidden animate-typing   ">
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
                  <p className=" text-black/50  ">
                    {":>"} Chiang Mai University
                  </p>
                </div>
                <div className=" flex items-center gap-3 pt-6 md:flex-row  ">
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
          <NavigateItems/>
          <div className="relative bottom-[1100px] -left-[190px] md:bottom-80 md:-left-[130px] w-fit xl:text-base">
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
