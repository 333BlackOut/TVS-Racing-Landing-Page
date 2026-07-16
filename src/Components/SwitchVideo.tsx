import type React from "react";
import arrow from "../assets/arrow-right.svg";

type SwitchVideoProps = {
  playStatus: boolean;
  setPlayStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const SwitchVideo = ({ playStatus, setPlayStatus }: SwitchVideoProps) => {
  return (
    <div
      className="absolute rounded-4xl w-25 h-10 lg:w-35 lg:h-12 2xl:w-50 2xl:h-15 left-15 bottom-15 bg-black/20 backdrop-blur-sm cursor-pointer flex items-center px-2"
      onClick={() => setPlayStatus(!playStatus)}
    >
      <div
        className={`absolute w-8 h-8 lg:w-11 lg:h-11 2xl:w-15 2xl:h-15 rounded-4xl bg-red-400 border-2 border-red-700 grid place-items-center transition-all duration-500 ease-in-out ${playStatus ? "left-16.5 lg:left-24 2xl:left-35" : "left-0"}`}
      >
        <img
          src={arrow}
          alt=""
          className={`absolute top-0 transition-all duration-500 invert ${playStatus ? "rotate-180" : "rotate-0"}`}
        />
        <p
          className={`text-white absolute top-0.8 translate-x-11 lg:translate-x-14 2xl:lg:translate-x-18 transition-all duration-500 ${playStatus ? "opacity-0" : "opacity-100"}`}
        >
          Video
        </p>

        <p
          className={`text-white absolute top-0.8 -translate-x-11 lg:-translate-x-14 2xl:lg:-translate-x-18 transition-all duration-500 ${playStatus ? "opacity-100" : "opacity-0"}`}
        >
          Image
        </p>
      </div>
    </div>
  );
};

export default SwitchVideo;
