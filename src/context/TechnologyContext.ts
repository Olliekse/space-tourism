import { createContext } from "react";
import vehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";

export type TechnologyType = {
  id: number;
  name: string;
  title: string;
  description: string;
  imageLandscape: string;
  imagePortrait: string;
};

export type TechnologyContextType = {
  activeTech: number;
  setActiveTech: React.Dispatch<React.SetStateAction<number>>;
  technologies: TechnologyType[];
};

const defaultContext: TechnologyContextType = {
  activeTech: 1,
  setActiveTech: () => {},
  technologies: [],
};

export const technologyData: TechnologyType[] = [
  {
    id: 1,
    name: "launch vehicle",
    title: "launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imageLandscape: vehicleLandscape,
    imagePortrait: vehiclePortrait,
  },
  {
    id: 2,
    name: "spaceport",
    title: "spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    imageLandscape: spaceportLandscape,
    imagePortrait: spaceportPortrait,
  },
  {
    id: 3,
    name: "space capsule",
    title: "space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imageLandscape: capsuleLandscape,
    imagePortrait: capsulePortrait,
  },
];

export const TechnologyContext =
  createContext<TechnologyContextType>(defaultContext);
