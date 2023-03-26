import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Header = () => {
  const router = useRouter();
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
          <a href="https://www.facebook.com/Siggie.Brownie" target="_blank">
            <FacebookRoundedIcon />
          </a>
          <a href="https://www.linkedin.com/in/pavinee-sut/" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/iionayne/" target="_blank">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
