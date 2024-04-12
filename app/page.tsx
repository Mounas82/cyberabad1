
import React from 'react'
import Image from "next/image"
import Img1 from "./../public/President.jpg"
import Navi from "./component/Nav"
import Pics from "./component/Pics"
import Cards from './component/Card'
import Courses from './component/Course'
import AdvCourses from './component/AdvCourses'
import Foot from './component/Foot'


const Page = () => {
  return (
    <body> 
      <main>
        <div> 
          <Navi />
        </div>
        <div className='justify-center px-3.5 text-center mt-4 text-[#03045E] text-6xl'>
          <h1> <b> Faisalabad's </b> Journey <br/> towards <b> Cyberabad </b> </h1>
          
        </div>
        <div className='justify-center px-3.5 text-center text-blue-400 text-5xl mt-4'> 
          <h2>Where threads weave innovation through GenAI.</h2> 
        </div>
        <div className="flex flex-col flex-wrap mt-10 bg-gray-200 text-blue-950">
          <div className="text-5xl ml-16 flex flex-row"> 
            <div className='flex flex-col'> 
              <h1> <b> Initiative for Cloud Applied <br/> Generative AI by 
              Faisalabad <br/> Chamber of Commerce and Industry (FCCI) </b>
              </h1>
              <p className="text-2xl justify indent-10 text-blue-400 mr-4"> Advanced Specializations Available for Computer Science, Medical, <br/>
             Healthcare, Engineering, Marketing, Accounting, Finance, Banking and <br/>
             Cybersecurity Professionals.For the first time in the history of PAKISTAN,              Breaking Barriers Between Technologists and Venture Capitalists with the <br/>
             leadership of Faisalabad Chamber of Commerce and Industry.
              </p>
            </div>
            <div> <Image src={Img1} width={500} height={500} alt="Image" className="border-2 
            rounded-2xl border-black bg-gray-200 mt-16 mr-20"/> 
            </div>
          </div> 
           
          <div className="flex flex-row flex-wrap gap-16 ml-16">
            <div className='bg-red-600 text-white ml-10 mt-3 mb-3 rounded-full text-lg hover:text-red-600 hover:bg-white'> 
              <button className="px-10 py-3"> APPLY FOR TRAINING NOW </button> 
            </div>
            <div className='bg-green-400 text-white mt-3 mb-3 rounded-full text-lg hover:text-green-600 hover:bg-white'> 
              <button className="px-10 py-3 ml-5"> JOIN OUR WHATSAPP CHANNEL </button> 
            </div>
          </div> 
        </div>
        
          <div className='flex flex-row flex-wrap'>
            <Pics />
          </div>
          <div>
            <Cards />
          </div>
          <div>
            <Courses />
          </div>
          <div>
            <h1 className='text-4xl text-[#03045E] font-black mt-16 mb-3 ml-14'> 
            Advanced Courses with GenAI Integration </h1>
          </div>
          <div>
            <AdvCourses />
          </div>
          <div>
            <Foot />
          </div>
      </main>
    </body>
    
  )
}

export default Page