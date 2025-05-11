import React from 'react'

const Page2 = () => {
  return (
    <div className='relative bg-black min-h-screen w-screen overflow-x-hidden'>
      <div className='flex items-center justify-center flex-col mt-[10rem] gap-5'>
      <h1 className='text-6xl  text-center text-violet-300  font-BrickSans'>Imagine</h1>
      <h2 className=' text-white text-center w-[40%] text-4xl font-SansitaRegular font-thin '> A platform which connects
      colleges of the world at <span className='text-cyan'>one place.</span> </h2>
      </div>

      <div>
        <div className='flex items-center justify-center flex-col gap-12 font-BrickSans ml-10 mt-[10rem]'>
            <ul className='text-white flex space-x-20 text-2xl list-disc'>
                <li>College Rating </li>
                <li>Teachers Information</li>
                <li>Placements</li>
            </ul> 
            <ul className='text-white flex space-x-20 text-2xl list-disc'>
                <li>Infrastucture </li>
                <li>And much more on the way</li>
            </ul>
        </div>
      </div>
 
    </div>
  )
}

export default Page2
