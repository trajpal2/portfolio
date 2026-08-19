import { useEffect, useRef } from "react";
import { startTypewriter } from "../utils/typewriter";

export default function TypewriterText({ phrases, className = "" }) {
  const textRef = useRef(null);

  useEffect(() => {
    const stop = startTypewriter(textRef.current, phrases);
    return stop;
  }, [phrases]);

  return (
    <span className={`typewriter ${className}`.trim()}>
      <span ref={textRef} className="typewriter__text" aria-live="polite" />
      <span className="typewriter__cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
