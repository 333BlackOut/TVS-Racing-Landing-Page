import image0 from "../assets/tvs-racing/image0.jpg";
import image1 from "../assets/tvs-racing/image1.jpg";
import image2 from "../assets/tvs-racing/image2.jpeg";
import image3 from "../assets/tvs-racing/image3.jpg";
import image4 from "../assets/tvs-racing/image4.jpg";
import image5 from "../assets/tvs-racing/image5.jpg";
import image6 from "../assets/tvs-racing/image6.jpg";
import image7 from "../assets/tvs-racing/image7.jpeg";
import image8 from "../assets/tvs-racing/image8.jpg";
import image9 from "../assets/tvs-racing/image9.jpg";

export const Racers = {
  racer0: {
    name1: "Abdul",
    name2: "Wahid Tanveer",
    image: image0,
  },
  racer1: {
    name1: "Aishwarya",
    name2: "Pissay",
    image: image1,
  },
  racer2: {
    name1: "Aravind",
    name2: "KP",
    image: image2,
  },
  racer3: {
    name1: "Harith",
    name2: "Noah",
    image: image3,
  },
  racer4: {
    name1: "Jagan",
    name2: "Kumar",
    image: image4,
  },
  racer5: {
    name1: "KY",
    name2: "Ahamed",
    image: image5,
  },
  racer6: {
    name1: "R",
    name2: "Nataraj",
    image: image6,
  },
  racer7: {
    name1: "Rugved",
    name2: "Barguje",
    image: image7,
  },
  racer8: {
    name1: "Samuel",
    name2: "Jacob",
    image: image8,
  },
  racer9: {
    name1: "Syed",
    name2: "Asif Ali",
    image: image9,
  },
};

export type RacerKey = keyof typeof Racers;

export const racerKeys = Object.keys(Racers) as RacerKey[];