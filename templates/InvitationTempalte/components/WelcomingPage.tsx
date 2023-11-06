import React, { useState, useRef } from "react";
import { IoMailOpen } from "react-icons/io5";
import { ImHeart } from "react-icons/im";
import SecondPage from "./SecondPage";
import BackSound from "../../../sound/music.mp3";

export default function WelcomingPage() {
  const [allowScroll, setAllowScroll] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // handle click to scrolling
  // ID = welcome in SecondPage
  // handle play music
  const handleButtonClick = () => {
    setAllowScroll(true);
    const sectionID = "welcome";
    const section = document.getElementById(sectionID);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  // key scrolling to top page
  const pageStyle: React.CSSProperties = {
    overflowY: allowScroll ? "scroll" : "hidden",
  };

  return (
    <>
      <div
        className="w-[35%] h-screen overflow-y-scroll bg-center"
        style={{
          backgroundImage:
            "url(https://user-images.githubusercontent.com/10141928/147430939-8124ff5c-4df1-495f-a4f9-ee6eb839f03e.jpeg)",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-full h-screen bg-opacity-10 bg-black flex flex-col items-center justify-start"
          style={pageStyle}
        >
          <h1 className="mt-20 mb-3 text-amber-900 text-2xl">
            <ImHeart />
          </h1>
          <h1 className="text-md font-general text-amber-900">
            THE WEDDING OF
          </h1>
          <p className="text-4xl font-name text-amber-900">Nailal and Via</p>
          <button
            onClick={handleButtonClick}
            className="animate-bounce flex flex-row items-center gap-3 px-5 py-3 mt-[20rem] bg-amber-900 text-white rounded-full"
          >
            <IoMailOpen /> Open Invitation
          </button>
          <audio ref={audioRef} src={BackSound} />
          <p className="font-general text-white font-bold mt-[5rem]">
            Design by Muhammad Iqbal Maulana
          </p>
          <SecondPage />
        </div>
        {/* error */}
        {/* <audio ref={audioRef} src="../components/music.mp3" /> */}
        {/* end error */}
      </div>
    </>
  );
}
