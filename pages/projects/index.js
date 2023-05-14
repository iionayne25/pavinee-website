import Head from "next/head";
import React from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import ProjectsContainer from "@/components/ProjectsContainer";

const index = () => {
  return (
    <>
      <Head>
        <title>Pavinee | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main pb-10 ">
        <ProjectsContainer/>
      </main>
      <Footer />
    </>
  );
};

export default index;
