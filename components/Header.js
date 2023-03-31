import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Header = () => {
  const router = useRouter();
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <>
      <div className="flex my-2 mx-4 justify-between items-center">
        <Link href="/">
          <div className="font-bold text-xl">PSut.</div>
        </Link>

        <div className="navBarContainer">
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
        <div className="space-x-2">
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
            <MailOutlineIcon className="hover:text-gray-400"/>
          </Mailto>
        </div>
      </div>
    </>
  );
};

export default Header;
