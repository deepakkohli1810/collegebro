import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-screen bg-black overflow-x-hidden">
     
      <Navbar />

     
      <div className="relative z-10 h-dvh w-full flex items-center justify-center px-4 sm:px-8 md:px-12 pt-[5rem]">
       
        <video
          src="assets/Videos/video-1.mp4"
          loop
          muted
          className="w-full max-w-[100%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[95%] h-[80vh] rounded-3xl object-cover"
        />

        
        <h1 className="absolute text-center text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-mono text-white font-bold leading-tight">
          Connect And Collab.
        </h1>

       
        <p className="absolute bottom-1 text-[0.65rem] sm:text-sm md:text-base text-white font-SansitaRegular  text-center">
          Note from founder: “WELCOME TO COLLEGE BRO”.
        </p>
      </div>
    </div>
  );
};

export default Hero;
