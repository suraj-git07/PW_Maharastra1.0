'use client';
import React, { useRef, useEffect } from 'react';
import ResultCard from '@/components/subAtoms/ResultCard';
import { motion } from 'framer-motion';

interface CarouselProps {
  results: {
    image: string;
    name: string;
    rank: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ results }) => {
  const duplicatedSlides = [...results, ...results];
  return (
    <div className="relative  w-full overflow-hidden py-4  ">

      <div className="absolute  z-20 before:absolute before:left-0 before:top-0 before:w-1/6 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-5 after:absolute after:right-0 after:top-0 after:w-1/6 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-2"></div>

      <motion.div
        className="flex "
        animate={{
          x: ['0%', '-100%'],
          transition: {
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }
        }}
      >
        {duplicatedSlides.map((result, index) => (
          <ResultCard key={index} {...result} />
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
