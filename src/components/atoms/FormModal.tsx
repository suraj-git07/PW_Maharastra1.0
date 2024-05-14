'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import appwriteService from "../../appwrite/database";


const FormModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await appwriteService.createCourseQueryDocument(selectedClass,phone, name, query,batch);
      setName('');
      setBatch('');
      setPhone('');
      setSelectedClass('');
      setQuery('');
      alert('Doubt submitted');
    } catch (error) {
      console.error('Error submitting doubt:', error);
      alert('Error submitting doubt. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-4 md:p-2 flex flex-col md:flex-row max-ms:mr-6">
        {/* First Column */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center px-4">
          <div className="mb-3">
            <h3 className="text-lg mt-5 font-outfit font-semibold text-gray-900 text-center">
              Ask Doubt!
            </h3>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Form fields */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-roboto text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="batch"
                className="block mb-2 font-roboto text-sm font-medium text-gray-900"
              >
                Batch
              </label>
              <input
                type="text"
                name="batch"
                id="batch"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Physics Wallah Batch"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone no"
                className="block mb-2 font-roboto text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="class"
                className="block mb-2 font-roboto text-sm font-medium text-gray-900"
              >
                Class
              </label>
              <select
                id="class"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              >
                <option value="" disabled>Select Class</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
                <option value="13">Dropper</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="query"
                className="block mb-2 font-roboto text-sm font-medium text-gray-900"
              >
                Your Doubt
              </label>
              <textarea
                id="query"
                rows={3}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                placeholder="Write your doubt here"
              ></textarea>
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className=" bg-purple-600 text-white rounded-md px-4 py-2   transition-colors duration-300 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium text-sm block mx-auto"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
        {/* Second Column */}
        <div className=" md:flex md:justify-center md:items-center">
          <Image
            src="/doubt.jpg"
            alt="Doubt Logo"
            width={300}
            height={300}
            className="w-68 h-48 object-cover rounded-full max-sm:mt-5 max-sm:w-32 max-sm:h-32 max-sm:items-center max-sm:justify-center max-sm:mx-auto"
          />
        </div>
        {/* Close Button */}
        <div className="flex justify-end items-center  absolute top-4 right-4">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-900    rounded-lg z-50 text-sm w-10 h-10 "
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
