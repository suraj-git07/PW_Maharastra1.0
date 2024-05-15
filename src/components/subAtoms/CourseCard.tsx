'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  imageSrc: string;
  newPrice: string;
  oldPrice: string;
  saveAmt: string;
  link: string;
  language: string;
}


const CourseCard: React.FC<CourseCardProps> = ({ imageSrc, newPrice, oldPrice, saveAmt, link, language }) => {

  return (
    <div className="relative flex flex-col p-4 rounded-sm shadow-lg bg-white mx-4 flex-shrink-0 overflow-x-hidden">
      <Image src={imageSrc} alt="Batch Icon" width={300} height={100} className="rounded-lg" />
      <div className="flex items-center justify-between mt-4">


        <div className="flex-shrink-0 pr-4 ml-4">
          <button className="px-4 py-2  max-sm:px-2  rounded  bg-green-100 flex justify-center items-center gap-2.5 text-green-900 font-roboto font-normal text-center  ">
            <Image src="/save.png" alt="Save Icon" width={25} height={25} />
            Save {saveAmt}%
          </button>
        </div>
        <div className="flex-shrink-0 pr-4">
          <button className="px-4  max-sm:px-2  py-2  rounded border-2 border-solid border-purple-400  flex justify-center items-center gap-2.5 text-purple-600 font-roboto font-normal text-center   ">
            <Image src="/language.png" alt="Save Icon" width={25} height={25} className="" />
            {language}
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 pl-5">
        <div className="flex gap-3">
          <p className="text-4xl font-outfit font-semibold text-purple-600">{newPrice}</p>
          <div className="inline-block pt-2">
            <p className="text-lg font-outfit font-semibold line-through text-gray-500">{oldPrice}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">

        <div className=" max-sm:items-center m-auto">
          <Link href={link} target='_blank'>
            <button className="px-28 max-sm:px-20  py-2 rounded border shadow-md border-solid border-purple-500 font-roboto font-medium bg-purple-500 text-white transition-colors duration-300 hover:bg-purple-600 hover:text-white">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
