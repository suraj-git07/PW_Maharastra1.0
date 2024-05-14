import React from 'react';
import Image from 'next/image';

interface ResultCardProps {
    image: string;
    name: string;
    rank: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ image, name, rank }) => {
    return (
        <div className="relative flex flex-col items-center justify-center p-4  bg-gray-50 bg-transparent mx-4 w-84 h-64 flex-shrink-0 overflow-x-hidden ">
            <div className="flex">
                {/* Left column */}
                <div className="flex flex-col items-center   pr-4">

                    <Image
                        src={image}
                        alt="Studeny"
                        width={150}
                        height={150}

                    />
                    <div className="bg-purple-600 shadow-md rounded-md py-2 px-6">
                        <p className="font-outfit text-white text-md font-semibold text-center">{name}</p></div>
                </div>

                {/* Right column */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-3xl pt-4  font-outfit font-bold text-gray-700 ">AIR</h3>
                    <p className="text-8xl font-outfit  font-bold text-purple-600 mt-0 mb-0">{rank}</p>
                </div>
            </div>
        </div>

    );
};

export default ResultCard;
