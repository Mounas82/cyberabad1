// import React from 'react'
import Image from "next/image"
import Img from "@/public/cyberabad-logo.jpg"

const Navi = () => {
  return (
        <div className='flex flex-row bg-blue-950 gap-20 py-2'>
          <Image src={Img} width={80} height={80} alt="Image" className="rounded-full"/> 
          <div className='flex flex-row flex-wrap gap-10 py-2'> 
          
            <ul className=" flex flex-row flex-wrap text-white mt-4 gap-16 ml-32 ">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>RESULT</li>
              <li>FAQS</li>
              <li>COURSES</li>
            </ul>

          </div>
            
          <div className='bg-[#B21E35] text-white mt-2 mb-2 ml-40 rounded-full text-lg hover:bg-white hover:text-[#B21E35]'> 
            <button className="px-8 py-3"> APPLY NOW </button> 
          </div>
        </div>
  

)
}
export default Navi;