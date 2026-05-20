"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import educationalCrm from "../../public/assets/projects/educational-crm.png";
import enterpriseApplications from "../../public/assets/projects/enterprise-applications.png";
import ecommerceEdtech from "../../public/assets/projects/ecommerce-edtech.png";
import travelPropertyApps from "../../public/assets/projects/travel-property-apps.png";

import { styles } from "@/styles";
import { SectionWrapper } from "@/hoc";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import { assetPath } from "@/utils/assetPath";

const PROJECT_IMAGES = {
  "/assets/projects/educational-crm.png": educationalCrm,
  "/assets/projects/enterprise-applications.png": enterpriseApplications,
  "/assets/projects/ecommerce-edtech.png": ecommerceEdtech,
  "/assets/projects/travel-property-apps.png": travelPropertyApps,
};

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const imageSrc = useMemo(
    () => PROJECT_IMAGES[image] ?? assetPath(image),
    [image]
  );

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0, 0.75)}
      whileHover={{ scale: 1.02, y: -4 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl bg-black-100">
        <Image
          src={imageSrc}
          alt={name}
          width={720}
          height={460}
          className="h-full w-full object-cover"
          unoptimized
          priority={name === "Educational CRM"}
        />
        {source_code_link && source_code_link !== "#" && (
          <motion.div className="absolute inset-0 flex justify-end m-3 opacity-0 hover:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              aria-label="View source"
            >
              <Image
                src={assetPath("/assets/github.png")}
                alt="github"
                width={20}
                height={20}
                className="object-contain"
                unoptimized
              />
            </button>
          </motion.div>
        )}
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p
        variants={fadeIn("", "", 0.1, 0.75)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Projects undertaken across EdTech, CRM, e-commerce, travel, property management,
        payment gateways, and enterprise applications — built with modern full-stack and cloud
        technologies.
      </motion.p>
    </div>
    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} {...project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "projects");
