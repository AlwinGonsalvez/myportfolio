import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'
const NavBar = () => {
    

    const [nav,setNav] = useState(false)
    
  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black sticky top-0  px-4'>
        <div>
            <h1 className='italic text-5xl ml-2 '>Alwin</h1>
        </div>
        <ul className=' hidden md:flex'>    
            <li  className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-500 '>
                <Link to="home" smooth duration={500}  >Home</Link>
            </li>
            <li  className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-500 '>
                <Link to="about" smooth duration={500}  >About</Link>
            </li>
            <li  className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-500 '>
                <Link to="skills" smooth duration={500}  >Skills</Link>
            </li>
            <li  className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-500 '>
                <Link to="contact" smooth duration={500}  >Contact</Link>
            </li>
        </ul>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 zl-10 text-gray-500 md:hidden '>
            {nav ?<FaTimes className='absolute z-50 top-6 right-8' size={30}/> : <FaBars size={30} />}
        </div>
           {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                            <li className='px-4 cursor-pointer capitalize py-6 text-4xl '>
                                <Link onClick={()=> setNav(!nav)} to="home" smooth duration={500}  >Home</Link>
                            </li>
                            <li className='px-4 cursor-pointer capitalize py-6 text-4xl '>
                                <Link onClick={()=> setNav(!nav)} to="about" smooth duration={500}  >About</Link>
                            </li>
                            <li className='px-4 cursor-pointer capitalize py-6 text-4xl '>
                                <Link onClick={()=> setNav(!nav)} to="skills" smooth duration={500}  >Skills</Link>
                            </li>
                            <li className='px-4 cursor-pointer capitalize py-6 text-4xl '>
                                <Link onClick={()=> setNav(!nav)} to="contact" smooth duration={500}  >Contact</Link>
                            </li>
                </ul>
           )} 
        
    </div>
  )
}

export default NavBar