import React from 'react';

const Page2 = () => {
  return (
    <div className="relative bg-black min-h-screen w-screen overflow-x-hidden px-4 sm:px-8 md:px-12">
      {/* Heading Section */}
      <div className="flex items-center justify-center flex-col mt-[6rem] sm:mt-[8rem] lg:mt-[10rem] gap-10 sm:gap-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center text-violet-300 font-BrickSans">
          Imagine
        </h1>
        <h2 className="text-white text-center text-2xl sm:text-3xl md:text-2xl lg:text-5xl font-SansitaRegular font-thin max-w-[90%]  sm:max-w-[90%] md:max-w-[70%]">
          A platform which connects colleges of the world at{' '}
          <span className="text-cyan">one place.</span>
        </h2>
      </div>

      {/* Features Section */}
      <div className="flex items-center justify-center flex-col gap-5 lg:gap-10 sm:gap-5 md:gap-6 font-BrickSans mt-[6rem] sm:mt-[8rem] lg:mt-[10rem]">
        <div className="text-white flex flex-col sm:flex-row sm:space-x-12 text-lg sm:text-xl md:text-2xl text-center sm:text-left space-y-4 sm:space-y-0">
          <span>College Rating</span>
          <span>Teachers Information</span>
          <span>Placements</span>
        </div>
        <div className="text-white flex flex-col sm:flex-row sm:space-x-12 text-lg sm:text-xl md:text-2xl text-center sm:text-left space-y-4 sm:space-y-0">
          <span>Infrastructure</span>
          <span>And much more on the way</span>
        </div>
      </div>
    </div>
  );
};

export default Page2;
