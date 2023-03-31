import Head from "next/head";
import React from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/footer";
const index = () => {
  return (
    <>
      <Head>
        <title>Pavinee | Projects</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />

      <div className="main ">
        <div className=" grid grid-cols-3 px-10 gap-10 place-items-center ">
          <ProjectCard
            src="/oliveLogo.png"
            title="Senior Project"
            name="Physical Therapy Clinic Service Platform"
            courseName=""
          />
          <ProjectCard
            src="/whisperLogo.png"
            title="Milestone Project"
            name="Whisper"
            courseName="Adv. ISNE Technology Course"
          />
          <ProjectCard
            src="/bearBrickLogo.png"
            title="In Course Project"
            name="BearBrick"
            courseName="Fundamental Database Course"
          />
          <ProjectCard
            src="/2dGame.png"
            title="In Course Project"
            name="2D Breakout"
            courseName="Object Oriented Programming Course"
          />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default index;
