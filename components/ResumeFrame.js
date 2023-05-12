import React from "react";
import iframe from "iframe";
import BtnDownload from "@/components/btnDownload";
const ResumeFrame = () => {
  return (
    <>
        <div className=" w-screen">
          <div className="flex flex-col justify-center items-center  gap-5 ">
            <div className="items-center relative  border-8 border-green rounded-2xl ">
              <iframe
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFfzyCTXwk&#x2F;Iy6pVmFEaGZTVB8HAmOYzA&#x2F;view?embed"
                allowFullScreen="allowFullScreen"
                allow="fullScreen"
                className="  md:w-[600px] md:h-[550px] lg:w-[800px] lg:h-screen  xl:w-[900px] xl:h-screen rounded-xl"
              ></iframe>
            </div>
            <div className="flex gap-2">
              <BtnDownload />
              <a href="/files/ResumePDF.pdf" target="_blank">
                {" "}
              </a>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default ResumeFrame;
