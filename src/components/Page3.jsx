import React from 'react';

const Page3 = () => {
  return (
    <div className="relative bg-black  w-screen overflow-x-hidden">
    
      <div className="relative mt-32 sm:mt-14 lg:mt-[10rem]  text-white z-10 h-auto w-screen overflow-y-hidden flex items-center justify-center px-4 sm:px-8 md:px-12">
        <video
          src="/assets/Videos/video-2.mp4" // Make sure it's in your /public/assets folder
          className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] object-cover rounded-xl"
          muted
          autoPlay
          loop
        />
        <h1 className="absolute text-6xl  sm:text-5xl md:text-7xl lg:text-8xl font-CanvaSans font-black tracking-tighter text-center">
          Building Communitie<span className="text-cyan">s.</span>
        </h1>
      </div>

     
      <div className="mt-24 sm:mt-32 flex items-center justify-center flex-col px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-violet-300 text-center font-BrickSans">
          The coolest part.
        </h1>
        <p className="text-white mt-4 text-center font-thin text-2xl sm:text-lg md:text-2xl lg:text-3xl font-SansitaRegular max-w-[100%] sm:max-w-[80%] lg:max-w-[70%]">
          Building communities where students from around the world can connect and work together in all kinds of fields — like engineering, arts, languages, medical science, culture, and history.
        </p>
      </div>
    </div>
  );
};

export default Page3;
