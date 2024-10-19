import React from "react";

import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div className="pt-20 w-full">
      <h1 className="heading text-3xl md:text-3xl lg:text-[43px]">
        My work experience
      </h1>

      <div className="w-full mt-5 grid lg:grid-cols-1 grid-cols-1 gap-10 lg:ml-[68px] lg:mr-[155px]">
        {workExperience.map((card) => (
          <div
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            key={card.id}>
            <div className="flex lg:flex-col flex-col lg:items-center p-3 md:p-5 lg:p-2">
              <div className="lg:ms-5">
                <div className="lg:flex lg:justify-between items-center w-full">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                      {card.title1}
                  </h1>
                  <p className="lg:text-right text-md md:text-2xl lg:text-[20px] font-semibold lg:mr-[153px]">
                      {card.duration}
                  </p>
                </div>
                <p className="text-start text-lg lg:text-[20px] md:text-2xl font-bold">
                  {card.title2}
                </p>
                <p className="text-start md:tracking-wider text-sm md:text-lg lg:text-lg mt-3 lg:mr-[150px]">
                  {card.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;