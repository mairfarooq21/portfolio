import React from "react";

import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My work <span className="text-purple"> experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-1 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <div
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            key={card.id}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10">
              <p className="text-start mb-4 text-sm md:text-lg lg:text-xl mt-3 w-[650px] position-top">
                {card.duration}
              </p>
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl mt-3">
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