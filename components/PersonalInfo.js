import React from "react";

const PersonalInfo = () => {
  return (
    <div className="">
      <div className="text-black/50 ">
        <h6 className="whitespace-nowrap overflow-hidden animate-typing   ">
          {":>"}print(Hello, Welcome to my site..)
        </h6>
      </div>
      <div>
        <h3 className="text-3xl font-bold pt-4 text-green md:text-6xl ">
          Pavinee
        </h3>
        <h3 className="text-3xl font-bold pl-20 text-green md:text-6xl ">
          Suthamjaem
        </h3>
        <h6 className="pt-5 text-black/50 whitespace-wrap">
          {":>"} Bachelor of Information Systems and Network Engineering
        </h6>
        <h6 className=" text-black/50  ">{":>"} Chiang Mai University</h6>
      </div>
    </div>
  );
};

export default PersonalInfo;
