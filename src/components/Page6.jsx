import React from 'react';
import { FaSchool, FaPeopleGroup } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';
import { IoSchoolSharp } from 'react-icons/io5';
import { RiAdminFill } from "react-icons/ri";


const Page6 = () => {
  return (
    <div className="relative bg-black min-h-screen w-screen overflow-x-hidden px-4 sm:px-8 md:px-16">
    
      <div className="mt-[6rem] flex items-center justify-center flex-col text-center">
        <h1 className="text-violet-300 text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-CanvaSans tracking-tighter font-black">
          Why CollegeBro?
        </h1>
        <p className="text-white mt-6 sm:mt-8 w-[100%] sm:w-[80%] md:w-[60%] text-xl sm:text-xl md:text-2xl leading-snug">
          "We've launched an initiative to connect colleges, schools, and universities worldwide — aiming to bring meaningful change in academics, sports, arts, science, and beyond."
        </p>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        <div className="flex flex-col items-center text-center">
          <FaSchool className="text-white text-6xl sm:text-7xl lg:text-8xl mb-4" />
          <h1 className="text-white text-xl sm:text-2xl font-CanvaSans font-black tracking-tighter">
            Colleges of the world.
          </h1>
        </div>

        <div className="flex flex-col items-center text-center">
          <GiTeacher className="text-white text-6xl sm:text-7xl lg:text-8xl mb-4" />
          <h1 className="text-white text-xl sm:text-2xl font-CanvaSans font-black tracking-tighter">
            Opt for teacher information.
          </h1>
        </div>

        <div className="flex flex-col items-center text-center">
          <IoSchoolSharp className="text-white text-6xl sm:text-7xl lg:text-8xl mb-4" />
          <h1 className="text-white text-xl sm:text-2xl font-CanvaSans font-black tracking-tighter">
            Details regarding placements.
          </h1>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaPeopleGroup className="text-white text-6xl sm:text-7xl lg:text-8xl mb-4" />
          <h1 className="text-white text-xl sm:text-2xl font-CanvaSans font-black tracking-tighter">
            Subject-based communities.
          </h1>
        </div>

        <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
          <RiAdminFill className="text-white text-6xl sm:text-7xl lg:text-8xl mb-4" />
          <h1 className="text-white text-xl sm:text-2xl w-[80%] sm:w-[80%] font-CanvaSans font-black tracking-tighter">
            Institution admin can access teacher & student info with one click.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page6;
