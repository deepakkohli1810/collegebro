import React from 'react'

const Page3 = () => {
  return (
    <div className='relative bg-black min-h-screen  w-screen overflow-x-hidden '>
      <div className='relative  text-white z-10 h-[80%] w-screen overflow-y-hidden flex items-center justify-center px-4 sm:px-12'>
          <video
          src='../assets/Videos/video-2.mp4'
          className=' w-full h-[35vh] object-cover '
          muted 
          autoPlay
          loop
          
          />
          <h1 className='absolute text-8xl font-sans font-bold tracking-tighter '>Building Communitie<span className='text-cyan'>s.</span></h1>
      </div>
      <div className='mt-[14rem] flex items-center justify-center flex-col '>
       <h1 className='  text-violet-300 text-center text-4xl font-BrickSans'> The coolest part.</h1>
       <p className='text-white mt-5  text-center font-thin px-5 w-[78%] text-3xl font-SansitaRegular'>Building communities where students from around the world can connect and work together in all kind of fields - like engineering , arts , languages , medical science , culture and history. </p>
      </div>
    </div>
  )
}

export default Page3
