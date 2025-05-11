import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white px-4 sm:px-[5rem] md:px-2 lg:px-12  py-4 ">
      <div className="container mx-auto mt-4  flex justify-between items-center ">
        {/* Logo */}
        <h1>
          <span className="text-2xl lg:text-4xl md:text-3xl sm:text-2xl  font-boorsok text-violet-300">College</span>{' '}
          <span className="text-2xl lg:text-4xl md:text-3xl sm:text-2xl font-aloja text-cyan">Bro</span>
        </h1>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden ">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-10  px-5 text-gray-100 text-lg font-sans   ">
         
          <a href="#" className="hover:text-violet-300 transition">Colleges</a>
          <a href="#" className="hover:text-violet-300 transition">Communities</a>
          <a href="#" className="hover:text-violet-300 transition">Exchange Books</a>
          <a href="#" className="hover:text-violet-300 transition">Events </a>
          <a href="#" className="hover:text-violet-300 hover:bg-white text-white transition bg-violet-300 px-3 py-1 rounded-xl ">SignUp  </a>
          



        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
  className={`md:hidden absolute py-4 top-18 left-0 w-full z-50 bg-gray-800  transition-all duration-400 ease-in-out transform ${
    isOpen
      ? 'opacity-100 scale-100 max-h-[500px]'
      : 'opacity-0 scale-95 max-h-0'
  } overflow-hidden`}
>
  <div className="flex flex-col space-y-5 px-5 py-3 pb-6 text-xl text-gray-100 mt-12 text-center ">
    <a href="#" className="hover:text-violet-300 transition">Colleges</a>
    <a href="#" className="hover:text-violet-300 transition">Communities</a>
    <a href="#" className="hover:text-violet-300 transition">Exchange Books</a>
    <a href="#" className="hover:text-violet-300 transition">Events</a>
    <a href="#" className="hover:text-violet-300 hover:bg-white text-white transition bg-violet-300 px-2 py-1 rounded-xl ">SignUp  </a>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
