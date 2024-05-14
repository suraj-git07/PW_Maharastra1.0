'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import BatchModel from '../atoms/BatchModel';

const circlesData = [
  { icon: '/class9medal.png', bgColor: 'bg-red-200' },
  { icon: '/class10medal.png', bgColor: 'bg-blue-200' },
  { icon: '/class11medal.png', bgColor: 'bg-green-200' },
  { icon: '/class12medal.png', bgColor: 'bg-yellow-200' },
  { icon: '/Dropper.png', bgColor: 'bg-gray-200' }
];

const Batch: React.FC = () => {
  
  const [batchIndex, setBatchIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (index: number) => {
    setIsModalOpen(true);
    setBatchIndex(index);
  };

  return (
    <div id='batch' className="container mx-auto py-8 mb-12">
      <div className="flex items-center mb-4 justify-center">
        <h2 className="lg:text-4xl text-2xl font-outfit font-semibold text-center">Batches </h2>
        <Image
          src="/books.png"
          alt="book icon"
          width={60}
          height={60}
          className='ml-3 w-10 h-10'
        />
      </div>
      <p className="text-center max-sm:text-sm max-sm:pr-3  max-sm:pl-2 font-roboto font-normal text-gray-700 mb-8">With PW Maharashtra, we offer online batches tailored for students in class 9 to 12 including special dropper batch.</p>

      <div className="flex justify-center max-sm:overflow-x-auto max-sm:pt-5 ">
        <div className="flex justify-center ">
          {circlesData.map((circle, index) => (
            <div key={index} className="text-center mx-8">
              <button
                onClick={() => handleButtonClick(index)}
                className={`w-28 h-28 shadow-lg rounded-full flex items-center justify-center mb-3 focus:outline-none ${circle.bgColor} transform transition-transform hover:scale-105`}
              >
                <Image
                  src={circle.icon}
                  alt={`Icon ${index + 1}`}
                  width={80}
                  height={80}
                />
              </button>
              <h3 className="text-lg font-roboto font-semibold">
                {index === 0 && "Class 9"}
                {index === 1 && "Class 10"}
                {index === 2 && "Class 11"}
                {index === 3 && "Class 12"}
                {index === 4 && "Dropper"}
              </h3>
              {isModalOpen && <BatchModel onClose={()=>{
                setIsModalOpen(false);
              }} batchIndex={batchIndex} />}
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Batch;
