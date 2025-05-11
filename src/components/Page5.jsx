import React from 'react';

const Page5 = () => {
  return (
    <div className="relative bg-black min-h-screen w-full overflow-x-hidden">
     
      <div className="mt-[8rem] flex items-center justify-center flex-col px-4">
        <h1 className="text-white text-center mt-10 text-6xl md:text-8xl font-CanvaSans tracking-tighter font-black">
          Events<span className="text-violet-300">.</span>
        </h1>
        <p className="text-white text-center mt-10 text-xl md:text-xl font-CanvaSans w-full md:w-[60%]">
          We showcase college and university events from around the world. These events offer students new perspectives, encourage teamwork, spark fresh ideas, and celebrate cultural diversity — making learning more exciting and meaningful.
        </p>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-3  mt-16 min-h-[80vh]">
       
        <div className="relative col-span-1 md:col-span-1">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover "
            src="assets/Videos/video-5.mp4"
          />
          <div className="absolute top-10 left-6 text-white z-10">
            <h1 className="text-3xl font-black tracking-tight">Events</h1>
            <p className="text-lg font-bold font-CanvaSans tracking-tighter">A moment of success</p>
          </div>
        </div>

        
        <div className="col-span-1 md:col-span-2 flex flex-col">
        
          <div className="relative flex-1">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover "
              src="assets/Videos/video-3.mp4"
            />
            <div className="absolute top-10 left-6 text-white z-10">
              <h1 className="text-3xl font-black tracking-tight">Events</h1>
              <p className="text-lg font-bold font-CanvaSans tracking-tighter">A moment of Achievement</p>
            </div>
          </div>

         
          <div className="relative flex-1">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover "
              src="assets/Videos/video-6.mp4"
            />
            <div className="absolute top-10 left-6 text-white z-10">
              <h1 className="text-3xl font-black tracking-tight">Events</h1>
              <p className="text-lg font-bold font-CanvaSans tracking-tighter">A moment of Inspiration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
