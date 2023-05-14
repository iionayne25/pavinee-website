import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { saveAs } from "file-saver";

const btnDownload = () => {
  const saveFile = () => {
    saveAs(
      "/files//resume-pavinee-suthamjaem.pdf",
      "resume_pavinee_suthamjeam.pdf"
    );
  };
  return (
    <div>
      <button
        className="bg-black text-greenLight block items-center rounded-full text-[12px] md:text-xs  h-10 w-36 md:w-40  shadow-2xl border-b-4
      border-green hover:bg-greenBtn hover:text-black"
        onClick={saveFile}
      >
        <SaveAltIcon className="w-4 h-4" /> Download Resume
      </button>
    </div>
  );
};

export default btnDownload;
