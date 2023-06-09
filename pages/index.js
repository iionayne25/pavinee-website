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
import PersonalInfo from "@/components/PersonalInfo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pavinee | Home</title>
        <meta name="description" content="This is home page of my website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main lg:px-4 flex flex-col justify-center items-center ">
        <div className=" flex flex-col lg:w-11/12 pt-4 md:w-full justify-center items-center ">
            <div className="xl:flex xl:flex-row xl:w-1/2 xl:justify-center xl:items-center ">
              <div>
                <PersonalInfo/>
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
      <Footer/>
    </>
  );
}
