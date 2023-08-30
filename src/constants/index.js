import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  giga,
  unipa,
  diploma,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Diploma Ragioneria Finanza & Marketing",
    company_name: "Finanza & Marketing",
    icon: diploma,
    iconBg: "#383E56",
    date: "Novembre 2015 - Luglio 2017",
    points: [
      "Oltre alle materie importanti per ogni indirizzo ho studiato Economia aziendale, informatica, diritto, economia politica, scienze delle finanze.",
      
      
    ],
  },
  {
    title: "Ingegneria dell'innovazione per le imprese digitali",
    company_name: "Unipa",
    icon: unipa,
    iconBg: "#383E56",
    date: "Settembre 2017 - Luglio 2023",
    points: [
      "Durante il percorso di studi ho avuto la possibilità di approfondire lo studio sui linguaggi di programmazione C,Java,R e scripting linux.",
      "Ho avuto la possibilità di collaborare con diversi colleghi per la preparazione di progetti e esami.",
      "In contemporanea agli studi ho svolto diversi lavori finchè la voglia di affinare le mie compotenze informatiche mi ha portato a inizio 2020 a decidere di concentrarmi sugli studi.",
      
    ],
  },
  {
    title: "Ingegneria informatica - Inteliggenza Artificiale",
    company_name: "Unipa",
    icon: unipa,
    iconBg: "#383E56",
    date: "Settembre 2023 - In corso",
    points: [
      
      
      
    ],
  },
  
 
  
];

const testimonials = [
  {
    testimonial:
      "Ha reso possibile mettere online il mio sito per come lo avevo immagginato e disegnato.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Non ho mai incotrato un web developer che si prendesse cura cosi dei clienti.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Dopo l'ottimizzazione di Daniele , il traffico nel nostro sito è incrementato del 50%, Noi non possiamo ringraziarlo abbastanza!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Giga Rent",
    description:
      "Sviluppo della piattaforma di autonoleggio Giga-Rent con il mantentimento delle tecnologie utilizzate.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Love Italy",
    description:
      "descrizione",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Crypt Moore",
    description:
      "Piattaforma di e-learning per essere seguiti durante un percorso di trading visionando video lezioni sul portale CryptMoore.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "e-learning",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
