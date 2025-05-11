import React from 'react'
import Navbar from './Navbar'



const Hero = () => {
  return (
    <div className='relative min-h-screen bg-black w-screen overflow-x-hidden'>
      <Navbar />
 
      <div className="relative  text-white z-10 h-dvh w-screen overflow-y-hidden flex items-center justify-center px-4 sm:px-12">
        
  <video
    src="assets/Videos/video-1.mp4"
    // autoPlay
    loop
    muted
    className="w-full  max-w-[95%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[95%] h-[80%] rounded-3xl object-cover"

     
  /> 
  <h1 className='absolute text-[2rem] sm:text-1xl md:text-4xl lg:text-8xl font-mono text-white font-bold'>Connect And Collab.</h1>
  <h1 className='absolute text-[0.7rem] bottom-1 sm:text-[0.8rem] md:text-[0.8rem] lg:text-[0.8rem] font-SansitaRegular text-white  '>Note from founder : “WELCOME TO COllEGE BRO”.</h1>
</div>

    </div>
  )
}

export default Hero
