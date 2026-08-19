import { useEffect, useRef } from "react";
import { startTypewriter } from "../utils/typewriter";

export default function TypewriterHeadline({
  specialities = [],
  prefix = "I build",
  className = "",
}) {
  const textRef = useRef(null);

  useEffect(() => {
    const stop = startTypewriter(textRef.current, specialities, {
      typeSpeed: 85,
      deleteSpeed: 35,
      holdDelay: 1800,
      pauseDelay: 450,
    });
    return stop;
  }, [specialities]);

  const longest = specialities.reduce(
    (max, item) => (item.length > max.length ? item : max),
    ""
  );

  return (
    <h1 className={`typewriter-headline ${className}`.trim()}>
      <span className="typewriter-headline__prefix">{prefix} </span>
      <span className="typewriter-headline__dynamic">
        <span className="typewriter-headline__measure" aria-hidden="true">
          {longest}
        </span>
        <span className="typewriter-headline__active">
          <span ref={textRef} className="typewriter-headline__text" aria-live="polite" />
          <span className="typewriter-headline__cursor" aria-hidden="true">
            |
          </span>
        </span>
      </span>
    </h1>
  );
}
