import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import BtnDownload from "@/components/btnDownload";

const index = () => {
  // const saveFile =()=>{
  //   saveAs("ResumePDF.pdf","pavinee_resume")
    
  // }
  return (
    <>
      <Head>
        <title>Pavinee | Resume</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />
      <div className="h-screen">
        <Image
          src="/circle3.svg"
          width={700}
          height={700}
          className="relative top-0 -left-14 "
        />
        <Image
          src="/circle4.svg"
          width={500}
          height={500}
          className="relative left-[760px] bottom-[400px] "
        />
        <div className="absolute top-14 left-64 ">
          <div className="flex justify-center items-start  gap-10 ">
            <div className="border-green items-center top-5  border-8 rounded-xl bg-white ">
              <Image
                src="/resume.jpg"
                alt="Resume of Pavinee Suthamjeam"
                width={600}
                height={700}
                className="rounded-xl"
              />
            </div >
            <div>
            <BtnDownload />
            </div>
            
          </div>
        </div>
        <Image
          src="/deco4.png"
          width={500}
          height={500}
          className="relative -top-[850px] left-0 "
        />
      </div>
    </>
  );
};

export default index;
