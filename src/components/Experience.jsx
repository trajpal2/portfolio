"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "@/styles";
import { experiences } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";

const CompanyIcon = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="text-white font-bold text-sm">
        {alt?.charAt(0) || "?"}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className="w-[70%] h-[70%] object-contain"
      onError={() => setFailed(true)}
      unoptimized
    />
  );
};

const ExperienceCard = ({ experience, index }) => {
  const isLeft = index % 2 === 0;
  const mobileAlign = isLeft ? "left" : "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -80px 0px" }}
      transition={{ type: "spring", stiffness: 100, damping: 18, delay: index * 0.06 }}
      className="relative flex flex-col md:flex-row items-start md:items-center w-full mb-12 md:mb-16"
    >
      {/* Mobile: alternate card left / right */}
      <div
        className={`flex md:hidden items-start gap-3 w-full max-w-md ${
          isLeft ? "flex-row justify-start mr-auto" : "flex-row-reverse justify-end ml-auto"
        }`}
      >
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-lg ring-2 ring-primary"
          style={{ background: experience.iconBg }}
        >
          <CompanyIcon src={experience.icon} alt={experience.company_name} />
        </div>
        <ExperienceContent experience={experience} align={mobileAlign} />
      </div>

      {/* Desktop: alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 w-full items-center">
        <div className={`${isLeft ? "order-1" : "order-3"} flex justify-end`}>
          {isLeft ? (
            <ExperienceContent experience={experience} align="right" />
          ) : (
            <span className="text-secondary text-sm font-semibold whitespace-nowrap pr-4">
              {experience.date}
            </span>
          )}
        </div>

        <div className="order-2 flex flex-col items-center z-10">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center ring-4 ring-primary"
            style={{ background: experience.iconBg }}
          >
            <CompanyIcon src={experience.icon} alt={experience.company_name} />
          </div>
        </div>

        <div className={`${isLeft ? "order-3" : "order-1"} flex justify-start`}>
          {isLeft ? (
            <span className="text-secondary text-sm font-semibold whitespace-nowrap pl-4">
              {experience.date}
            </span>
          ) : (
            <ExperienceContent experience={experience} align="left" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceContent = ({ experience, align = "left" }) => (
  <div
    className={`bg-tertiary rounded-2xl p-6 shadow-card w-full md:max-w-md min-w-0 ${
      align === "right" ? "text-right" : "text-left"
    }`}
  >
    <span
      className={`md:hidden text-secondary text-sm font-semibold block ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {experience.date}
    </span>
    <h3 className="text-white text-[22px] font-bold mt-1 md:mt-0">{experience.title}</h3>
    <p className="text-secondary text-[15px] font-semibold mt-1">{experience.company_name}</p>
    <ul
      className={`mt-4 space-y-2 list-disc ${
        align === "right" ? "list-inside ml-0" : "ml-5"
      }`}
    >
      {experience.points.map((point, i) => (
        <li key={i} className="text-white-100 text-[14px] leading-relaxed tracking-wide">
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Experience</h2>
    </motion.div>

    {/* Plain wrapper — avoid parent fadeIn keeping children at opacity 0 */}
    <div className="mt-20 relative max-w-5xl mx-auto min-h-[200px]">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-600/70 rounded-full" />

      {experiences.map((experience, index) => (
        <ExperienceCard key={`${experience.company_name}-${index}`} experience={experience} index={index} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, "experience");
