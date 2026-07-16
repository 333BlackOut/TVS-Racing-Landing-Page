import type { RacerKey } from "../data/racers";

type HeroButtonProps = {
  racerKey: RacerKey;
  racer: RacerKey;
  setRacer: React.Dispatch<React.SetStateAction<RacerKey>>;
};

const HeroButton = ({ racerKey, racer, setRacer }: HeroButtonProps) => {
  const isActive = racerKey === racer;
  return (
    <li className="list-none">
      <button
        type="button"
        onClick={() => setRacer(racerKey)}
        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
          isActive
            ? "bg-blue-600 scale-125 shadow-lg"
            : "bg-white/50 hover:bg-white"
        }`}
      />
    </li>
  );
};

export default HeroButton;
