import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"; // Import icons

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_raicgwu",
        "template_w3rmq8v",
        {
          from_name: form.name,
          to_name: "Megersa Muleta",
          from_email: form.email,
          to_email: "megibiratu@gmail.com",
          message: form.message,
        },
        "WlLUgmMgwhYhHHJ8n"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      {/* Contact Form */}
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button type="submit" className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Social Media Icons Section */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://github.com/megersam" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github className="w-10 h-10 text-white transition-transform transform hover:scale-125 hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com/in/megersam" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin className="w-10 h-10 text-white transition-transform transform hover:scale-125 hover:text-blue-500" />
          </a>
          <a href="https://twitter.com/megersam" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Twitter className="w-10 h-10 text-white transition-transform transform hover:scale-125 hover:text-blue-400" />
          </a>
          <a href="https://instagram.com/megersa_muleta" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Instagram className="w-10 h-10 text-white transition-transform transform hover:scale-125 hover:text-pink-500" />
          </a>
          <a href="https://t.me/@megersa_m" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTelegram className="w-10 h-10 text-white transition-transform transform hover:scale-125 hover:text-green-500" />
          </a>
        </div>
      </motion.div>

      {/* Earth Animation */}
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
