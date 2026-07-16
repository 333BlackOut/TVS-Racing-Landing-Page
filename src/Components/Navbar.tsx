import racingLogo from "../assets/tvs-racing-logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-15 pl-5 pr-5 bg-black/40 backdrop-blur-xs">
      <a href="https://www.tvsmotor.com/tvsracing" target="_blank">
        <img
          src={racingLogo}
          alt=""
          className="w-30 h-7 [filter:drop-shadow(0_0_5px_white)]"
        />
      </a>
      <ul className="flex gap-10 font-bold text-white cursor-pointer">
        <li>
          <a href="https://www.tvsmotor.com/" target="_blank">
            TVS
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/siddharth-soni-471430215/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/333BlackOut" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
