import { useState } from 'react'
import Hero from './components/hero'
import Navbar from './components/Navbar'
import Page2 from './components/Page2'
import Page3 from './components/Page3'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <main className='relative min-h-screen w-screen overflow-x-hidden'> 
    <Hero />
    <Page2/>
    <Page3/>
   </main>
    </>
  )
}

export default App 
