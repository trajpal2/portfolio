"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "@/styles";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils/motion";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setPhoneError("");
    setConfirmation("");

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }
    if (!form.phone.trim()) {
      setPhoneError("Phone number is required.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.error?.toLowerCase().includes("email")) {
          setEmailError(data.error);
        } else {
          setConfirmation(data.error || "Something went wrong. Please try again.");
        }
        return;
      }

      setConfirmation("Thank you! I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "", phone: "" });
    } catch {
      setConfirmation("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden items-stretch">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-[0.55] flex flex-col items-center justify-center min-h-[280px] xl:min-h-[520px]"
      >
        <div className="relative w-full max-w-md aspect-[400/420]">
          <Image
            src="/assets/contact-person.svg"
            alt="Cartoon character inviting you to send a message"
            fill
            className="object-contain drop-shadow-xl"
            priority
            unoptimized
          />
        </div>
        <p className="mt-4 text-secondary text-sm text-center max-w-xs">
          Drop your details here — I will reply as soon as I can.
        </p>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="flex-1 bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <InputField
            label="Your Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name here..."
            type="text"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}

          <InputField
            label="Your Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone number here..."
            type="tel"
          />
          {phoneError && <span className="text-red-500">{phoneError}</span>}

          <InputField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email address here..."
            type="email"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say...?"
              rows={4}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {confirmation && (
            <p className={confirmation.startsWith("Thank") ? "text-green-500" : "text-red-400"}>
              {confirmation}
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
