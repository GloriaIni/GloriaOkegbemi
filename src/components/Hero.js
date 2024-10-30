import Image from "next/image"


const Hero = () => {
  return (
    <div id="home" className="hidden lg:flex flex-row h-screen w-full">
        <div className="flex-1 bg-zinc-900/90 flex flex-col  items-start justify-center text-start">
           <h2 className="text-start text-white lg:pl-28 lg:pr-10 h2">Gloria Inioluwa <br /> Okegbemi</h2>
           <p className="text-gray-50 lg:pl-28 lg:pr-10">A frontend engineer dedicated to bringing digital experiences to life, crafting dynamic online presences that embody strong architecture, scalability, and security. Committed to creating impactful solutions that elevate brands and resonate with their audiences.</p>
        </div>

        {/*my picture */}
        <div className="flex-1 relative">
            <Image src={"/devgloria.jpg"} 
            alt="mypicture" 
            layout="fill" 
            objectFit="cover" />
        </div>
    </div>
  ) 
}

export default Hero