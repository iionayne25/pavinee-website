import React, { ReactDOM, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import Hamburger from "./Hamburger";
const Header = () => {
  const router = useRouter();
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className="absolute">
      <div className="fixed top-0 bg-[#fffef0] shadow-md rounded-b-2xl flex justify-between py-3 px-4 mb-4 items-center w-full md:shadow-none md:rounded-none">
        <Link href="/">
          <div className="font-bold text-2xl">PSut.</div>
        </Link>

        <div className="hidden md:flex md:navBarContainer">
          <Link href="/">
            <div className={router.pathname == "/" ? "active" : ""}>
              <div className="navbarItem">Home</div>
            </div>
          </Link>
          <Link href="/about">
            <div className={router.pathname == "/about" ? "active" : ""}>
              <div className="navbarItem">About</div>
            </div>
          </Link>
          <Link href="/resume">
            <div className={router.pathname == "/resume" ? "active" : ""}>
              <div className="navbarItem">Resume</div>
            </div>
          </Link>
          <Link href="/projects">
            <div className={router.pathname == "/projects" ? "active" : ""}>
              <div className="navbarItem">Projects</div>
            </div>
          </Link>
        </div>
        <div className="md:hidden">
          <Hamburger />
        </div>
        <div className="flex flex-col items-center fixed bottom-32 right-5 gap-4 md:static md:flex md:right-0 md:flex-row md:gap-2">
          <a
            href="https://www.facebook.com/Siggie.Brownie"
            target="_blank"
            className="md:hover:text-[#1773EA] md:text-black text-[#1773EA] bg-slate-50 ring-2  ring-greenLight  rounded-full shadow-xl p-1 md:bg-transparent md:shadow-none md:ring-0 "
          >
            <FacebookRoundedIcon className="w-10 h-10 md:w-6 md:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/pavinee-sut/"
            target="_blank"
            className="md:hover:text-[#0073B1] md:text-black text-[#0073B1] bg-slate-50 ring-2 ring-greenLight rounded-full shadow-xl p-1 md:bg-transparent md:shadow-none md:ring-0  "
          >
            <LinkedInIcon className=" w-10 h-10 md:w-6 md:h-6" />
          </a>
          <a
            href="https://www.instagram.com/iionayne/"
            target="_blank"
            className="md:hover:text-[#F70080] md:text-black text-[#F70080] bg-slate-50 ring-2 ring-greenLight rounded-full shadow-xl p-1 md:bg-transparent md:shadow-none md:ring-0  "
          >
            <InstagramIcon className=" w-10 h-10 md:w-6 md:h-6" />
          </a>

          <Mailto
            email="pavinee.suthamjaem@gmail.com"
            subject="Hello, Pavinee!"
            body=""
          >
            <MailOutlineIcon className=" w-12 h-12 md:w-8 md:h-8 text-gray-400 bg-slate-50  ring-2 ring-greenLight rounded-full shadow-xl p-1 md:text-black md:hover:text-gray-400 md:bg-transparent md:shadow-none md:ring-0 " />
          </Mailto>
        </div>
      </div>
    </div>
  );
};

export default Header;
