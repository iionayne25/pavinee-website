import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Link from "next/link";

const Hamburger = () => {
  const router = useRouter();
  const [isOpen, setIsopen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menu = useRef();

  useEffect(() => {
    //only add the event listener when sidebar is opend
    if (showMenu) return;
    function handleClick(event) {
      if (menu.current && !menu.current.contains(event.target)) {
        setShowMenu(false);
        setIsActive(!isActive);
      }
    }
    window.addEventListener("click", handleClick);
    //clean up
    return () => window.removeEventListener("click", handleClick);
  }, [showMenu]);
  return (
    <div className=" ">
      {!isActive ? (
        <MenuRoundedIcon
          className="cursor-pointer"
          onClick={() => {
            setShowMenu((x) => !x);
            setIsActive(!isActive);
            console.log("clickkkkkk");
          }}
        />
      ) : (
        <CloseRoundedIcon
          className="cursor-pointer"
          onClick={() => {
            setIsopen(!isOpen);
            setIsActive(!isActive);
            setShowMenu((x) => !x);
          }}
        />
      )}
      {showMenu && (
        <div ref={menu} className="absolute ">
          <div className="absolute -right-10 top-0.5 flex flex-col items-center justify-start shadow-xl w-screen py-8  mt-2 space-y-6 font-bold bg-[#fffef0] drop-shadow-md">
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
        </div>
      )}
    </div>
  );
};

export default Hamburger;
