"use client";

import { motion } from "framer-motion";
import { achievements } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/styles";
import { fadeIn, textVariant } from "@/utils/motion";

const Achievements = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Highlights</p>
      <h2 className={styles.sectionHeadText}>Achievements & Awards</h2>
    </motion.div>

    <ul className="mt-10 flex flex-col gap-4 max-w-4xl">
      {achievements.map((item, index) => (
        <motion.li
          key={item}
          variants={fadeIn("up", "spring", index * 0.1, 0.75)}
          className="text-white-100 text-[16px] leading-[28px] pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-accent"
        >
          {item}
        </motion.li>
      ))}
    </ul>
  </>
);

export default SectionWrapper(Achievements, "achievements");
