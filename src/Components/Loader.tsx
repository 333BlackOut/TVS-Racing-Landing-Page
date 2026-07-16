import "./Loader.css";
import loaderVideo from "../assets/loader-video.mp4";

const Loader = () => {
  return (
    <div className="absolute">
      <div className="loader w-screen h-screen relative z-50">
        <video
          src={loaderVideo}
          autoPlay
          muted
          playsInline
          className="absolute w-full h-full inset-0 object-cover"
        ></video>
        <div className="loader-logo absolute inset-0 flex justify-center items-center">
          <h1 className="text-9xl font-bold z-10 tracking-widest">TVS</h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
