'use client';
import React, { useState, useEffect } from 'react';
import appwriteService from "../../appwrite/database";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';

const Banner: React.FC<{}> = () => {
  const [banners, setBanners] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? banners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === banners.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex:number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const banners: any = await appwriteService.getBanners();
        if (banners) {
          setBanners(banners);
          setIsLoading(false); 
        }
      } catch (error) {
        console.error('Error fetching banner:', error);
      }
    }

    fetchData();
  }, []);

 // console.log('banners', banners);

  return (
    <div className="relative w-full lg:h-64 sm:h-full">
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full max-sm:mb-10">
          <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-32 w-32 max-sm:h-16 max-sm:w-16 border-t-2 border-b-2 border-gray-300"></div>
            <Image
              src="/pwlogot.png"
              alt="PW Logo"
              width={80}
              height={80}
              className='rounded-full opacity-50 max-sm:w-10 max-sm:h-10'
            />
          </div>
        </div>
      ) : (
        <div className=' w-full m-auto z-10  relative group'>
          <img
            key={banners[currentIndex].$id}
            src={appwriteService.getImageView(banners[currentIndex].$id) || ''}
            alt="Banner Image"
            className="w-full h-full  bg-center bg-cover duration-500"
          />
          {/* Left Arrow */}
          <div className='hidden max-sm:top-[40%] group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden  max-sm:top-[40%] group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center '>
            {banners.map((banner:any, index:number) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`text-2xl cursor-pointer ${index === currentIndex ? 'text-blue-500' : 'text-gray-500'}`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
  
};

export default Banner;
