import React, { useState } from 'react';
import Navbar from './Navbar';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PartialFooter from './PartialFooter';

const StudentSignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await axios.post('/api/login', form);
    // console.log("Logged in as", res.data.role);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-10 pt-[100px] pb-10 max-w-7xl mx-auto">

        {/* Guidelines Section */}
        <div className="w-full lg:w-1/2 p-5  bg-gray-900 border border-gray-700 rounded-lg">
          <button
            onClick={() => navigate("/Register")}
            className="flex items-center gap-2 text-gray-200 hover:text-violet-300 mb-6 transition-colors"
          >
            <ArrowLeft className='w-4 h-4' />
            Back to role selection
          </button>

          <h2 className="text-3xl font-bold text-white mb-2">Welcome to College Bro 😎</h2>
          <p className="text-purple-400 text-lg mb-8">You are registering as a Student</p>

          <h3 className="text-xl font-semibold text-white mb-4">As a student, you can:</h3>

               <div className=' guidelines1 flex justify-start items-center gap-5 text-white'>
                <div data-component-content="%7B%22className%22%3A%22w-10%20h-10%20rounded-full%20bg-gradient-to-r%20from-purple-500%20to-purple-700%20flex%20items-center%20justify-center%20flex-shrink-0%20mt-1%22%7D" class="w-10 h-10 rounded-full bg-gradient-to-r from-violet-300 to-purple-800 flex items-center justify-center flex-shrink-0 mt-1"><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building w-5 h-5 text-purple-200" ><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg></div>
                <h1> You can register yourself in your college and department. </h1>
                </div>  
         <div className=' guidelines2 mt-3 flex justify-start items-center gap-5 text-white'>
             <div data-component-content="%7B%22className%22%3A%22w-10%20h-10%20rounded-full%20bg-gradient-to-r%20from-purple-500%20to-purple-700%20flex%20items-center%20justify-center%20flex-shrink-0%20mt-1%22%7D" class="w-10 h-10 rounded-full bg-gradient-to-r from-violet-300 to-purple-800 flex items-center justify-center flex-shrink-0 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-component-content="%7B%22className%22%3A%22w-5%20h-5%20text-purple-200%22%7D"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
                <h1>You can engage in the communities and events.</h1>
                </div>  
            <div className=' guidelines3 mt-3 flex justify-start items-center gap-5 text-white'>
             <div  data-component-content="%7B%22className%22%3A%22w-10%20h-10%20rounded-full%20bg-gradient-to-r%20from-purple-500%20to-purple-700%20flex%20items-center%20justify-center%20flex-shrink-0%20mt-1%22%7D" class="w-10 h-10 rounded-full bg-gradient-to-r from-violet-300  to-purple-800 flex items-center justify-center flex-shrink-0 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-component-content="%7B%22className%22%3A%22w-5%20h-5%20text-purple-200%22%7D"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg></div>  
                <h1>Talk to a teacher for academic guidance.</h1>
                </div> 
                        <div className=' guidelines4 mt-3 flex justify-start items-center gap-5 text-white'>
             <div  data-component-content="%7B%22className%22%3A%22w-10%20h-10%20rounded-full%20bg-gradient-to-r%20from-purple-500%20to-purple-700%20flex%20items-center%20justify-center%20flex-shrink-0%20mt-1%22%7D" class="w-10 h-10 rounded-full bg-gradient-to-r from-violet-300  to-purple-800 flex items-center justify-center flex-shrink-0 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-component-content="%7B%22className%22%3A%22w-5%20h-5%20text-purple-200%22%7D"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg></div>  
                <h1>Chat with students who currently studying in your desired college to get authentic information about the campus.</h1>
                </div> 
             <div className=' guidelines5 mt-3 flex justify-start items-center gap-5 text-white'>
            <div data-component-content="%7B%22className%22%3A%22w-10%20h-10%20rounded-full%20bg-gradient-to-r%20from-purple-500%20to-purple-700%20flex%20items-center%20justify-center%20flex-shrink-0%20mt-1%22%7D" class="w-10 h-10 rounded-full bg-gradient-to-r from-violet-300 to-purple-700 flex items-center justify-center flex-shrink-0 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-component-content="%7B%22className%22%3A%22w-5%20h-5%20text-purple-200%22%7D"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg></div> 
                <h1>Get Knowledge of other colleges and their departments.</h1>
                </div> 



          <h1 className='text-gray-400 text-center mt-7'>We request all users to uphold decorum to keep the platform clean and constructive</h1>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-5 bg-gray-900 border border-gray-700 rounded-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-semibold text-white mb-4">Create a Student Account</h2>

            <div className="flex flex-col md:flex-row gap-4">
              <div className='w-full'>
                <label className='text-white block mb-1 ml-1'>First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-300"
                  onChange={e => setForm({ ...form, firstName: e.target.value })}
                />
              </div>
              <div className='w-full'>
                <label className='text-white block mb-1 ml-1'>Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-300"
                  onChange={e => setForm({ ...form, lastName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className='text-white block mb-1 ml-1'>Your Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-300"
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className='text-white block mb-1 ml-1'>Your Institution</label>
              <input
                type="text"
                placeholder="School / College Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-300"
                onChange={e => setForm({ ...form, institution: e.target.value })}
              />
            </div>

            <div>
              <label className='text-white block mb-1 ml-1'>Your Department</label>
              <select
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-300"
                onChange={e => setForm({ ...form, department: e.target.value })}
                defaultValue=""
              >
                <option value="" disabled>Select Your Degree</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="B.Sc">B.Sc</option>
                <option value="M.Sc">M.Sc</option>
                <option value="BBA">BBA</option>
                <option value="MBA">MBA</option>
                <option value="BA">BA</option>
                <option value="MA">MA</option>
                <option value="B.Com">B.Com</option>
                <option value="M.Com">M.Com</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className='text-white block mb-1 ml-1'>Your Academic Year</label>
              <input
                type="text"
                placeholder="Academic Year (e.g., 1st, 2nd)"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-300"
                onChange={e => setForm({ ...form, academicYear: e.target.value })}
              />
            </div>

            <div>
              <label className='text-white block mb-1 ml-1'>Create a Password</label>
              <input
                type="password"
                placeholder="At least 6 characters"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={e => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-300 hover:bg-violet-900 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Register as Student
            </button>
          </form>
        </div>

      </div>
      <PartialFooter/>
    </div>
  );
};

export default StudentSignUp;