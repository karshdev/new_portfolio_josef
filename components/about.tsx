"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  Hi, I'm Josef Almasri, a passionate software engineering student at Gothenburg University. I have a strong foundation in various programming languages and frameworks, and I thrive on solving complex problems and creating innovative solutions. I am particularly interested in how innovative technology can drive significant positive change in our world, especially in areas such as artificial intelligence and communication technology. When I'm not immersed in coding or learning about the latest tech trends, I love working out and maintaining a healthy lifestyle. Fitness is a big part of my life, and I enjoy the balance it brings. I also cherish spending time with friends, whether it's exploring new places or just hanging out and enjoying each other's company.
  
  Through my portfolio, you can see the diverse range of projects I've worked on, showcasing my skills and dedication to software engineering. I'm always excited to take on new challenges and collaborate with others to build something impactful. Feel free to reach out :)
</p>



      
    </motion.section>
  );
}
