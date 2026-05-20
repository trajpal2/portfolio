"use client";

import { motion } from "framer-motion";
import { styles } from "@/styles";
import { ComputersCanvas } from "./canvas";
import TypewriterText from "./TypewriterText";

const TYPEWRITER_STRINGS = [
  "Scalable APIs",
  "Cloud-Native Apps",
  "AI-Powered CRMs",
  "Full-Stack Solutions",
];

const Hero = () => (
  <section className="relative w-full min-h-screen mx-auto bg-primary">
    {/* 3D model — behind content */}
    <div className="absolute inset-0 z-0">
      <ComputersCanvas />
    </div>

    {/* Hero text — above canvas */}
    <motion.div
      className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} pt-[120px] flex flex-row items-start gap-5`}
    >
      <div className="flex flex-col justify-center items-center mt-5">
        <motion.div className="w-5 h-5 rounded-full bg-accent" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I&apos;m <span className="text-accent">Tushant</span>
        </h1>
        <motion.div
          className={`${styles.heroSubText} mt-2 text-white-100 flex flex-wrap items-center gap-x-2`}
        >
          <span>Senior Software Engineer — I build</span>
          <TypewriterText strings={TYPEWRITER_STRINGS} />
        </motion.div>
      </div>
    </motion.div>

    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  </section>
);

export default Hero;
