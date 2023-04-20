import React from "react";
import Image from "next/image";

const TimelineCard = () => {
  return (
    <div
      className="hidden md:block md:relative md:bg-greenLight md:w-[650px]   md:h-[450px]  md:rounded-2xl md:drop-shadow-xl
      lg:w-[750px] lg:h-[450px] xl:w-[550px] xl:left-5 xl:h-[330px]"
    >
      <div>
        <Image
          src="/timelineCurve.svg"
          width="460"
          height="460"
          className="xl:absolute xl:left-10 xl:-top-1 xl:block md:hidden"
        />
        <Image
          src="/timelineCurve.svg"
          width="580"
          height="460"
          className=" md:left-10 md:top-3  md:absolute lg:hidden"
        />
        <Image
          src="/timelineCurve.svg"
          width="600"
          height="460"
          className=" lg:left-14 lg:top-3  lg:absolute lg:block  md:hidden xl:hidden"
        />
        <div className="xl:text-[10px] absolute  text-center md:text-[15px] md:bottom-20 lg:bottom-16 md:left-3 xl:bottom-14 xl:left-5">
          <p className="text-orange">June 2019</p>
          <p>Chiang Mai University</p>
          <p className="font-bold"> Academic year 1 </p>
        </div>
        <div className="xl:text-[10px] absolute  text-center  md:text-[15px] md:bottom-[130px] md:left-[230px]  lg:bottom-[110px]  lg:left-[250px] xl:bottom-[90px] xl:left-[195px]">
          <p className="text-orange">June to October 2022</p>
          <p>
            <sapn className="font-bold">Cooperative</sapn> at Lumentum{" "}
          </p>
          <p>International (Thailand) Ltd., Co</p>
        </div>
        <div className="xl:text-[10px] absolute  md:text-[15px] text-center md:top-20 md:left-[170px] xl:top-16 xl:left-[190px]">
          <p className="text-orange">Mar 2023</p>
          <p>
            <span className="font-bold">Senior Project</span> - Physical Therapy
          </p>
          <p>Clinic Service Platform</p>
          <p className="xl:text-[8px] text-black/60">
            DPlus+ Intertrade Schorlaship award
          </p>
        </div>
        <div className="xl:text-[10px] absolute  md:text-[15px]  text-center md:top-14 md:right-2 lg:top-16 lg:right-3 xl:top-9 xl:right-4">
          <p className="text-orange">April 2023</p>
          <p>
            <span className="font-bold">Graduated</span> with GPA 3.06
          </p>
        </div>
        <div className="overflow-clip">
          <Image
            src="/computer.png"
            width="250"
            height="200"
            className="absolute  md:-right-8 md:-bottom-24 xl:-right-14 xl:-bottom-16"
          />
        </div>
        <div className="absolute md:text-[18x]  md:right-3 md:bottom-[50px] xl:text-[15px] xl:right-2 xl:bottom-[95px]">
          <p>
            <span className="text-[#F70080]">while</span>(!goalAchieve())
          </p>
          <p className="">{"keepTry()"}</p>
        </div>
      </div>
    </div>
  );
};
export default TimelineCard;
