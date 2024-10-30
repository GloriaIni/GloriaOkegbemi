import Image from "next/image"

const logos = [
    "/html.svg",
    "/css.svg",
    "/javascript.svg",
    "/react.svg",
    "/tailwind.svg",
    "/nextjs.svg",
    "/python.svg"
]

const Skill = () => {
  return (
    <div id="skills" className="overflow-hidden whitespace-nowrap  bg-gray-50/30 py-5">
    <div className="hidden md:flex animate-scroll">
      {logos.concat(logos).map((logo, index) => (
        <div key={index} className="flex-shrink-0 lg:mx-10 mx-3">
          <Image src={logo} alt={`Logo ${index + 1}`} width={120} height={40} />
        </div>
      ))}
    </div>

    <div className="flex animate-scroll md:hidden">
      {logos.concat(logos).map((logo, index) => (
        <div key={index} className="flex-shrink-0 mx-7">
          <Image src={logo} alt={`Logo ${index + 1}`} width={50} height={30} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Skill