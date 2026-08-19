import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader${done ? " is-done" : ""}`} aria-hidden="true">
      <div className="loader__mark">TR</div>
    </div>
  );
}
