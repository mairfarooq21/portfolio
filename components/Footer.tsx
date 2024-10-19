import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from 'next/image';

const Footer = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "mairfarooq21@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <footer className="w-full pt-11 pb-20" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-3xl md:text-3xl lg:text-[43px]">
          Get in touch
        </h1>
          <div className="mt-5 lg:mt-0 md:mt-0">
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-black-100"
            />
          </div>
      </div>
      <div className="flex mt-11 flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6 justify-center">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 lg:w-32 lg:h-11 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-black-300 hover:border-white duration-300"
              onClick={() => handleClick(info.link)}
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
              <p className="ml-2 hidden lg:block">{info.title}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;