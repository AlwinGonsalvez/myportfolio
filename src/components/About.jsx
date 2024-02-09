import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  pt-48 '>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            I&apos;m  an enthusiastic and aspiring Full Stack Developer with a passion for creating innovative and efficient web applications. My journey in the world of coding began with HTML, CSS, and JavaScript, and since then, I&apos;ve expanded my skill set to include technologies like React, Express, and Tailwind CSS.I thrive on turning ideas into functional, user-friendly, and visually appealing websites. Whether it&apos;s crafting responsive front-end interfaces or building robust back-end solutions, I&apos;m committed to delivering high-quality results.
            </p>
            <br />
            <p className='text-xl '>My dedication to continuous learning ensures that I stay updated with the latest industry trends and technologies. Collaborative, detail-oriented, and with a keen eye for design, I&apos;m excited about contributing my skills to projects that make a meaningful impact.</p>
        </div>
    </div>
  )
}

export default About