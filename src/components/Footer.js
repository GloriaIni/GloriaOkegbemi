"use client"
import FadeIn from '@/variants'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, 
  BsGithub, 
  BsLinkedin, 
  BsTwitterX } from "react-icons/bs";
  
const Footer = () => {
  return (
    <div className=''>
     <FadeIn
     direction={"up"}
     delay={0.5}>
     <div className=" bg-black/95 pt-24 pb-8 px-10 lg:justify-center">
           <div>
            <Link href={'/'}>
                <div className={`text-gray-700 text-2xl lg:text-3xl font-bold`}><span className="text-gray-50 overline">gloria</span>okegbemi</div>
            </Link>
           </div>

           <div className='pt-12 pb-5 grid grid-cols-1 lg:grid-cols-3 gap-12  lg:justify-items-center'>
             <div>
                <h3 className='text-gray-50 text-xl font-semibold'>
                  <h4 id='about'>About </h4>
                </h3>
                <p className='text-gray-100 text-sm pt-3'>
                Turning your vision into a fully functional reality, I specialize in translating complex business needs into intuitive, high-performing digital interfaces. Every solution I create is meticulously crafted to meet specific goals, enhance user engagement, and drive measurable results.
                </p>
             </div>

             <div className=' '>
                <div className='text-gray-50 text-xl font-semibold'>
                  <h4 id='services'>Services</h4>
                </div>
                  
                 <ul className='text-gray-100 text-sm pt-3'>
                   <a id='services'> <li className="py-2 hover:underline">Frontend Engineering</li></a>
                    <a id='services'><li className='py-2 hover:underline'>Branding</li></a>
                    <a id='services'><li className='py-2 hover:underline'>Coaching</li></a>
                 
                </ul>
             </div>

             <div>
                <div className='text-gray-50 text-xl font-semibold'>
                  <h4 id='contact'>Contact</h4>
                </div>
                  
                 <ul className='text-gray-100 text-xl pt-3 gap-x-4 flex'>
                 <a href="www.linkedin.com/in/gloria-okegbemi-0a65011b0" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="text-xl" />
            </a>
            <a href="https://x.com/ini01uwa?t=TLJtDXlIkKoAMJRgnHB4Gw&s=09" target="_blank" rel="noopener noreferrer">
              <BsTwitterX className="text-xl" />
            </a>
            <a href="https://github.com/GloriaIni" target="_blank" rel="noopener noreferrer">
              <BsGithub className="text-xl" />
            </a>
                </ul>
                <p className='text-gray-100 py-2'>
                <a href="mailto:gloria.okegbemi@gmail.com" className="underline hover:text-gray-300">
                  gloria.okegbemi@gmail.com
                </a>
                </p>
             </div>
           </div>

           
           <div className=" border-t  border-gray-50 flex flex-col lg:flex-row pt-5 pb-2 items-start lg:items-center text-gray-50">
             <div className=' pb-2 lg:pb-0'>Copyright: © 2024 gloriaokegbemi. <br />  All Rights Reserved.</div>
           </div>

          
      </div>
     </FadeIn>
    </div>
  )
}

export default Footer