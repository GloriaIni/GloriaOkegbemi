"use client";
import { useState } from "react";
import { BsArrowRight, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { init, send } from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // User ID
  init("tuGDQ8RxbXUfx_5oj"); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send('service_3r6mfch', 'template_nw4pbdn', formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <div id="contact" className="h-full w-full flex flex-col lg:flex-row justify-around container mx-auto pt-12 md:py-32 text-start md:px-28">
      <div className="flex-1">
        <h2 className="h2 px-2">Get a Response In Minutes!</h2>
        <div className="flex">
          <BsLinkedin className="text-xl px-2" />
          <BsTwitterX className="px-2" />
          <BsGithub className="px-2" />
        </div>
      </div>

      {/* Form */}
      <div className="rounded bg-zinc-600 px-5 py-9 lg:p-16 flex flex-col flex-1">
        <p className="text-gray-50 py-5">Send your message now!</p>
        <form className="flex flex-col gap-6 w-full mx-auto" onSubmit={handleSubmit}>
          {/* Input */}
          <div className="flex gap-y-6 md:gap-x-6 flex-col md:w-full">
            <input type="text" name="name" placeholder="Your name" className="input flex-1" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" className="input flex-1" value={formData.email} onChange={handleChange} required />
          </div>
          <input type="text" name="subject" placeholder="Subject" className="input" value={formData.subject} onChange={handleChange} required />
          <textarea name="message" placeholder="Message" className="textarea" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit" className="btn rounded-2xl max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden bg-gray-50 text-zinc-900 hover:shadow-xl group">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-medium">Let&apos;s talk</span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
