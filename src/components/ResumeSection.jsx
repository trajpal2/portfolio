import Reveal from "./Reveal";

export default function ResumeSection() {
  return (
    <section className="section section--alt" id="resume">
      <div className="section__inner resume-block">
        <Reveal>
          <p className="eyebrow">Resume</p>
          <h2>Download Resume</h2>
          <p className="section__lead">
            Senior Full Stack Engineer / Full Stack Architect — 12+ years across enterprise
            applications, cloud and AI systems.
          </p>
          <a className="btn btn--primary" href="/resume.pdf" download="Tushant_Rajpal_Resume.pdf">
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
