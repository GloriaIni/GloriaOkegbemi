"use client"
import FadeIn from "@/variants";

const AboutMe = () => {
  return (
    <div id='aboutme' className=''>
      <div className='flex flex-col items-center justify-center py-14 lg:py-20 px-5 lg:px-28 text-center'>
       <FadeIn
         direction={"down"}
          delay={0.4}>
        <h2 className='h2'>ABOUT ME</h2>
       </FadeIn>

      <FadeIn
      direction={"up"}
      delay={0.5}>
        <div>
            <p>
              I’m a <span className='font-medium underline'>frontend engineer</span> with a sharp focus on creating high-impact,{' '}
              <span className='font-medium underline'>responsive websites that enhance brand credibility and user engagement.</span>
              <br />
              Beyond code, I am passionate about <span className='underline font-medium'>brand growth</span> and use my skills to help clients not only reach but <span className='underline font-medium'>captivate their target markets, creating solutions that resonate with users.</span>
              <br />
              I bring a consultative approach, working closely with clients to understand their vision and goals, and <span className='font-medium underline'>ensuring each project meets high standards of performance and design.</span> If you are looking for a <span className='font-medium underline'>developer who values strategic thinking and precision</span>, let&apos;s discuss how I can contribute to your team/next project.
            </p>
          </div>
      </FadeIn>
      </div>
    </div>
  );
}

export default AboutMe;
