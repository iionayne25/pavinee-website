import React from "react";

const TimelineList = () => {
  return (

    <div>
    <ol className="border-l border-gray-400 md:hidden ">
        <li className="mb-5 ml-4">
          <div class="relative w-3 h-3 bg-green/60 rounded-full mt-1.5 -left-[27px] border border-white "></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">
            June 2019
          </time>
          <h3 class="text-base font-semibold text-gray-900 ">
            Academic Year 1
          </h3>
          <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            Information Systems and Network Engineering
          </p>
        </li>
        <li className="mb-5 ml-4">
          <div class="relative w-3 h-3 bg-green/60 rounded-full mt-1.5 -left-[27px] border border-white "></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">
            June - October 2022
          </time>
          <h3 class="text-base font-semibold text-gray-900 ">Cooperative</h3>
          <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            at Lumentum International (Thailand) Ltd., Co - Pathumtani,Thailand
          </p>
        </li>
        <li className="mb-5 ml-4">
          <div class="relative w-3 h-3 bg-green/60 rounded-full mt-1.5 -left-[27px] border border-white "></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">
            Mar 2023
          </time>
          <h3 class="text-base font-semibold text-gray-900 ">
            Senior Project - Physical Therapy Clinic Service Platform
          </h3>
          <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            DPlus+ Intertrade Scholarship Award
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div class="relative w-3 h-3 bg-green/60 rounded-full mt-1.5 -left-[27px] border border-white "></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">
            May 2023
          </time>
          <h3 class="text-base font-semibold text-gray-900 ">Graduated</h3>
          <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            GPA 3.06
          </p>
        </li>
      </ol>
    </div>
  );
};

export default TimelineList;
