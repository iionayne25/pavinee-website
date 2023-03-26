import React from "react";
import Image from "next/image";

const TimelineCard = () => {
  return (
    
      <div className="relative bg-greenLight w-[550px]  h-[330px]  rounded-2xl drop-shadow-xl">
        <div>
          <Image
            src="/timelineCurve.svg"
            width="460"
            height="460"
            className="absolute left-10 -top-1"
          />
          <div className="text-[10px] absolute  text-center bottom-14 left-5">
            <p className="text-orange">Jun 2019</p>
            <p>Chiang Mai University</p>
            <p className="font-bold"> Academic year 1 </p>
          </div>
          <div className="text-[10px] absolute  text-center bottom-[90px] left-[195px]">
            <p className="text-orange">Jun to October 2022</p>
            <p>
              <sapn className="font-bold">Cooperative</sapn> at Lumentum{" "}
            </p>
            <p>International (Thailand) Ltd., Co</p>
          </div>
          <div className="text-[10px] absolute  text-center top-16 left-[190px]">
            <p className="text-orange">Mar 2023</p>
            <p>
              <span className="font-bold">Senior Project</span> - Physical
              Therapy
            </p>
            <p>Clinic Service Platform</p>
            <p className="text-[8px] text-black/60">
              DPlus+ Intertrade Schorlaship award
            </p>
          </div>
          <div className="text-[10px] absolute  text-center top-9 right-4">
            <p className="text-orange">April 2023</p>
            <p>
              <span className="font-bold">Graduated</span> with GPA 3...
            </p>
          </div>
          <div className="overflow-clip">
            <Image
              src="/computer.png"
              width="250"
              height="200"
              className="absolute -right-14 -bottom-16"
            />
          </div>
          <div className="absolute text-[15px] right-2 bottom-[95px]">
            <p>
              <span className="text-gray-500">while</span>(!goalAchieve())
            </p>
            <p className="pl-7">{"try()"}</p>
          </div>
        </div>
      </div>
  );
};
export default TimelineCard;
