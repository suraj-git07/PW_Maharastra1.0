'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToBatch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const batchElement = document.getElementById('batch');
    if (batchElement) {
      batchElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Brand Name */}
          <div className="flex items-center sm:pl-6 max-sm:pl-3">
            <Link href="https://www.pw.live/study/batches" target='_blank'>
              <Image
                src="/pwlogo.png"
                alt="PW Logo"
                width={40}
                height={40}
                className="sm:w-10 sm:h-10"
              />
            </Link>
            <span className="ml-2 lg:text-xl text-black font-roboto font-semibold sm:text-md  ">PW Maharashtra</span>
          </div>

          {/* Menu Links */}
          <div className={`lg:flex lg:items-center lg:justify-between  lg:flex-row lg:py-10 lg:relative lg:w-auto  nav-links max-sm:flex-col max-sm:py-10 max:sm:z-50 ${isMenuOpen ? 'flex' : 'hidden'} overflow-visible z-20 gap-1 mb-10`}>
            <div className="sm:block mr-2">
              <Link href="/" className="text-gray-700 px-3 py-2 rounded-md font-roboto font-medium" target='_blank'>
                Ask Doubt
              </Link>
            </div>
            <div className="sm:block flex-grow mr-6">
              <button onClick={handleScrollToBatch} className="px-4 py-2 rounded border-2 border-solid border-purple-600 flex justify-center items-center gap-2.5 text-purple-600 font-roboto font-medium text-center transition-colors duration-300 hover:bg-purple-600 hover:text-white">
                Batches
              </button>
            </div>
            <div className="sm:block flex-shrink-0">
              <Link href="https://www.pw.live/study/batches" target='_blank'>
                <button className="px-4 py-2 rounded border border-solid border-purple-600 font-roboto font-medium bg-purple-600 text-white transition-colors duration-300 hover:bg-purple-800 hover:text-white">
                  Visit PW
                </button>
              </Link>
            </div>
          </div>

          {/* Toggle Button for Small Screens */}
          <div className="flex items-center lg:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none pr-8">
              <Image
                src="/menu.png"
                alt="menu"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
