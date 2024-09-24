import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "mairfarooq21@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Get in <span className="text-purple">touch</span>
        </h1>
          <div className="mt-5">
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-black-100"
            />
          </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6 justify-center">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-black-300"
              onClick={() => handleClick(info.link)}
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;