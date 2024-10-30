import Link from 'next/link'
import React from 'react'
import {FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
  FaGithub
}from "react-icons/fa6"

const Footer = () => {
  return (
    <div className=''>
      <div className=" bg-gradient-to-r from-zinc-700/55 via-gray-600/90 to-black/55 pt-24 pb-8 px-10">
           <div>
            <Link href={'/'}>
                <div className={`text-gray-700 text-2xl lg:text-3xl font-bold`}><span className="text-gray-50 overline">gloria</span>okegbemi</div>
            </Link>
           </div>

           <div className='pt-12 pb-5 grid grid-cols-1 lg:grid-cols-3 gap-12 '>
             <div>
                <h3 className='text-gray-50 text-xl font-semibold'>
                  <Link href={"/about"}>About Us</Link>
                </h3>
                <p className='text-gray-100 text-sm pt-3'>
                   We are a website design agency with decades of combined experience in custom web design, development and digital marketing. We build websites that convert and help your business grow.
                </p>
             </div>

             <div>
                <h3 className='text-gray-50 text-xl font-semibold'>
                  <Link href={"/services"}>Services</Link>
                </h3>
                  
                 <ul className='text-gray-100 text-sm pt-3'>
                   <Link href={"/webdevelopment"}> <li className="py-2">Web Developent</li></Link>
                    <Link href={"/brandingconsulting"}><li className='py-2'>Branding</li></Link>
                    <Link href={"/seooptimization"}><li className='py-2'>SEO Optimization</li></Link>
                     <Link href={"/ecommerce"}><li className='py-2'>E-Commerce Developent</li></Link>
                </ul>
             </div>

             <div>
                <h3 className='text-gray-50 text-xl font-semibold'>
                  <Link href={"/contact"}>Contact</Link>
                </h3>
                  
                 <ul className='text-gray-100 text-xl pt-3 gap-x-4 flex'>
                    <FaLinkedinIn />
                    <FaXTwitter />
                    <FaWhatsapp />
                    <FaGithub />
                </ul>
                <p className='text-gray-100 py-2'>gloria.okegbemi@gmail.com</p>
             </div>
           </div>

           
           <div className=" border-t  border-gray-50 flex flex-col lg:flex-row pt-5 pb-2 items-start lg:items-center text-gray-50">
             <div className=' pb-2 lg:pb-0'>Copyright: © 2024 gloriaokegbemi. <br />  All Rights Reserved.</div>
           </div>

          
      </div>
    </div>
  )
}

export default Footer