import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black w-full h-fit mt-[10rem] px-4 sm:px-8">
     
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-boorsok text-violet-300 inline-block">College</h1>{' '}
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-aloja text-cyan">Bro</span>
        <p className="text-white text-sm sm:text-base tracking-widest mt-2">The CollegeBro Represents</p>
      </div>

     
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white text-4xl sm:text-6xl md:text-7xl font-CanvaSans tracking-tighter">
        <span>Join</span>
        <span>Build</span>
        <span>Contribute</span>
      </div>

      <div className="w-full mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 px-4">
           <div>
            <h1 className="text-violet-300 font-BrickSans text-xl sm:text-2xl mb-3">Founder Details</h1>
            <p className="text-white text-sm sm:text-base">Email: deepakkohli1810@gmail.com</p>
            <p className="text-white text-sm sm:text-base">Phone Number: +91 7814722981</p>
            <p className="text-white text-sm sm:text-base">
              GitHub:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/deepakkohli1810"
                className="underline text-cyan-300"
              >
                github.com/deepakkohli1810
              </a>
            </p>
          </div>

         
          <div>
            <h1 className="text-violet-300 font-BrickSans text-xl sm:text-2xl mb-3">Our Domains</h1>
            <p className="text-white text-sm sm:text-base">College Rating</p>
            <p className="text-white text-sm sm:text-base">Teacher Information</p>
            <p className="text-white text-sm sm:text-base">Placements</p>
            <p className="text-white text-sm sm:text-base">And much more on the way</p>
          </div>

         
          <div>
            <h1 className="text-violet-300 font-BrickSans text-xl sm:text-2xl mb-3">CollegeBro</h1>
            <p className="text-white text-sm sm:text-base">Colleges</p>
            <p className="text-white text-sm sm:text-base">Communities</p>
            <p className="text-white text-sm sm:text-base">Book Exchange</p>
            <p className="text-white text-sm sm:text-base">Events</p>
          </div>
        </div>

        <hr className="border-gray-700 mt-12" />

      
        <div className="mt-8 pb-6 text-center text-sm text-white">
          © {new Date().getFullYear()} CollegeBro. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
