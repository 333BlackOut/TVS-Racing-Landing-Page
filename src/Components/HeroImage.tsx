import "./HeroImage.css";

type HeroImageProps = {
  currentImage: string;
  nextImage: string;
  isTransitioning: boolean;
};

const HeroImage = ({
  currentImage,
  nextImage,
  isTransitioning,
}: HeroImageProps) => {
  return (
    <>
      <img
        key={currentImage}
        src={currentImage}
        alt=""
        className={`h-full w-full inset-0 object-cover -z-1 fixed p-0 animate-hero brightness-70 ${isTransitioning ? "animate-heroFadeOut" : ""}`}
      />
      <img
        key={nextImage}
        src={nextImage}
        alt=""
        className={`h-full w-full inset-0 object-cover -z-1 fixed p-0 animate-hero brightness-70 ${isTransitioning ? "animate-heroFadeIn" : ""}`}
      />
    </>
  );
};

export default HeroImage;
