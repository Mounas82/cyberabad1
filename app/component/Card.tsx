import React from 'react'

const Cards = () => {
  return (
    
    <main> 
      <h1 className='text-center font-black text-pretty text-6xl mt-10 text-[#03045E] mb-5 '> 
         We are proud to offer 
      </h1>
      <div className='flex flex-wrap gap-6 ml-10 mr-4 justify-between text-center'> 
        <div className=' flex flex-col rounded-md bg-white hover:bg-[#EB2A40] hover:text-white duration-500 hover:scale-110 shadow-md shadow-gray-400 w-96 aspect-square h-72 '> 
          <div className='rounded-full h-10 w-10 bg-[#EB2A40] mb-10'> </div>
          <h1 className='mb-12 font-bold'>  
          Latest State of the Art Technology
          </h1>
          <p className='mr-4 ml-4'> Train IT professionals who they can build million $ companies nationwide in cutting-edge technologies, fostering a technical revolution in Faisalabad and across Pakistan.  </p> 
        </div>
        <div className=' flex flex-col justify-center rounded-md bg-white hover:bg-[#023E8A] hover:text-white duration-500 hover:scale-110 shadow-md shadow-gray-400 w-96 aspect-square h-72 '>
          <h1 className=' mb-12 '> <b>  Opportunity to Learn Business </b> </h1>
          <p className='mr-4 ml-4'>Opportunity to learn direct from top business leaders of Pakistan for a more successful business career.  </p> 
        </div>
        <div className=' flex flex-col justify-center rounded-md bg-white hover:bg-[#17B5A2] hover:text-white duration-500 hover:scale-110 shadow-md shadow-gray-400 w-96 aspect-square h-72 '>
          <h1 className=' mb-12 '> <b> Venture Capital Fund </b> </h1>
          <p className='mr-4 ml-4'> A project will create a 100-million-dollar Venture Capital Fund to finance the IT companies and startups Faisalabad </p>

        </div>

        <div className=' flex flex-col justify-center rounded-md bg-white hover:bg-[#5E503F] hover:text-white duration-500 hover:scale-110 shadow-md shadow-gray-400 w-96 aspect-square h-72 '>
          <h1 className=' mb-12 '> <b> Angle Investor Club </b> </h1> 
          <p className='mr-4 ml-4'> A Cyberabad Angel Investor Club will also be formed and it will also provide initial seed money for startup businesses, in exchange for ownership equity in the company. </p>
        </div>

        <div className=' flex flex-col justify-center rounded-md bg-white hover:bg-[#669BBC] hover:text-white duration-500 hover:scale-110 shadow-md shadow-gray-400 w-96 aspect-square h-72 '>
          <h1 className=' mb-12 '> <b> Coworking Space </b> </h1> 
          <p className='mr-4 ml-4'> Establish the Cyberabad Coworking Space in Faisalabad's corporate district, offering flexible workspaces, 24/7 access, amenities, and networking opportunities. Energize and connect in this vibrant, fully-equipped environment.</p>
        </div>

        <div className=' flex flex-col justify-center rounded-md bg-white hover:bg-[#FFB703] hover:text-white duration-500 hover:scale-110 shadow-md shadow-gray-400 w-96 aspect-square h-72 '>
          <h1 className=' mb-12 '> <b> International Embassies </b> </h1> 
          <p className='mr-4 ml-4'> Set up Cyberabad International Embassies in Silicon Valley, USA, and Dubai Internet City, fostering global business connections and serving as hubs for Cyberabad's international outreach. </p>
        </div>

      </div>
      
    </main>
  )
}

export default Cards;