import React from 'react'
import Image from "next/image"
import Pic1 from "@/public/Adv1.jpg"
import Pic2 from "@/public/Adv2.jpg"
import Pic3 from "@/public/Adv3.jpg"
import Pic4 from "@/public/Adv-4.jpg"
import Pic5 from "@/public/Adv-5.jpg"
import Pic6 from "@/public/Adv6.jpg"
import Pic7 from "@/public/Adv7.jpg"
import Pic8 from "@/public/Adv8.jpg"

const AdvCourses = () => {
  return (
    <main className='flex gap-6 flex-wrap justify-between mr-14 ml-14'>
        <div className='flex flex-col mt-10 w-64 h-52 rounded-md shadow-md hover:scale-110  duration-500 shadow-gray-400'>
            <div>
                <Image src={Pic1} alt="Image" className='rounded-md h-36'/>
            </div>
            <div className='text-1xl mr-6 ml-6 mt-2 text-center text-[#52525B] font-bold'> 
                Web 3.0 and Blockchain with AI Integration 
            </div>

        </div>
        <div className='flex flex-col mt-10 w-64 h-52 rounded-md shadow-md hover:scale-110 duration-500 shadow-gray-400'>
            <div>
                <Image src={Pic2} alt="Image" className='rounded-md h-36' />
            </div>
            <div className='text-1xl mr-6 ml-6 mt-2 text-center text-[#52525B] font-bold'> 
                Metaverse and 3D with AI Integration 
            </div>
        </div>
        <div className='flex flex-col mt-10 w-64 h-52 rounded-md shadow-md hover:scale-110 duration-500 shadow-gray-400'>
            <div>
                <Image src={Pic3} alt="Image" className='rounded-md h-36'/>
            </div>
            <div className='text-1xl mr-6 ml-6 mt-2 text-center text-[#52525B] font-bold'> 
                Health Care & Medical GenAI 
            </div>
        </div>
        <div className='flex flex-col mt-10 w-64 h-52 rounded-md shadow-md hover:scale-110 duration-500 shadow-gray-400'>
            <div className='h-'>
                <Image src={Pic4} alt="Image" className='rounded-md h-36'/>
            </div>
            <div className='text-1xl mr-6 ml-6 mt-2 text-center text-[#52525B] font-bold'>
                 Generative AI Accounting, Finance,
            </div>
        </div>
        <div className='flex flex-col mt-10 w-64 h- r52ounded-md shadow-md hover:scale-110 duration-500 shadow-gray-400'>
            <div className='h-'>
                <Image src={Pic5} alt="Image" className='rounded-md h-36'/>
            </div>
            <div className='text-1xl mr-6 ml-6 mt-2 text-center text-[#52525B] font-bold'> 
                GenAI for Engineers Specializations 
            </div>
        </div>
        <div className='flex flex-col mt-10 w-64 h-52 rounded-md shadow-md hover:scale-110 duration-500 shadow-gray-400'>
            <div className='h-'>
                <Image src={Pic6} alt="Image" className='rounded-md h-36'/>
            </div>
            <div className='text-1xl mr-6 ml-6 mt-2 text-center text-[#52525B] font-bold'> 
                GenAI for Sales and Marketing Specilization 
                </div>
        </div>
        <div className='flex flex-col mt-10 w-64 h-52 rounded-md shadow-md hover:scale-110 duration-500 shadow-gray-400'>
            <div className='h-'>
                <Image src={Pic7} alt="Image" className='rounded-md h-36'/>
            </div>
            <div className='text-1xl mr-6 ml-6 mt-2 text-center text-[#52525B] font-bold'> 
                GenAI for Automation and IoT Specialization 
            </div>
        </div>
        <div className='flex flex-col mt-10 w-64 h-52 rounded-md shadow-md hover:scale-110  duration-500 shadow-gray-400'>
            <div className='h-'>
                <Image src={Pic8} alt="Image" className='rounded-md h-36'/>
            </div>
            <div className='text-1xl mr-6 ml-6 mt-2 text-center text-[#52525B] font-bold'> 
                Generative AI for Cyber Security 
            </div>
        </div>
    </main>
    
  )
}

export default AdvCourses