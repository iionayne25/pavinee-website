import Head from "next/head";
import React from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Link from "next/link";
const index = () =>{

  return (
    <>
      <Head>
        <title>Pavinee | Projects</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />

      <div className="main pb-10 ">
        <div className=" grid grid-cols-4 px-10 gap-10 place-items-center ">
          <Link href="/projects/physicalApp">
          <ProjectCard
            src="/oliveLogo.png"
            title="Senior Project"
            name="Physical Therapy Clinic Service Platform"
            courseName=""
          />
          </Link>
          <Link href="/itsmFlashcard">
          <ProjectCard
            src="/itsmFlashcard.png"
            title="In Course Project"
            name="ITSM Flashcard"
            courseName="IT Service Management Course"
          />
          </Link>
          <Link href="/whisper">
          <ProjectCard
            src="/whisperLogo.png"
            title="Milestone Project"
            name="Whisper"
            courseName="Adv. ISNE Technology Course"
          />
          </Link>
          <Link href="/bearBrick">
          <ProjectCard
            src="/bearBrickLogo.png"
            title="In Course Project"
            name="BearBrick"
            courseName="Fundamental Database Course"
          />
          </Link>
          <Link href="/2dGame">
          <ProjectCard
            src="/2dGame.png"
            title="In Course Project"
            name="2D Breakout"
            courseName="Object Oriented Programming Course"
          />
          </Link>
          
          
         
         
          
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default index;
