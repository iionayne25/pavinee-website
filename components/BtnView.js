import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

const BtnView = () => {
  return (
    <>
      <button
        className="bg-black text-greenLight block items-center rounded-full text-xs px-3  py-2 shadow-2xl border-b-4
      border-green hover:bg-greenBtn hover:text-black"
      >
        <VisibilityIcon className="w-4 h-4" /> View Full
      </button>
    </>
  );
};

export default BtnView;
