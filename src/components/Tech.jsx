"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { technologies, techPositions } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/styles";
import { fadeIn, textVariant } from "@/utils/motion";

const DraggableTechIcon = ({ name, icon, position, index, containerRef }) => (
  <motion.div
    drag
    dragConstraints={containerRef}
    dragElastic={0.12}
    dragMomentum={false}
    whileDrag={{ scale: 1.12, zIndex: 50, cursor: "grabbing" }}
    whileHover={{ scale: 1.06 }}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.03, type: "spring", stiffness: 260 }}
    className="absolute w-[88px] h-[88px] sm:w-[100px] sm:h-[100px] bg-tertiary rounded-2xl p-3 shadow-card flex flex-col items-center justify-center cursor-grab border border-white/10 hover:border-accent/40 select-none touch-none"
    style={{ left: `${position.x}%`, top: `${position.y}%` }}
    title={`Drag ${name}`}
  >
    <Image
      src={icon}
      alt={name}
      width={52}
      height={52}
      className="w-10 h-10 sm:w-12 sm:h-12 object-contain pointer-events-none"
      draggable={false}
    />
    <span className="text-secondary text-[9px] sm:text-[10px] mt-1.5 text-center leading-tight pointer-events-none line-clamp-2">
      {name}
    </span>
  </motion.div>
);

const Tech = () => {
  const containerRef = useRef(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Skills</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.5)}
        className="mt-4 text-center text-secondary text-sm"
      >
        Drag any icon to explore — all technologies from my stack
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.15, 0.5)}
        className="mt-10 max-w-5xl mx-auto"
      >
        <div
          ref={containerRef}
          className="relative w-full h-[520px] sm:h-[600px] md:h-[680px] rounded-3xl bg-black-100/60 border border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(159,176,194,0.07)_0%,_transparent_70%)] pointer-events-none" />

          {technologies.map((tech, index) => (
            <DraggableTechIcon
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              position={techPositions[index] ?? { x: 10, y: 10 }}
              index={index}
              containerRef={containerRef}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
