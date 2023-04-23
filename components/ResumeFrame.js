import React from "react";
import iframe from "iframe";
import BtnDownload from "@/components/btnDownload";
const ResumeFrame = () => {
  return (
    <>
     
        <div className="absolute top-20 left-10 md:left-20  lg:left-64 xl:left-[260px] ">
          <div className="flex flex-col justify-center items-center  gap-5 ">
            <div className="items-center relative top-2 border-8 border-green rounded-2xl ">
              <iframe
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFfzyCTXwk&#x2F;Iy6pVmFEaGZTVB8HAmOYzA&#x2F;view?embed"
                allowFullScreen="allowFullScreen"
                allow="fullScreen"
                className="  h-[400px] md:w-[550px]  md:h-[700px]  xl:w-[750px] xl:h-[900px] rounded-xl"
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
