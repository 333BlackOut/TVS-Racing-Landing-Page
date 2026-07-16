import "./Hero.css";
import HeroButton from "./HeroButton";
import { Racers } from "../data/racers";
import type { RacerKey } from "../data/racers";
import type React from "react";

type Racer = (typeof Racers)[keyof typeof Racers];

type HeroProps = {
  currentRacer: Racer;
  playStatus: boolean;
  racer: RacerKey;
  setRacer: React.Dispatch<React.SetStateAction<RacerKey>>;
};

const RacingHero = ({
  currentRacer,
  playStatus,
  racer,
  setRacer,
}: HeroProps) => {
  if (playStatus) {
    return "";
  } else
    return (
      <div className="absolute bottom-30 lg:bottom-35 2xl:bottom-40 ml-10">
        <div>
          <div
            key={currentRacer.image}
            className="text-white flex flex-col gap-3 animate-hero-title text-shadow-lg/30"
          >
            <h2 className="text-3xl lg:text-6xl 2xl:text-9xl">
              {currentRacer.name1}
            </h2>
            <p className="text-xl lg:text-3xl 2xl:text-5xl">
              {currentRacer.name2}
            </p>
          </div>
          <div className="mt-5">
            <ul className="list-disc list-inside flex gap-5 lg:gap-7 xl:gap-10">
              {Object.keys(Racers).map((key) => (
                <HeroButton
                  key={key}
                  racerKey={key as RacerKey}
                  racer={racer}
                  setRacer={setRacer}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default RacingHero;
