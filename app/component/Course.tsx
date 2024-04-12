import React from 'react'
import Image from "next/image"
import Img1 from "@/public/core1.jpg"
import Img2 from "@/public/core2.jpg"
import Img3 from "@/public/core3.jpg"
import Img4 from "@/public/core4.jpg"

const Courses = () => {
  return (
      
    <main>
      <h1 className='text-4xl text-[#03045E] font-black mt-14 mb-4 ml-10'>Core Courses Sequence</h1>
      
      <main className='flex gap-6 flex-wrap justify-between mr-14 ml-14'>
      <div className='flex flex-col hover:scale-110 duration-500 mt-10 w-64 h-52 rounded-md shadow-md shadow-gray-400'>
            <div >
                <Image src={Img1} alt="Image" className='rounded-md h-36' />
            </div>
            <div className='text-1xl mr-6 ml-6 text-[#52525B] text-center font-bold'> 
                Typescript and Python Programming 
            </div>
        </div>
        <div className='flex flex-col mt-10 w-64 h-52 hover:scale-110 duration-500 rounded-md shadow-md shadow-gray-400'>
            <div >
                <Image src={Img2} alt="Image" className='rounded-md h-36' />
            </div>
            <div className='text-1xl mr-6 ml-6 text-[#52525B] text-center font-bold'> 
                Web Application Development NextJS 
            </div>
        </div>
        <div className='flex flex-col mt-10 w-64 h-52 hover:scale-110 duration-500 rounded-md shadow-md shadow-gray-400'>
            <div >
                <Image src={Img3} alt="Image" className='rounded-md h-36' />
            </div>
            <div className='text-1xl mr-6 ml-6 text-[#52525B] text-center font-bold'> 
                API Design, Development using... 
            </div>
        </div>
        <div className='flex flex-col mt-10 w-64 h-52 hover:scale-110 duration-500 rounded-md shadow-md shadow-gray-400'>
            <div >
                <Image src={Img4} alt="Image" className='rounded-md h-36' />
            </div>
            <div className='text-1xl mr-6 ml-6 text-[#52525B] text-center font-bold'> 
                GenAI, Database, Cloud Development, and DevOps 
            </div>
        </div>
      </main>
    </main>
    
  )
}

export default Courses;