import React from "react";
import Image from "next/image";
import WelcomeImage from "@/styles/assets/welcome-image.jpeg";

const SecondPage: React.FC = () => {
  return (
    <>
      <div id="welcome" className="mt-[20rem]">
        <Image
          src={WelcomeImage}
          alt="welcome image"
          loading="lazy"
          className="min-w-screen"
        />
        <div className="relative bottom-[10rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#78350f"
              fill-opacity="1"
              d="M0,128L80,112C160,96,320,64,480,90.7C640,117,800,203,960,208C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <div className="min-w-screen h-[10rem] bg-amber-900"></div>
        </div>
        <div className="relative mt-[-21rem] flex justify-start items-center flex-col">
          <p className=" text-white font-name text-xl">Dear Mr/Mrs/Ms</p>
          <p className="text-white font-name text-xl">Family & Friends</p>
          <p className="text-white font-general text-sm px-5 mt-5 text-center">
            We are pleased to announce and invite you to our wedding. We
            sincerely hope that you will be able to attend and pray directly on
            our wedding day. Your presence will mean a lot to us.
          </p>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
