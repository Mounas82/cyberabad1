import Image from "next/image"

import React from 'react'
import Pic1 from "@/public/President.jpg"
import Pic2 from "@/public/slideShow3.jpg"
import Pic3 from "@/public/slideShow5.jpg"
import Pic12 from "@/public/slideShow12.jpg"

const Pics = () => {
  return (
    <main>
      <div> 
        <h1 className="text-4xl text-center mt-10"> <b> Unleashing Creativity </b> </h1> 
        <h2 className="text-4xl mt-3 text-center"> The Marvels of Generative AI Across Industries </h2>
        <p className="text-justify ml-10 mr-10 text-2xl mt-12"> 
        With the introduction of OpenAI's <a> ChatGPT </a> 4 and Google's Gemini , 
          Generative AI is poised to completely transform our lives and work 
          landscape. McKinsey & Company estimates that generative AI could 
          add $2.6 trillion to $4.4 trillion in economic benefits annually 
          across various industries. This will be achieved through increased
           automation, improved decision-making, and personalized experiences.
            It is transformative for tech, businesses, and jobs. It's critical 
            for our survival, that we adopt these technologies. For the first
             time in the history of PAKISTAN, we are Breaking Barriers Between 
             Technologists and Venture Capitalists under the leadership of 
             Faisalabad Chamber of Commerce and Industry. We will first train you,
              and then mentor and fund you to build world class AI applications
               across textile and other industries. </p>
      </div>
    <div className="">
      <ul className="flex flex-wrap gap-3 mt-10">
        <li><Image src={Pic2} width={600} height={600} alt="Image"/> </li>
        <li><Image src={Pic12} width={600} height={600} alt="Image"/> </li>
        <li> <Image src={Pic3} width={600} height={600} alt="Image"/></li>
        <li><Image src={Pic2} width={600} height={600} alt="Image"/> </li>
      </ul>

        
        
        
        
    </div>
    </main>
  )
}

export default Pics;