import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Mobilehero from "@/components/Mobilehero";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="">
       <Hero />
       <Mobilehero />
       <AboutMe />
       <Skill />
       <Project />
       <Services />
       <Contact />
    </main>
  );
}
