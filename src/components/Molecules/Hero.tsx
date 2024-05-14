'use client';
import React from 'react';
import Link from 'next/link';
import Herosvg from '../subAtoms/herosvg';
import { useState, useEffect } from 'react';

function Hero() {
  
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 768); 
    }

    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="flex flex-col lg:flex-row justify-start items-center bg-gradient-to-r from-white to-indigo-100">
      {/* Content Section */}
      <div className="ml-48 pt-20 max-sm:pt-12 mb-10 max-sm:ml-3 max-sm:mt-10 max-sm:mr-6 max-sm:mb-0">
        <Herosvg isDesktop={isDesktop} />
      </div>
      <div className="lg:order-2 lg:pl-28 pl-14 lg:pt-20 pt-32 max-sm:pr-12 max-sm:text-center max-sm:pt-16  ">
        <h1 className="lg:text-5xl font-outfit font-bold leading-tight text-3xl">
          <span className="block lg:inline ">Bharat’s <span className='text-purple-500 '>Biggest &amp;</span></span>
          <span className="block lg:inline pt-2 lg:pt-0 text-purple-500">Most Trusted</span>
          <span className="block lg:inline pt-2 lg:pt-0">Educational platform</span>
        </h1>
        <p className="text-gray-500 mt-4 max-sm:pr-5">
          Unlock your potential by signing up with Physics Wallah.
        </p>
        <p className="text-gray-500">The most affordable learning solution.</p>
        <Link href="https://www.pw.live/study/batches" target='_blank'>
          <div className='lg:p-0 px-20 pb-10'>
          <button className="px-9 py-2 mt-10 text-center  max-sm:px-6  rounded border border-solid border-purple-600 font-roboto font-medium bg-purple-600 text-white transition-colors duration-300 hover:bg-purple-800 hover:text-white">
            Visit PW
          </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
