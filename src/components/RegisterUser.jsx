import React from 'react'
import Footer from './Footer'
import PartialFooter from './PartialFooter'
import { useNavigate } from 'react-router-dom'

const RegisterUser = () => {

    const navigate = useNavigate();
  return (
    <div className="bg-black w-full min-h-screen ">
      <header className="border-b border-gray-800 p-4 flex items-center space-x-2">
        <h1 className="text-xl sm:text-xl md:text-1xl lg:text-2xl font-bold">
          <span className="font-boorsok text-violet-300">College</span>{' '}
          <span className="font-aloja text-cyan">Bro</span>
        </h1>
      </header>

      <div className="text-white flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mt-6 mb-2">
          Join College Bro
        </h2>
        <p className="text-gray-400 text-sm md:text-base text-center mt-2">
          Select your role to get started
        </p>
      </div>

   <div   className="mt-10 w-full flex flex-wrap justify-center items-stretch gap-5 px-4">
  {/* Student Card */}
  <div   onClick={() => navigate('/studentSingup')} className="w-full sm:w-[80%] md:w-[45%] lg:w-[18%] p-5 bg-gray-900 border border-gray-600 hover:border-violet-500 cursor-pointer transition-all duration-300 hover:scale-105 rounded-lg text-white">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
    <h1 className="text-center text-2xl">Student</h1>
    <p className="font-normal mt-1 text-center text-gray-400">
      Connect with peers, find resources, and join communities
    </p>
  </div>

  {/* Teacher Card */}
  <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[18%] p-5 bg-gray-900 border border-gray-600 hover:border-green-500 cursor-pointer transition-all duration-300 hover:scale-105 rounded-lg text-white">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
    <h1 className="text-center text-2xl">Teacher</h1>
    <p className="font-normal mt-1 text-center text-sm text-gray-400">
      Guide students, share knowledge, and build communities
    </p>
  </div>

  {/* Administrator Card */}
  <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[18%] p-5 bg-gray-900 border border-gray-600 hover:border-blue-500 cursor-pointer transition-all duration-300 hover:scale-105 rounded-lg text-white">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
    <h1 className="text-center text-2xl">Administrator</h1>
    <p className="font-normal mt-1 text-center text-gray-400">
      Manage colleges, events, and platform operations
    </p>
  </div>
</div>

 <div className="mt-6 text-center ">
                  <p className="text-gray-400">
                    Already have an account?{" "}
                    <button 
                      onClick={() => navigate('/Login')}
                      className="text-violet-500 hover:underline"
                    >
                      Log in
                    </button>
                  </p>
                </div>

 <PartialFooter/>

    </div>
  )
}

export default RegisterUser
