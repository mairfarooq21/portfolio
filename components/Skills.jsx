import React from "react";
import { iconLists } from "@/data";

const Skills = () => {
    return (
      <div className="pt-20 w-full">
        <h1 className="heading justify-start text-3xl md:text-3xl lg:text-[43px]">
          Skills 
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-2 lg:ml-[74px] lg:mr-[74px]">
          {iconLists.map((item) => (
            <div 
              style={{paddingTop: '2px', paddingBottom: '9px'}}
              className="px-5 lg:min-h-[10rem] h-[7.5rem] flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg"
              key={item.id}>
                <div className="flex items-center justify-center mt-2">
                  <img src={item.icons} alt="icon5" className="p-2" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;