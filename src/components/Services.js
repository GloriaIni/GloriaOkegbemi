"use client"

import React, { useState } from 'react';

// Data
const aboutData = [
  
  {
    title: 'Software Engineer',
    info: [
      {
        title: "Frontend Development"
      },

      {
        title: "Website Optimization & Maintenance"
      },

      {
        title: "UI/UX Enhancement"
      },
      
      {
        title: "Visual & Online Presence Enhancement"
      },

      {
        title: "Ready to elevate your brand? [Book a consultation](#contact) and let’s craft your brand’s future"
      },
    ],
  },

  {
    title: 'Branding ',
    info: [
      {
        title: 'Brand Identity Creation',
      },

      {
        title: 'Digital Strategy',
      },

      {
        title: 'Rebranding',
      },

      {
        title: "Visual & Online Presence Enhancement"
      },

      {
        title: "Ready to elevate your brand? [Book a consultation](#) and let’s craft your brand’s future!*"
      }
    ],
  },

  {
    title: 'Coaching',
    info: [  
        {
          title: 'Web Development Coaching',
        },
      
        {
          title: 'Career Mentorship for Aspiring Engineers',
        },

        
        {
          title: ' Entrepreneurial Mentorship',
        },

        {
          title: "Unlock your full potential! [Book a coaching session](#) and start your journey to success."
        }
    ],
  },
];

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div id='services' className="bg-zinc-50/30 flex items-center justify-center flex-col w-full  h-[480px] px-5 py-10 lg:px-28 lg:py-12 ">
      <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
        {aboutData.map((item, index) => (
          <div key={index}
            className={`cursor-pointer capitalize xl:text-3xl font-medium text-gray-400 relative after:w-8 after:h-[2px] 
                         after:absolute after:-bottom-1 after:left-0 
                        ${selectedIndex === index ? "text-gray-900 after:bg-gray-900 after:w-[100%] after:transition-all after:duration-300" : ""}`}
            onClick={() => setSelectedIndex(index)}>
            {item.title}
          </div>
        ))}
      </div>

      <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start max-w-[700px] text-gray-900 font-medium">
        {aboutData[selectedIndex].info.map((item, itemIndex) => (
          <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-teal">
            {/* Title */}
            <div className=" mb-2 md:mb-0">{item.title}</div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
