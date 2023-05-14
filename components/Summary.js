import React from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
const Summary = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-10 pt-10">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="w-[230px] h-[303px] left-[60px] md:left-[240px] lg:items-center xl:w-[230px] xl:h-[303px] xl:left-0 border border-black rounded-t-full rounded-b-3xl ">
            <Image
              src="/profilePic.png"
              width="230"
              height="200"
              alt="profile picture"
              className=" rounded-t-full rounded-b-3xl"
            />
            <div className="w-[240px] h-[308px] rounded-t-full rounded-b-3xl">
              {" "}
            </div>
            <Image
              src="/deco3.png"
              width={150}
              height={150}
              alt="frame of profile image"
              className="relative bottom-[650px] -left-10"
            />
          </div>
          <div>
            <div className="flex flex-col text-xs space-y-2 lg:items-start w-full">
              <div className="flex gap-2">
                <h6 className="font-semibold">Nickname: </h6>
                <span>Ayne</span>
              </div>
              <div className="flex gap-2">
                <h6 className="font-semibold">Birthday: </h6>
                <span>2000</span>
              </div>
              <div className="flex gap-2">
                <h6 className="font-semibold">Hobby: </h6>
                <span>Crochet, Read Books, Play Game</span>
              </div>
              <div className="linkContainer">
                <GitHubIcon />
                <a
                  href="https://github.com/iionayne25"
                  target="_blank"
                  className="hover:underline"
                >
                  github.com/iionayne25
                </a>
              </div>
              <div className="linkContainer">
                <Image src="/frontendmentoricon.png" width={33} height={33} />
                <a
                  href="https://www.frontendmentor.io/profile/iionayne25"
                  target="_blank"
                  className="hover:underline flex-wrap"
                >
                  frontendmentor.io
                </a>
              </div>
              <div className="linkContainer">
                <Image src="/leetcodeIcon.png" width={24} height={24} />
                <a
                  href="https://leetcode.com/iionayne/"
                  target="_blank"
                  className="hover:underline flex-wrap"
                >
                  leetcode.com/iionayne
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
        <p className="flex-wrap text-sm">
          Hello, My name is Pavinee Suthamjaem, I’m a computer engineer. love to
          design UX/UI for web application , developing web application and
          software solutions that solve complex problems. I'm passionate about
          the field of computer engineering and I'm always eager to learn new
          technologies and techniques to enhance my skills.
        </p>
        <p className="text-sm">
          At present, I am actively engaged in self-learning the Japanese and
          English languages with a great deal of passion, as I aspire to attain
          fluency in both languages in the foreseeable future.
        </p>
        <div className="space-y-1">
          <h6 className="titleAttibute">Experience</h6>
          <p className="topic">Software Engineer,Internship</p>
          <p className="description ">
            Lumentum International(Thailand) Ltd., Co,
          </p>
          <time className="text-[13px]">June - October 2022</time>
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
        <div className="space-y-1">
          <h6 className="titleAttibute">Education</h6>
          <p className="topic">
            Enrichment Program of Science Mathematics Technology and Environment
            (SMTE)
          </p>
          <p className="description">Suanboonyopatham Lamphun School,</p>
          <time className="text-[13px]">2013-2019</time>
          <p className="description">GPA 3.84</p>
          <p className="topic pt-1">Bechelor of Information Systems and Network Engineering, </p>
          <p className="description">Chiang Mai University, </p>
          <time className="text-[13px]">August 2019 - April 2023</time>
          <p className="description">GPA 3.06</p>
        </div>
        <div className="space-y-1">
          <h6 className="titleAttibute">Award</h6>
          <p className="topic">DPlus+ Intertrade Scholarship Senior Project</p>
          <time className="text-[13px]">Mar 2023</time>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Summary;
