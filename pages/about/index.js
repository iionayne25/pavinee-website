import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import Footer from "@/components/Footer";
const index = () => {
  return (
    <>
      <Head>
        <title>Pavinee | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main px-10 pb-20">
        <div className="flex  flex-col xl:flex-row gap-10 pt-10">
          <div className="flex flex-col gap-10 justify-center items-center">
            <div className=" w-[230px] h-[303px] left-[60px] md:left-[240px] lg:items-center xl:w-[230px] xl:h-[303px] xl:left-0 border border-black rounded-t-full rounded-b-3xl ">
              <Image
                src="/profilePic.png"
                width="230"
                height="200"
                className=" rounded-t-full rounded-b-3xl"
              />
              <div className=" w-[240px] h-[308px]   rounded-t-full rounded-b-3xl">
                {" "}
              </div>
              <Image
                src="/deco3.png"
                width="200"
                height="200"
                className="relative bottom-[650px] -left-16"
              />
            </div>
            <div>
              <div className="flex flex-col text-xs space-y-2 lg:items-start">
                <p>
                  <span className="font-semibold">Nickname:</span> Ayne
                </p>
                <p>
                  <span className="font-semibold">Birthday:</span> 25 August
                  2000
                </p>
                <p>
                  <span className="font-semibold">Hobby:</span> Crochet, Read
                  Books,Play Game
                </p>
                <p>
                  <span className="font-semibold">Toeic Score:</span>
                </p>
                <div className="flex gap-2 items-center">
                  <GitHubIcon />
                  <a
                    href="https://github.com/iionayne25"
                    target="_blank"
                    className="hover:underline"
                  >
                    https://github.com/iionayne25
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="flex-wrap text-sm">
              Hello, My name is Pavinee Suthamjaem, I’m a computer engineer.
              love to design UX/UI for web application , developing web
              application and software solutions that solve complex problems.
              I'm passionate about the field of computer engineering and I'm
              always eager to learn new technologies and techniques to enhance
              my skills.
            </p>
            <p className="text-sm">
              At present, I am actively engaged in self-learning the Japanese
              and English languages with a great deal of passion, as I aspire to
              attain fluency in both languages in the foreseeable future.
            </p>
            <div className="titileItem">
              <p className="titleAttibute">Experience</p>
              <p className="topic">Software Engineer,Internship</p>
              <p className="description ">
                Lumentum International(Thailand) Ltd., Co, June - October 2022
              </p>
              <div className="flex pt-1">
                <a
                  href="/files/certificate_lumentum_internship.pdf"
                  target="_blank"
                  className="text-[14px] underline "
                >
                  Certificate
                </a>
              </div>
            </div>
            <div className="titleItem">
              <p className="titleAttibute">Education</p>
              <p className="topic">
                Enrichment Program of Science Mathematics Technology and
                Environment (SMTE)
              </p>
              <p className="description">
                Suanboonyopatham Lamphun School, 2013-2019
              </p>
              <p className="description">GPA 3.84</p>
              <p className="topic pt-1">Bechelor of Computer Engineering, </p>
              <p className="description">
                Major Information Systems and Network
              </p>
              <p className="description">Chiang Mai University, 2019-2023</p>
              <p className="description">GPA 3.06</p>
            </div>
            <div className="titleItem">
              <p className="titleAttibute">Award</p>
              <p className="topic">
                DPlus+ Intertrade Scholarship Senior Project
              </p>
              <p className="description">Mar 2023</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
