import { useState } from 'react'
import { BrowserRouter ,Route, Routes , Navigate } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

import NotFound from './components/NotFound'
import Signup from './components/Signup'
import RegisterUser from './components/RegisterUser'
import Login from './components/Login'
import StudentSignUp from './components/StudentSingUp'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes as needed */}
      <Route path="*" element={<NotFound />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/SignUp" element={<Signup />} />
      <Route path="/Register" element={<RegisterUser />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/studentSingup" element={<StudentSignUp />} />
      {/* Redirect from /home to / */}
 
    </Routes>
   
    </>
  )
}

export default App 
