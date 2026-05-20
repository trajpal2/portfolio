"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/styles";
import { fadeIn, textVariant } from "@/utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    whileHover={{ scale: 1.03, y: -4 }}
    className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
      <Image src={icon} alt={title} width={64} height={64} className="object-contain" unoptimized />
      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
  </motion.div>
);

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      I am a Senior Software Engineer with 8+ years of experience building scalable web
      applications, cloud-native systems, and AI-powered enterprise solutions. I specialize in
      full-stack development with .NET, Node.js, React, and Next.js, and have led teams delivering
      CRM platforms, EdTech products, and high-traffic APIs handling 50K+ daily requests. Passionate
      about digital transformation, I leverage AI and automation to improve productivity and
      reduce operational costs.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
