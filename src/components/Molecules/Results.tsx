import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ResultCarousel from '@/components/atoms/ResultCarousel';


const Results = () => {

    const results = [
        { image: '/collegeS1.png', name: 'NISHANT SHARMA', rank: '100' },
        { image: '/collegeS2.png', name: 'SHIVANI GARG', rank: '1763' },
        { image: '/collegeS1.png', name: 'PRAYAS RAUT', rank: '67' },
        { image: '/collegeS2.png', name: 'RIYA JAIN', rank: '90' }
    ];



    return (
        
        
        <div className="container  bg-gradient-to-r from-indigo-100 to-white pb-16 pt-4">
          
            <div className="flex items-center mb-1 max-sm:pl-4  pl-14 pt-4 justify-center">
                <h2 className="text-4xl  text-gray-900 font-outfit font-semibold text-center">Results </h2>
                <Image
                    src="/trophy.png"
                    alt="book icon"
                    width={60}
                    height={60}
                    className='ml-3'

                />
            </div>
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex py-4 px-7 ">
                    <ResultCarousel results={results} />
                </div>
            </div>

            <div className="text-center mt-4 max-sm:pr-10">
                <Link href="https://www.pw.live/study/batches" target="_blank">
                    <button className="px-9   py-2  ml-10  text-center rounded border-2 border-solid border-purple-600 font-roboto font-medium  text-purple-600  transition-colors duration-300   hover:bg-purple-600 hover:text-white">
                        Visit PW
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Results;
