"use client";

import {
  About,
  Achievements,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "@/components";

export default function HomePage() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="relative min-h-screen bg-primary bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Achievements />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
