'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CourseModal from '../atoms/CourseModal';

interface BatchCardProps {
  id: number;
  title: string;
  imageSrc: string;
  newPrice: string;
  oldPrice: string;
  saveAmt: string;
  link: string;
  language: string;
  courseDuration : string;
  subjects:string[];
}


const BatchCard: React.FC<BatchCardProps> = ({ id, title, imageSrc, newPrice, oldPrice, saveAmt, link, language,courseDuration,subjects }) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="relative flex flex-col p-4 rounded-lg shadow-lg bg-white mx-4 flex-shrink-0 overflow-x-hidden">
      <h2 className="text-lg font-semibold font-outfit mr-20 mb-2">{title}</h2>
      <Image src={imageSrc} alt="Batch Icon" width={300} height={100} className="rounded-lg" />
      <div className="flex items-center justify-between mt-4">


        <div className="flex-shrink-0 pr-4 ml-4">
          <button className="px-4 py-2   rounded  bg-green-100 flex justify-center items-center gap-2.5 text-green-900 font-roboto font-normal text-center  ">
            <Image src="/save.png" alt="Save Icon" width={25} height={25} />
            Save {saveAmt}%
          </button>
        </div>
        <div className="flex-shrink-0 pr-4">
          <h4 className="px-4 py-2    flex justify-center items-center gap-2.5 text-purple-600 font-roboto font-normal text-center   ">
            <Image src="/language.png" alt="Save Icon" width={25} height={25} className="" />
            {language}
          </h4>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 pl-5">
        <div className="flex gap-3">
          <p className="text-3xl font-outfit font-semibold text-purple-600">{'₹'+newPrice}</p>
          <div className="inline-block pt-2">
            <p className="text-md font-outfit font-semibold line-through text-gray-500">{"₹"+oldPrice}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">

        <div className="hidden md:block flex-grow mr-3 ml-5">
          <button className="px-8 py-2   rounded border-2 border-solid border-purple-400 flex justify-center items-center gap-2.5 text-purple-600 font-roboto font-medium text-center  transition-colors duration-300 hover:bg-purple-400 hover:text-white" onClick={handleModalOpen} >
            Explore
          </button>
          {isModalOpen && (
            <CourseModal {...{ id, title, imageSrc, newPrice, oldPrice, saveAmt, link, language, courseDuration, subjects }} onClose={handleModalClose} />
          )}
        </div>

        <div className="flex-shrink-0 pr-4">
          <Link href={link} target='_blank'>
            <button className="px-8 py-2 rounded border shadow-md border-solid border-purple-500 font-roboto font-medium bg-purple-500 text-white transition-colors duration-300 hover:bg-purple-600 hover:text-white">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BatchCard;
