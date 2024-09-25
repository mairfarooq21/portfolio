import React from "react";
import { skills } from "@/data";

const Skills = () => {
    return (
      <div className="py-20 w-full mb-10">
        <h1 className="heading justify-start">
          Skills 
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-2 mt-10 ">
          {skills.map((item) => (
            <div
              className="px-5 lg:min-h-[10rem] h-[7.5rem] flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-black-300 cursor-pointer"
              key={item.id}>
                <div className="flex items-center justify-center mt-2 mb-2">
                  <p className="lg:text-lg md:text-xs text-sm text-white">
                    {item.title}
                  </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;