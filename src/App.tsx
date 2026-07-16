import { useEffect, useState } from "react";
import { Racers, racerKeys } from "./data/racers";
import type { RacerKey } from "./data/racers";
import Navbar from "./Components/Navbar";
import Background from "./Components/Background";
import Hero from "./Components/Hero";
import SwitchVideo from "./Components/SwitchVideo";
import Loader from "./Components/Loader";

const App = () => {
  const [playStatus, setPlayStatus] = useState(false);
  const [racer, setRacer] = useState<RacerKey>("racer0");
  const currentRacer = Racers[racer];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = racerKeys.indexOf(racer);
      const nextIndex = (currentIndex + 1) % racerKeys.length;
      setRacer(racerKeys[nextIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, [racer]);

  useEffect(() => {
    racerKeys.forEach((key) => {
      const img = new Image();
      img.src = Racers[key].image;
    });
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden select-none">
      <Loader />
      <Background currentRacer={currentRacer} playStatus={playStatus} />
      <div className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
        <div className="pointer-events-auto">
          <Hero
            currentRacer={currentRacer}
            playStatus={playStatus}
            racer={racer}
            setRacer={setRacer}
          />
        </div>
        <div className="pointer-events-auto self-start">
          <SwitchVideo playStatus={playStatus} setPlayStatus={setPlayStatus} />
        </div>
      </div>
    </div>
  );
};

export default App;
