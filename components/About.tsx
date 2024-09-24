import { gridItems } from "@/data";
import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const About = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading justify-start">
        About 
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-1 grid-cols-1 gap-10">
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">I am a dedicated and passionate web developer with a deep focus on building dynamic, efficient, and user-centric web applications. My expertise spans across both frontend and backend technologies, enabling me to develop comprehensive solutions that balance aesthetics with robust functionality. With a diverse portfolio of projects, I’ve consistently demonstrated my ability to tackle real-world challenges through innovative and impactful applications.</p>
      </div>
    </div>
  );
};

export default About;