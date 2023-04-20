import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  const router = useRouter();
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <>
    <div className="bg-[#E7FAC4] w-full ">
      <div className="flex flex-col justify-center items-center gap-3 py-3">
        <div className="flex flex-row gap-5">
          <div>
            <Link href="/">
              <div className="hover:text-green text-xs">Home</div>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <div className="hover:text-green text-xs">About</div>
            </Link>
          </div>
          <div>
            <Link href="/resume">
              <div className="hover:text-green text-xs">Resume</div>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <div className="hover:text-green text-xs">Projects</div>
            </Link>
          </div>
        </div>
        <div className="flex gap-5">
          <a
            href="https://www.facebook.com/Siggie.Brownie"
            target="_blank"
            className="hover:text-[#1773EA]"
          >
            <FacebookRoundedIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/pavinee-sut/"
            target="_blank"
            className="hover:text-[#0073B1]"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/iionayne/"
            target="_blank"
            className="hover:text-[#F70080]"
          >
            <InstagramIcon />
          </a>

          <Mailto
            email="pavinee.suthamjaem@gmail.com"
            subject="Hello, Pavinee!"
            body=""
          >
            <MailOutlineIcon className="hover:text-gray-400 w-6.5 h-7" />
          </Mailto>
        </div>
        <div>
            <p className="text-[12px]">	&#169; Pavinee Website, All rights reserved.</p>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Footer;
