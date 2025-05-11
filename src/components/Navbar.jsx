import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-16 py-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
       
        <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          <span className="font-boorsok text-violet-300">College</span>{' '}
          <span className="font-aloja text-cyan">Bro</span>
        </h1>

      
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      
        <div className="hidden md:flex space-x-8 text-sm lg:text-lg font-sans items-center">
          <a href="#" className="hover:text-violet-300 transition">Colleges</a>
          <a href="#" className="hover:text-violet-300 transition">Communities</a>
          <a href="#" className="hover:text-violet-300 transition">Exchange Books</a>
          <a href="#" className="hover:text-violet-300 transition">Events</a>
          <a
            href="#"
            className="hover:text-violet-300 hover:bg-white bg-violet-300 text-white px-4 py-2 rounded-xl transition"
          >
            Sign Up
          </a>
        </div>
      </div>

      
      <div
        className={`md:hidden transition-all duration-200 ease-in-out bg-gray-900 w-full absolute left-0 top-[100%] ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col space-y-6 py-6 px-6 text-lg text-center">
          <a href="#" className="hover:text-violet-300 transition">Colleges</a>
          <a href="#" className="hover:text-violet-300 transition">Communities</a>
          <a href="#" className="hover:text-violet-300 transition">Exchange Books</a>
          <a href="#" className="hover:text-violet-300 transition">Events</a>
          <a
            href="#"
            className="hover:text-violet-300 hover:bg-white bg-violet-300 text-white px-3 py-2 rounded-xl transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
