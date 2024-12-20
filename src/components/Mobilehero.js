"use client"
import FadeIn from '@/variants';
import Image from 'next/image';

const Mobilehero = () => {
  return (
    <div className='lg:hidden relative flex items-center justify-center h-screen w-full'>
      <div className="relative h-full w-full flex items-center justify-center">
        <Image
          src="/devgloria.jpg"
          alt="Gloria Inioluwa Okegbemi"
          fill
          priority 
          sizes='100vw'
          className='object-cover' 
        />
      </div>

      <div className="absolute inset-0 bg-opacity-60 bg-zinc-800 flex flex-col items-center justify-center text-center p-4">
        <FadeIn
        direction={"left"}
        delay={0.5}> 
            <h2 className="text-center text-white text-2xl py-2 md:text-3xl font-bold">Gloria Inioluwa Okegbemi</h2>
        </FadeIn>
        
        <FadeIn
          direction={"right"}
          delay={0.7}>
            <p className="text-gray-200 mt-4 text-base md:text-lg">
            A frontend engineer dedicated to bringing digital experiences to life, crafting dynamic online presences that embody strong architecture, scalability, and security. Committed to creating solutions that elevate brands and resonate with their audiences.</p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Mobilehero;
