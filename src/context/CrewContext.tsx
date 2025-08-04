import { createContext } from "react";

import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";

export type CrewMemberType = {
  id: number;
  name: string;
  rank: string;
  bio: string;
  image: string;
};

export type CrewContextType = {
  activeCrewMember: number;
  setActiveCrewMember: React.Dispatch<React.SetStateAction<number>>;
  crewMembers: CrewMemberType[];
};

export const crewMembers: CrewMemberType[] = [
  {
    id: 1,
    name: "douglas hurley",
    rank: "commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: douglas,
  },
  {
    id: 2,
    name: "mark shuttleworth",
    rank: "mission specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: mark,
  },
  {
    id: 3,
    name: "victor glover",
    rank: "pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    image: victor,
  },
  {
    id: 4,
    name: "anousheh ansari",
    rank: "flight engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: anousheh,
  },
];

const defaultContext: CrewContextType = {
  activeCrewMember: 1,
  setActiveCrewMember: () => {},
  crewMembers: crewMembers,
};

export const CrewContext = createContext<CrewContextType>(defaultContext);
