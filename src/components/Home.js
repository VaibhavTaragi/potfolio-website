import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-blue-300'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Vaibhav Singh Taragi</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Front-end developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications.</p>
            <div>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500'><Link to='work'smooth={true} duration={500}>View Work</Link> <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span></button>
            </div>
        </div>
    </div>
  )
}

export default Home