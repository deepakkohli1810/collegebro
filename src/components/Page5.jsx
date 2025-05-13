import React from 'react';

const Page5 = () => {
  return (
    <div className="relative bg-black w-full overflow-x-hidden">
      
      <div className="mt-[8rem] flex items-center justify-center flex-col px-4">
        <h1 className="text-white text-center mt-10 text-6xl md:text-8xl font-CanvaSans tracking-tighter font-black">
          Events<span className="text-violet-300">.</span>
        </h1>
        <p className="text-white text-center mt-10 text-xl font-CanvaSans w-full md:w-[60%]">
          We showcase college and university events from around the world. These events offer students new perspectives, encourage teamwork, spark fresh ideas, and celebrate cultural diversity — making learning more exciting and meaningful.
        </p>
      </div>

 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-16 px-4 md:px-16">
        {[
          {
            src: "/assets/Images/image-2.jpg",
            caption: "A moment of Success",
          },
          {
            src: "/assets/Images/image-3.jpg",
            caption: "A moment of Achievement",
          },
          {
            src: "/assets/Images/image-4.jpg",
            caption: "A moment of Inspiration",
          },
          {
            src: "/assets/Images/image-6.jpg",
            caption: "A moment of Realization",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative  overflow-hidden h-[250px] md:h-[300px]"
          >
            <img src={item.src} className="w-full h-full object-cover" alt={`Event ${index + 1}`} loading="lazy" />
            <div className="absolute top-6 left-6 text-white z-10">
              <h1 className="text-2xl font-black tracking-tight">Events</h1>
              <p className="text-md font-bold font-CanvaSans tracking-tighter">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page5;
