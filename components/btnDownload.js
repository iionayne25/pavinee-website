import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import {saveAs} from "file-saver"

const btnDownload = () => {
  
  const saveFile =()=>{
    saveAs("/files//resume-pavinee-suthamjaem.pdf","resume_pavinee_suthamjeam.pdf")
    
  }
  return (
    <div className='box-content'>
      <button
        className="bg-black text-greenLight block items-center rounded-full text-[12px] md:text-xs px-5 py-3 md:px-4 md:max-h-10 shadow-2xl border-b-4
      border-green hover:bg-greenBtn hover:text-black" onClick={ saveFile}
      >
        <SaveAltIcon className="w-4 h-4" /> Download Resume
      </button>
    </div>
  );
};

export default btnDownload;
