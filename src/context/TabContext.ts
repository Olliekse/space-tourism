import { createContext } from "react";
import moon from "../assets/destination/image-moon.png"
import mars from "../assets/destination/image-mars.png"
import europa from "../assets/destination/image-europa.png"
import titan from "../assets/destination/image-titan.png"

export type DestinationType = {
  id: number;
  name: string;
  title: string;
  description: string;
  distance: string;
  travelTime: string;
  image: string;
};

export type TabContextType = {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  destinations: DestinationType[];
};

const defaultContext: TabContextType = {
  activeTab: 1,
  setActiveTab: () => {},
  destinations: [],
};

export const destinationData: DestinationType[] = [
  {
    id: 1,
    name: "Moon",
    title: "Moon",
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
    image: moon,
  },
  {
    id: 2,
    name: "Mars",
    title: "Mars",
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 mil. km",
    travelTime: "9 months",
    image: mars,
  },
  {
    id: 3,
    name: "Europa",
    title: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travelTime: "3 years",
    image: europa,
  },
  {
    id: 4,
    name: "Titan",
    title: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travelTime: "7 years",
    image: titan,
  },
];

export const TabContext = createContext<TabContextType>(defaultContext);
