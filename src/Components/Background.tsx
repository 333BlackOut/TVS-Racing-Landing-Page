import HeroImage from "./HeroImage";
import HeroVideo from "../assets/tvs-racing/TVS-Racing-Video.mp4";
import { Racers } from "../data/racers";
import { useEffect, useState } from "react";

type Racer = (typeof Racers)[keyof typeof Racers];

type BackgroundProps = {
  currentRacer: Racer;
  playStatus: boolean;
};

const Background = ({ currentRacer, playStatus }: BackgroundProps) => {
  const [currentImage, setCurrentImage] = useState(currentRacer.image);
  const [nextImage, setNextImage] = useState(currentRacer.image);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (currentImage === currentRacer.image) return;

    setNextImage(currentRacer.image);
    setIsTransitioning(true);

    const timeout = setTimeout(() => {
      setCurrentImage(currentRacer.image);
      setIsTransitioning(false);
    }, 800);
    return () => clearTimeout(timeout);
  }, [currentRacer]);

  if (playStatus) {
    return (
      <video
        src={HeroVideo}
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover object-top -z-1"
      ></video>
    );
  } else {
    return (
      <HeroImage
        currentImage={currentImage}
        nextImage={nextImage}
        isTransitioning={isTransitioning}
      />
    );
  }
};

export default Background;
