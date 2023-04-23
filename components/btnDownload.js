import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import {saveAs} from "file-saver"

const btnDownload = () => {
  
  const saveFile =()=>{
    saveAs("/files/ResumePDF.pdf","resume_pavinee_suthamjeam.pdf")
    
  }
  return (
    <>
      <button
        className="bg-black text-greenLight block items-center rounded-full text-xs px-5 h-10 md:px-4 md:min-h-full shadow-2xl border-b-4
      border-green hover:bg-greenBtn hover:text-black" onClick={ saveFile}
      >
        <SaveAltIcon className="w-3 h-3" /> Download Resume
      </button>
    </>
  );
};

export default btnDownload;
