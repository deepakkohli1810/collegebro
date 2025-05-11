import { useState } from 'react'
import Hero from './components/hero'
import Navbar from './components/Navbar'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/page6'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <main className='relative bg-black min-h-screen w-screen overflow-x-hidden'> 
    <Hero />
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Page6/>
     <Footer/>
   </main>
    </>
  )
}

export default App 
