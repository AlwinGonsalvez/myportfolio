import React from 'react'
import mypic from '../assets/images/mypic.jpg'
import {Link} from 'react-scroll'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const Home = () => {
  return (

    <div name="home" className='flex flex-col justify-center items-center  bg-gradient-to-b from-black via-black to-gray-800 '>
          <img className='rounded-full h-24 w-24 ' src={mypic} alt="my pic" />
          <h1 className='text-4xl sm:text-7xl font-bold text-white max-w-[15ch] text-center pt-4'>I&apos;m a Full Stack Developer</h1>
          <p className='max-w-[60ch] pt-6 text-gray-400'>As an aspiring Full Stack Web Developer, I am passionate about creating seamless and engaging digital experiences. My journey in web development has equipped me with a strong foundation in front-end technologies like <strong>HTML</strong>, CSS, and JavaScript, coupled with back-end proficiency using technologies such as Node.js and Express.</p>
          <div>
                <Link to='about' smooth duration={500}  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    About
                    <span className=" group-hover:rotate-90 duration-300 "><MdOutlineKeyboardArrowRight className='ml-1' size={25}/></span>
               </Link>
            </div>
    </div>
  )
}

export default Home