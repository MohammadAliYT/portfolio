import {
  mobile,
  backend,
  fiverr,
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
  upwork,
  hl,
  shayan,
  carrent,
  jobit,
  tripguide,
  threejs,
  hl_ceo,
  ss_ceo,
  gillani,
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
    title: "MERN Stack Developer",
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
    title: "UI/UX Engineer",
    icon: web,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    title: "UI/UX Designer",
    company_name: "Fiverr - Freelance & Remote",
    icon: fiverr,
    iconBg: "#383E56",
    date: "Feburary 2021 - May 2021",
    points: [
      "Designed high fidelity wireframes,user interfaces and prototypes for client's In-flight catering business application",
      "Conducted system analysis and design for client's application to make an optimised user experience.",
    ],
  },
  {
    title: "UI/UX Designer & Frontend Developer",
    company_name: "Upwork - Freelance & Remote",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Dec 2021",
    points: [
      "Designed user-interface of a Fitness and nutrition tracking web application in Figma",
      "Developed high-fidelity mockups and wireframes",
      "Developed Frontend using NextJS and TailwindCSS",
    ],
  },
  {
    title: "ReactJS/React Native",
    company_name: "Hawk Logix",
    icon: hl,
    iconBg: "#383E56",
    date: "Feb 2022 - June 2022",
    points: [
      "Developed Human Resource Management Software using React Native and Expo CLI.",
      "Worked on frontend development of multiple projects such as medical billing application, shoe warehouse management application and e-comm app for floor tiles",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Shayan Solutions",
    icon: shayan,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Present",
    points: [
      "Worked on Employee Managment System using MERN Stack",
      "Worked on development of components for a no-code application builder in ReactJS",
      "Developed a freelancing platform on React Native and NodeJS",
      "Developed a meditation application using React Native and NodeJS",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ali proved me wrong.",
    name: "Ta Cene Gillani",
    designation: "CEO",
    company: "Better Solutions Co",
    image: gillani,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mohammad does.",
    name: "Saeed Anjum",
    designation: "CEO",
    company: "Hawk Logix",
    image: hl_ceo,
  },
  {
    testimonial:
      "Mohammad Ali is an amazing MERN Stack developer and has contibuted success to alot of our projects.",
    name: "Arslan Ali",
    designation: "CEO",
    company: "Shayan Solutions",
    image: ss_ceo,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
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
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
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
