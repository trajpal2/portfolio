"use client";

import { useEffect, useState } from "react";

const TypewriterText = ({
  strings,
  pauseFor = 1500,
  typeSpeed = 80,
  deleteSpeed = 40,
  className = "",
}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index % strings.length] ?? "";
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseFor);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % strings.length);
    } else if (deleting) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
    } else {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, strings, pauseFor, typeSpeed, deleteSpeed]);

  return (
    <span className={`text-accent ${className}`}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;
