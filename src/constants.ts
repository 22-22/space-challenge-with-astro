import moon from "./assets/destination/image-moon.png";
import moonWebp from "./assets/destination/image-moon.webp";
import mars from "./assets/destination/image-mars.png";
import marsWebp from "./assets/destination/image-mars.webp";
import europa from "./assets/destination/image-europa.png";
import europaWebp from "./assets/destination/image-europa.webp";
import titan from "./assets/destination/image-titan.png";
import titanWebp from "./assets/destination/image-titan.webp";
import commander from "./assets/crew/image-douglas-hurley.png";
import commanderWebp from "./assets/crew/image-douglas-hurley.webp";
import specialist from "./assets/crew/image-mark-shuttleworth.png";
import specialistWebp from "./assets/crew/image-mark-shuttleworth.webp";
import pilot from "./assets/crew/image-victor-glover.png";
import pilotWebp from "./assets/crew/image-victor-glover.webp";
import engineer from "./assets/crew/image-anousheh-ansari.png";
import engineerWebp from "./assets/crew/image-anousheh-ansari.webp";

export const planetsData = [
    {
        "name": "moon",
        "description": `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
regain perspective and come back refreshed.While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.`,
        "distance": "384,400 km",
        "travelTime": "3 days",
        "images": {
            "png": moon,
            "webp": moonWebp
        },
    },
    {
        "name": "mars",
        "description": `Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!`,
        "distance": "225 mil. km",
        "travelTime": "9 months",
        "images": {
            "png": mars,
            "webp": marsWebp
        },
    },
    {
        "name": "europa",
        "description": `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.`,
        "distance": "628 mil. km",
        "travelTime": "3 years",
        "images": {
            "png": europa,
            "webp": europaWebp
        },
    },
    {
        "name": "titan",
        "description": `The only moon known to have a dense atmosphere other than Earth, Titan
  is a home away from home (just a few hundred degrees colder!). As a
  bonus, you get striking views of the Rings of Saturn.`,
        "distance": "1.6 bil. km",
        "travelTime": "7 years",
        "images": {
            "png": titan,
            "webp": titanWebp
        },
    },
];

export const crewData = [
    {
        "id": 1,
        "name": "Douglas Hurley",
        "images": {
            "png": commander,
            "webp": commanderWebp
        },
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        "id": 2,
        "name": "Mark Shuttleworth",
        "images": {
            "png": specialist,
            "webp": specialistWebp
        },
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        "id": 3,
        "name": "Victor Glover",
        "images": {
            "png": pilot,
            "webp": pilotWebp
        },
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        "id": 4,
        "name": "Anousheh Ansari",
        "images": {
            "png": engineer,
            "webp": engineerWebp
        },
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
];