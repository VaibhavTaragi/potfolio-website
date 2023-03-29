import React from "react";
import YT from '../assets/YT.PNG';
import Movies from '../assets/Movies.PNG';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-300">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">

            {/* Grid Item */}
            <div style={{background: `url(${YT})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white text-center">Video Streaming Platform</span>
                    <div className="pt-8 text-center">
                        <a href='https://github.com/VaibhavTaragi/NamasteDEV-Youtube' target="_blank" rel="noreferrer">
                            <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>
                        <a href='https://namastedev-youtube.netlify.app/' target="_blank" rel="noreferrer">
                            <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
                        </a>                        
                    </div>
                </div>
            </div>
            <div style={{background:`url(${Movies})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">Movies Info App</span>
                    <div className="pt-8 text-center">
                        <a href='https://github.com/VaibhavTaragi/movie-app' target="_blank" rel="noreferrer">
                            <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>
                        <a href='https://movie-info-react.netlify.app/' target="_blank" rel="noreferrer">
                            <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
                        </a>                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
