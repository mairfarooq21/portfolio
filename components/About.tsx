import React from "react";

const About = () => {
  return (
    <div className="lg:pt-[70px] w-full">
      <h1 className="heading justify-start pt-52 md:pt-0 text-3xl md:text-3xl lg:text-[43px]">
        About 
      </h1>

      <div className="w-full mt-7 grid lg:grid-cols-1 grid-cols-1 gap-10">
        <p className="lg:ml-[74px] lg:mr-[74px] text-center md:tracking-wider text-md md:text-lg lg:text-lg">I am a full stack developer with a focus on building user-friendly web applications. Currently pursuing a Bachelor&apos;s in Computer Science, I continuously work on improving my skills. Through internships and freelance projects, I have developed websites for various clients, gaining valuable experience in the field. I am dedicated to delivering high-quality solutions and contributing effectively to any project.</p>
      </div>
    </div>
  );
};

export default About;