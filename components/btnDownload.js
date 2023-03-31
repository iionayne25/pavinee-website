import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import {saveAs} from "file-saver"

const btnDownload = () => {
  const saveFile =()=>{
    saveAs("files/ResumePDF.pdf","resume_pavinee_suthamjeam")
    
  }
  return (
    <>
      <button
        className="bg-black text-greenLight block items-center rounded-full text-xs px-4 py-2 shadow-2xl border-b-4
      border-green hover:bg-greenBtn hover:text-black" onClick={saveFile}
      >
        <SaveAltIcon className="w-4 h-4" /> Download Resume
      </button>
    </>
  );
};

export default btnDownload;
