import React from "react";
import Image from "next/image";
const ProjectCard = ({ src, title, name, courseName, gitHubLink }) => {
  return (
    <div className="">
      <div
        className="bg-greenBtn/80 content-box rounded-3xl w-56  xl:w-48 h-[390px] flex flex-col justify-start  items-center shadow-2xl 
      hover:scale-110 hover:drop-shadow-xl hover:shadow-green cursor-pointer  "
      >
        <div className="bg-white my-3 rounded-3xl ">
          <Image
            src={src}
            width={210}
            height={210}
            className="rounded-3xl  shadow-lg shadow-black/20"
          />
        </div>
        <div className="font-extrabold text-xs text-left items-start self-start mx-3 ">
          {title}
        </div>
        <div className="self-start font-medium text-[14px] mx-3">{name}</div>
        <div className="self-start text-[12px] pt-2 text-black/60 mx-3">
          {courseName}
        </div>
        {gitHubLink ? (
          <div className="pt-2 self-start mx-3">
            <a href={gitHubLink} target="_blank">
              <button
                className="bg-black text-greenLight px-3 py-1 text-[14px] shadow-xl border-b border-gray-600/70   rounded-full
              hover:bg-gray-300 hover:text-black font-medium"
                target="_blank"
              >
                GitHub
              </button>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
