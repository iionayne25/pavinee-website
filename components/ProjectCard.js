import React from "react";
import Image from "next/image";
const ProjectCard = ({ src, title, name, courseName }) => {
  return (
    <div className="relative">
      <div
        className="bg-greenBtn/50 rounded-3xl w-48 h-[350px] flex flex-col justify-start  items-center shadow-2xl 
      hover:scale-110 hover:shadow-2xl cursor-pointer  "
      >
        <div className="bg-white h-[218px] my-3 rounded-3xl ">
          <Image
            src={src}
            width={210}
            height={210}
            className="rounded-3xl  shadow-xl"
          />
        </div>
        <div className="font-extrabold text-xs text-left items-start self-start mx-3 ">
          {title}
        </div>
        <div className="self-start font-medium text-[14px] mx-3">{name}</div>
        <div className="self-start text-[12px] pt-2 text-black/60 mx-3">
          {courseName}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
