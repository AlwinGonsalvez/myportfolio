import React from 'react'
import html from '../assets/images/htmllogo.png'
import css from '../assets/images/csslogo.png'
import js from '../assets/images/jslogo.png'
import react from '../assets/images/reactlogo.png'
import tailwind from '../assets/images/tailwindlogo.png'
import mongodb from '../assets/images/mongodblogo.png'



const Skills = () => {

  return (
    <div name="skills" className=' bg-gradient-to-b from-black to-gray-800 w-full h-full pt-16'>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white' >
        <div className='' >
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'> Skills</p>
            <p className='py-6'>These technologies I&apos;ve worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg  shadow-orange-500">
                <img src={html} alt="" className='w-20 mx-auto ' />
                <p className='mt-4'>HTML</p>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-600">
                <img src={css} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>CSS</p>
            </div>
<div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
                <img src={js} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>Javascript</p>
            </div>
<div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-300">
                <img src={react} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>React</p>
            </div>
<div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400">
                <img src={tailwind} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>Tailwind</p>
            </div>
<div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500">
                <img src={mongodb} alt="" className='w-20 mx-auto ' />
                <p className='mt-4'>MongoDB</p>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Skills