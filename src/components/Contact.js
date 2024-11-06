"use client";
import { useState } from "react";
import { BsArrowRight, 
  BsGithub, 
  BsLinkedin, 
  BsTwitterX } from "react-icons/bs";
import { init, send } from '@emailjs/browser';
import FadeIn from "@/variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  init("tuGDQ8RxbXUfx_5oj");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await send('service_3r6mfch', 'template_nw4pbdn', formData);
      console.log('SUCCESS!', response.status, response.text);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('FAILED...', err);
    }
  };

  return (
    <div id="contact" className="flex flex-col lg:flex-row justify-around container mx-auto pt-12 md:py-32 text-start md:px-28 gap-x-10">
      
      <FadeIn direction="right" delay={0.5}>
        <div className="flex-1 flex flex-col items-start">
          <h2 className="h2 px-2">Get a Response In Minutes!</h2>
          <div className="flex space-x-4 mt-4 mb-8 px-2">
            <a href="www.linkedin.com/in/gloria-okegbemi-0a65011b0" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="text-xl" />
            </a>
            <a href="https://x.com/ini01uwa?t=TLJtDXlIkKoAMJRgnHB4Gw&s=09" target="_blank" rel="noopener noreferrer">
              <BsTwitterX className="text-xl" />
            </a>
            <a href="https://github.com/GloriaIni" target="_blank" rel="noopener noreferrer">
              <BsGithub className="text-xl" />
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Form */}
      <FadeIn direction="left" delay={0.6}>
        <div className="flex-1 rounded bg-gradient-to-t from-black/95 via-gray-900/90 to-black/65 px-5 py-9 lg:p-16 flex flex-col">
          <p className="text-gray-50 py-5">Send your message now!</p>
          <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
            {/* Input */}
            <div className="flex flex-col gap-y-6 md:flex-row md:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input flex-1"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input flex-1"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="btn rounded-2xl max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden bg-gray-50 text-zinc-900 hover:shadow-xl group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-medium">Let&apos;s talk</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </FadeIn>
    </div>
  );
};

export default Contact;
