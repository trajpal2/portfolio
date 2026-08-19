import { useState } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { SITE } from "../data/site";

const initial = { name: "", email: "", company: "", project: "", message: "" };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email.";
  if (values.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", text: "" });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus({ type: "error", text: "Please fix the highlighted fields." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "", text: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: `Company: ${values.company || "N/A"}\nProject: ${values.project || "N/A"}\n\n${values.message}`,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus({ type: "success", text: data.message || "Thanks — message received." });
      setValues(initial);
      setErrors({});
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Could not send message." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact | Let's Build Something Meaningful | Tushant Rajpal"
        description="Contact Tushant Rajpal to discuss architecture, enterprise applications, AI systems and automation solutions."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Meaningful"
        lead="Have a complex business problem, application idea or technology challenge? Let's discuss the architecture and solution."
      />
      <section className="section">
        <div className="section__inner contact-page">
          <Reveal className="contact-meta">
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                Profile
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                Profile
              </a>
            </p>
          </Reveal>

          <Reveal>
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={values.name} onChange={onChange} className={errors.name ? "is-invalid" : ""} />
                <span className="error">{errors.name || ""}</span>
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={values.email} onChange={onChange} className={errors.email ? "is-invalid" : ""} />
                <span className="error">{errors.email || ""}</span>
              </div>
              <div className="form-field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" value={values.company} onChange={onChange} />
              </div>
              <div className="form-field">
                <label htmlFor="project">Project / Requirement</label>
                <input id="project" name="project" value={values.project} onChange={onChange} />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={values.message} onChange={onChange} className={errors.message ? "is-invalid" : ""} />
                <span className="error">{errors.message || ""}</span>
              </div>
              <button type="submit" className="btn btn--primary" disabled={submitting}>
                {submitting ? "Sending..." : "Start a Conversation"}
              </button>
              <p className={`form-status${status.type === "error" ? " is-error" : ""}`}>{status.text}</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
