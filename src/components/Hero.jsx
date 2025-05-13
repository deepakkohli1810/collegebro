import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-screen bg-black overflow-x-hidden">
     
      <Navbar />

     
      <div className="relative z-10 h-dvh w-full flex items-center justify-center  lg:px-0 sm:px-8 md:px-0 pt-[5rem]">
       
      <img src="/assets/Images/image-5.jpg" 
      className='object-cover w-full mt-0 lg:mt-16 sm:mt-2 md:top-8 h-[100%] lg:h-[90%]' alt="" />
        
        <h1 className="absolute text-center text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-Sansita text-white font-bold leading-tighter">
          Connect And Collab.
        </h1>

       
        <p className="absolute bottom-0 mt-4 text-[1.2rem] sm:text-sm md:text-base text-white font-SansitaRegular  text-center">
          Note from founder: “WELCOME TO COLLEGE BRO”.
        </p>
      </div>
    </div>
  );
};

export default Hero;
