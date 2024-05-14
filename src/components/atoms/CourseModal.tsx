import React from 'react';
import { X } from 'lucide-react';
import CourseCard from '../subAtoms/CourseCard';
import Image from 'next/image';

interface CourseModalProps {
  id: number;
  title: string;
  imageSrc: string;
  newPrice: string;
  oldPrice: string;
  saveAmt: string;
  link: string;
  language: string;
  courseDuration: string;
  subjects: string[];
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ id, title, imageSrc, newPrice, oldPrice, saveAmt, link, language, courseDuration, subjects, onClose }) => {
  const Include= ['Validity: Till the Exams.','Online Lectures.', 'DPPs and Test With Solutions.','Offline counseling at Vidyapeeth Centers', 'One to One Telephonic PTM, based on SPD.','Physical support and helpdesk at Vidhayapeeth offline Centers.'];
  
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 h-auto w-full" >
      <div className="bg-white w-full h-full scrollbar-hide rounded-lg shadow-lg m-4 p-2 overflow-auto">
        <div className="flex justify-between items-center  bg-purple-400 rounded-t-lg py-8 text-white p-4 ">
          <h1 className="text-4xl font-outfit pl-5 font-bold">{title}</h1>
          <button onClick={onClose}>
            <X size={30} className="text-white " />
          </button>
        </div>
        <div className="border-t border-4 border-pink-500 mb-2"></div>
        <div className="flex">
          {/* Course Details */}
          <div className="bg-white rounded-lg shadow-lg p-6 mr-4 w-2/3">
            <div className="flex flex-col mb-4">
              <h2 className="text-lg font-roboto font-semibold text-left ml-6  text-gray-900 mb-6  pt-2">This Batch Includes</h2>
              <div className="flex mb-2">
                <div className=" pl-6">
                  <Image
                    src="/calendar.png"
                    alt="calendar"
                    width={35}
                    height={35}
                  />
                </div>
                <div>
                  <h4 className="mb-1 pr-24 font-outfit font-normal text-sm text-gray-500">Course Duration</h4>
                  <p className="pl-3 font-outfit font-medium text-sm">{courseDuration}</p>
                </div>
              </div>
              <div className="flex  mt-6">
                <div className="pl-6">
                  <Image
                    src="/bookmark.png"
                    alt="subject"
                    width={35}
                    height={35}
                  />
                </div>
                <div >
                  <h4 className="mb-1 pr-36 font-outfit font-normal text-sm text-gray-500">Subjects</h4>
                  <p className="pl-3 font-outfit font-medium text-sm">{subjects.join(', ')}</p>
                </div>
              </div>
              <div className="flex flex-col mt-6 mb-2">
                <div className="flex flex-col ">
                  {Include.map((item, index) => (
                    <div key={index} className="flex mb-4">
                      <div className="pl-6">
                        <Image
                          src="/star.png"
                          alt="icon"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div>
                        <p className="pl-3  font-outfit font-normal text-sm">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          <div>
            <CourseCard {...{imageSrc, newPrice, oldPrice, saveAmt, link, language}} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseModal;
