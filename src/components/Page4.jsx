import React from 'react';
// import Image from 'public/assets/Images/image-1.jpg'

const Page4 = () => {
  return (
    <div className="relative bg-black w-screen overflow-x-hidden flex flex-col lg:flex-row min-h-screen mt-[12rem]">
      
   
      <div className="relative w-full lg:w-1/2 h-[60vh] sm:h-[80vh] lg:h-screen">
        <img
          src='/assets/Images/image-1.jpg' // Make sure it's in /public/assets
          alt="Book Exchange"
          className="w-full h-[100%] lg:h-[80%]  object-cover"
        />
        <h1 className="absolute top-4 sm:top-8 left-3 sm:left-6 text-5xl sm:text-5xl lg:text-7xl font-CanvaSans font-black tracking-tighter text-white">
          Book Exchange
        </h1>
        <p className="absolute top-16 sm:top-24 left-5 sm:left-6 lg:left-7 text-xl text-center sm:text-lg text-white tracking-tighter font-sans">
          Believe In Charity
        </p>
      </div>

      
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center px-6 py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl md:text-4xl text-violet-300 font-BrickSans">
          Steps to follow.
        </h1>
        <ul className="mt-12 space-y-10 text-xl sm:text-lg md:text-xl lg:text-2xl text-white text-left list-disc list-outside max-w-[80%] lg:max-w-[60%] sm:max-w-[80%]">
          <li>Raise the query of the books you want on our website.</li>
          <li>Talk with the student who is ready to give his/her books.</li>
          <li>Make it happen through CollegeBro.</li>
        </ul>
      </div>
    </div>
  );
};

export default Page4;
