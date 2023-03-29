import React from 'react';
import HTML from '../assets/HTML5_logo_and_wordmark.svg.png';
import CSS from '../assets/1452px-CSS3_logo_and_wordmark.svg.png';
import JS from '../assets/Unofficial_JavaScript_logo_2.svg.png';
import ReactImg from '../assets/logo512.png'; 
import ReduxImg from '../assets/Redux toolkit.png';
import TailwindImg from '../assets/Tailwind_CSS_Logo.svg.png';
import Github from '../assets/github.png';
import jQuery from '../assets/jquery_vertical_logo_icon_169489.png';

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl border-b-4 border-blue-300 inline'>Skills</p>
                <p className='py-4'> These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={HTML} alt='HTML Icon' className='w-20 mx-auto'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={CSS} alt='CSS Icon' className='w-20 mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={JS} alt='HTML Icon' className='w-20 mx-auto'/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={ReactImg} alt='React Icon' className='w-20 mx-auto'/>
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={ReduxImg} alt='RTK Icon' className='w-20 mx-auto'/>
                    <p className='my-4'>REDUX TOOLKIT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={TailwindImg} alt='Tailwind Icon' className='w-20 mx-auto'/>
                    <p className='my-4'>TAILWIND CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Github} alt='Github Icon' className='w-20 mx-auto'/>
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={jQuery} alt='jQuery Icon' className='w-20 mx-auto'/>
                    <p className='my-4'>jQuery</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills