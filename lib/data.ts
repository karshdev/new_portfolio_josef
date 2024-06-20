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
    title: "Secondary School",
    location: "United Kingdom",
    description:
      "Completed my secondary school education in the United Kingdom.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Software Engineering and Management Student",
    location: "Gothenburg University, Sweden",
    description:
      "Pursuing a degree in Software Engineering and Management, focusing on areas such as Object-Oriented Programming, Data Structures, and Software Architecture.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2022 - May 2025",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Ladybug, Gothenburg, Sweden",
    description:
      "Worked as a full-stack developer intern, contributing to an Agile Scrum team and developing a management tool integrated with Trello.",
    icon: React.createElement(FaReact),
    date: "Mar 2024 - Jun 2024",
  },
  {
    title: "Developer",
    location: "Alghorabaskolan, Gothenburg, Sweden",
    description:
      "Developed a custom digital reward system app using Flutter and Firebase, transitioning from a physical coin system to digital transactions.",
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
  },
  {
    title: "Gothenburg Dentist Appointment System",
    description:
      "Engineered a distributed system for dentist appointments in Gothenburg using Python (Flask), JavaScript, Vue.js, and MongoDB.",
    tags: ["Flask", "Python", "JavaScript", "Vue.js", "MongoDB"],
    imageUrl: "/dentist2.jpg",
    deployed: "https://example.com/gothenburg-dentist-appointment-system",
  },
  {
    title: "TALKLINK Chat App",
    description:
      "Built TALKLINK, a multi-language chat app featuring real-time translation powered by ChatGPT OpenAI API, using Vue, JavaScript, Node.js, and MongoDB.",
    tags: ["Vue", "JavaScript", "Node.js", "MongoDB", "ChatGPT", "OpenAI API"],
    imageUrl: "/Teaser.jpg",
    deployed: "https://example.com/talklink-chat-app",
  },
  {
    title: "Sleep Well Project",
    description:
      "Developed a Flutter app connecting to an Arduino microcontroller with sensors, using MQTT to measure and evaluate sleep performance.",
    tags: ["Flutter", "Microcontroller", "MQTT", "Firebase"],
    imageUrl: "/sleepwellmobile.png",
    deployed: "https://example.com/sleep-well-project",
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

