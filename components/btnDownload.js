import React from "react";

const btnDownload = () => {
  return (
    <>
      <button
        className="bg-black text-greenLight rounded-full text-xs px-4 py-2 shadow-2xl border-b-4
      border-green hover:bg-greenBtn hover:text-black"
      >
        Download Resume
      </button>
    </>
  );
};

export default btnDownload;
