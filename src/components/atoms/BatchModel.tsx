import React from 'react';
import { X } from 'lucide-react';
import BatchCard from '../subAtoms/BatchCard';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import appwriteService from "../../appwrite/database";


interface BatchModalProps {
  onClose: () => void;
  batchIndex: number | null;
}


const BatchModal: React.FC<BatchModalProps> = ({ onClose, batchIndex }) => {

  const [courseDetails, setCourseDetails] = useState<any[]>([]);
  const [classNumber, setClassNumber] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (batchIndex !== null) {
      const fetchCourses = async () => {
        try {
          const coursesData: any = await appwriteService.getCourses(batchIndex);
          const results = await Promise.all(coursesData[0].courses.map((course: number) => appwriteService.getCoursedetail(course)));
          setCourseDetails(results[0]);
          setClassNumber(getClassName(batchIndex));
          setIsLoading(false); // Data has been fetched, set isLoading to false
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };

      fetchCourses();
    }
  }, [batchIndex]);

  const getClassName = (index: number): string => {
    switch (index) {
      case 0:
        return "Class 9th";
      case 1:
        return "Class 10th";
      case 2:
        return "Class 11th";
      case 3:
        return "Class 12th";
      case 4:
        return "Dropper";
      default:
        return "";
    }
  };

  if (isLoading) {
    return (
      <div className='fixed inset-0 flex justify-center items-center z-30 bg-opacity-30 bg-black'>
        <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-300"></div>
            <Image
                src="/books.png"
                alt="PW Logo"
                width={80}
                height={80}
                className='rounded-full opacity-50'

              />
          </div>
      </div>
    );
  }

  return (
    <div className='fixed inset-0 flex justify-center items-center z-30 bg-opacity-30 bg-black'>
      <div className='bg-white  shadow-xl px-2 w-full h-full bg-gradient-to-b from-white to-gray-100'>
        <button onClick={onClose} className='absolute top-5 right-5 p-2'><X size={25} className='text-gray-800' /></button>
        <div className="flex items-center justify-between py-2 ml-6 mt-6 ">
          <div className="flex items-center pb-3 mb-3 ml-3">
            <Image
              src="/pwlogot.png"
              alt="PW Logo"
              width={45}
              height={45}
              className='mr-3'
            />
            <h1 className="font-outfit text-2xl font-bold">Ongoing Batches For {classNumber}</h1>
          </div>
        </div>
        <div className="overflow-x-auto  px-7 scrollbar-hide ">
          <div className="flex flex-nowrap flex-shrink-0 mr-4">
            {courseDetails && courseDetails.length > 0 ?
              courseDetails.map((bdata, index) => (
                <BatchCard key={index} {...bdata} />
              )) :
              <div className="flex flex-col ml-48 pl-48 items-center justify-center h-full">
                <Image
                  src="/nocourse.png"
                  alt="No course"
                  width={350}
                  height={350}
                  className="mx-auto"
                />
                <h2 className="text-center text-2xl font-outfit font-normal text-gray-700 ">
                  Oops! Looks like there are no courses available.
                </h2>
              </div>
            }

          </div>
        </div>
        <div className="text-center -mt-3">
          <Link href="https://www.pw.live/study/batches" target='_blank'>
            <h1 className="px-9 py-2 ml-10 mt-10 text-center font-outfit font-normal text-indigo-600">
              Explore All Batches
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BatchModal;
