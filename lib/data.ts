import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Highschool",
    location: "Sweden, Gothenburg",
    description:
      "Completed my Highschool education in Natural Science (Gymnasieakademin).",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Engineering and Management Student",
    location: "Gothenburg University, Sweden",
    description:
      "Pursuing a degree in Software Engineering and Management, with a comprehensive focus on developing advanced technical and managerial skills.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2022 - May 2025",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Luday, Gothenburg, Sweden",
    description:
      "Served as a full-stack developer intern, actively contributing to an Agile Scrum team to develop a management tool similar to Trello for internal company use.",
    icon: React.createElement(FaReact),
    date: "Mar 2024 - Jun 2024",
  },
  {
    title: "Developer",
    location: "Algebraskolan, Gothenburg, Sweden",
    description:
      "Developed a custom digital reward system app using Flutter and Firebase, replacing a physical coin system with digital transactions. This app is currently in use by the school to streamline and digitalize their reward system.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Algebrona app",
    description:
      "Developed a Flutter and Firebase app for a school, enabling 300 users to manage digital rewards and educational features.",
    tags: ["Flask", "Python", "JavaScript", "Vue.js", "MongoDB"],
    imageUrl: "/Algebrona.png",
    deployed: "https://play.google.com/store/apps/details?id=com.aj.algebrona&hl=en_US",
    github:"https://github.com/Abdurahim00/Algebraskolan/tree/main/algebraskolan2"
  },
  {
    title: "TALKLINK Chat App",
    description:
      "Built TALKLINK, a multi-language chat app featuring real-time translation powered by ChatGPT OpenAI API, using Vue, JavaScript, Node.js, and MongoDB.",
    tags: ["Vue", "JavaScript", "Node.js", "MongoDB"],
    imageUrl: "/Teaser.jpg",
    deployed: "https://talklink.online",
      github:"https://github.com/Abdurahim00/TALKLINK"
  },
  {
    title: "Sleep Well Project",
    description:
      "Developed a Flutter app connecting to an Arduino microcontroller with sensors, using MQTT to measure and evaluate sleep performance.",
    tags: ["Flutter", "Microcontroller", "MQTT", "Firebase"],
    imageUrl: "/sleepwellmobile.png",
    deployed: "",
    github:"https://github.com/Abdurahim00/Sleep-Well"
  },
  {
    title: "Gothenburg Dentist Appointment System",
    description:
      "Engineered a distributed system for dentist appointments in Gothenburg using Python (Flask), JavaScript, Vue.js, and MongoDB.",
    tags: ["Flask", "Python", "JavaScript", "Vue.js", "MongoDB"],
    imageUrl: "/dentist2.jpg",
    deployed: "",
    github:"https://github.com/Abdurahim00/Dental-booking-System"
  },
 
 
];



export const skillsData = [
  "Java",
  "JavaScript",
  "Python",
  "Flutter",
  "Node.js",
  "Flask",
  "MQTT",
  "Arduino",
  "Vue.js",
  "React",
  "Nextjs",
  "MongoDB",
  "Firebase",
  "JUnit",
  "Git",
  "Postman",
  "Docker",
  "Linux"
] as const;

