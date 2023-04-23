import React from "react";
import Link from "next/link";
import Image from "next/image";
const NavigateItems = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-8 md:gap-20 xl:pt-8 md:pt-36">
        <Link href="/about">
          <div className="flex flex-col justify-center items-center text-xs   gap-2 hover:translat-y-1 hover:scale-110 hover:text-green md:text-sm">
            <Image
              src="/profile.png"
              width="150"
              height="150"
              className=" rounded-full"
            />
            <p>Profile</p>
          </div>
        </Link>
        <Link href="/resume">
          <div className="flex flex-col justify-center items-center text-xs  gap-2 hover:translat-y-1 hover:scale-110 hover:text-green md:text-sm ">
            <Image
              src="/fileSheet.png"
              width="150"
              height="150"
              className=" rounded-full"
            />
            <p>Resume</p>
          </div>
        </Link>
        <Link href="/projects">
          <div className="flex flex-col justify-center items-center text-xs gap-2 hover:translat-y-1 hover:scale-110 hover:text-green md:text-sm ">
            <Image
              src="/folder.png"
              width="150"
              height="150"
              className=" rounded-full"
            />
            <p>Projects</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavigateItems;
