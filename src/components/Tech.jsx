import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [visibleTechs, setVisibleTechs] = useState([]);

  useEffect(() => {
    // Limit to 6 visible canvases at a time
    setVisibleTechs(technologies.slice(0, 12));
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {visibleTechs.map(({ name, icon }) => (
        <div className="w-28 h-28" key={name}>
          <BallCanvas icon={icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");