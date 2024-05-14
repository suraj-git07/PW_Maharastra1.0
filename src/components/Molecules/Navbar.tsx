'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FormModal from '../atoms/FormModal';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Brand Name */}
          <div className="flex items-center sm:pl-6 max-sm:pl-3">
            <Link href="https://www.pw.live/study/batches" target="_blank">
              <Image
                src="/pwlogo.png"
                alt="PW Logo"
                width={40}
                height={40}
                className="sm:w-10 sm:h-10"
              />
            </Link>
            <span className="ml-2 lg:text-xl text-black font-roboto font-semibold sm:text-md">
              PW Maharashtra
            </span>
          </div>

          {/* Menu Links */}
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } lg:flex lg:items-center lg:justify-between  lg:flex-row  lg:py-10 lg:relative max-sm:absolute max-sm:top-16  max-sm:w-full max-sm:left-0  lg:w-auto max-sm:px-16  nav-links max-sm:items-center max-sm:text-xs max-sm:justify-center max-sm:bg-gray-100 max-sm:border-b-4 max-sm:border-b-pink-500    max-sm:py-2 overflow-visible z-20 gap-1 mb-10`}
          >
            <div className="sm:block mr-2">
              <button
                onClick={openModal}
                className="text-gray-700 px-3 py-2 rounded-md font-roboto font-medium max-sm:mr-4"
                type="button"
              >
                Ask Doubt
              </button>
            </div>

            <div className="sm:block flex-grow mr-6">
              <button
                onClick={handleScrollToBatch}
                className="px-4 py-2 rounded border-2 border-solid border-purple-600 flex justify-center items-center gap-2.5 text-purple-600 font-roboto font-medium text-center transition-colors duration-300 hover:bg-purple-600 hover:text-white"
              >
                Batches
              </button>
            </div>
            <div className="sm:block flex-shrink-0">
              <Link href="https://www.pw.live/study/batches" target="_blank">
                <button className="px-4 py-2 rounded border border-solid border-purple-600 font-roboto font-medium bg-purple-600 text-white transition-colors duration-300 hover:bg-purple-800 hover:text-white">
                  Visit PW
                </button>
              </Link>
            </div>
          </div>

          {/* Toggle Button for Small Screens */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700  hover:text-gray-900 focus:outline-none pr-8"
            >
              <Image src="/menu.png" alt="menu" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <FormModal onClose={closeModal} />}
    </nav>
  );
};

export default Navbar;
