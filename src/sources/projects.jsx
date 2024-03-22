import React from 'react'
import IMF from '../assets/IMF.jpg'
import WTO from '../assets/WTO.png'

function projects() {
  return (
    <>
      <div className = 'h-[70rem]'>
        <div className = 'flex justify-start'>
          <div className = 'text-red-400 text-3xl font-bold font-nunito' >02. </div>
          <div className = 'text-white mx-10 text-3xl font-bold font-nunito'>International Trade Organizations</div>
        </div>

        <div className = 'flex my-20 space-x-10'>
        
        <div>
        
        <div className = 'flex flex-col justify-center'>
          <div className = 'my-10'>
          <div className = 'text-red-400 font-nunito'>
            World Trade Organisation
          </div>
          <div className = 'text-white font-nunito text-4xl font-bold'>
            (WTO)
          </div>
          </div>
          <div className = 'text-white font-nunito shadow-2xl bg-[#202A44] p-5 h-[30rem] w-[20rem] rounded-xl'>
            <div>International organization that aims to improve and expand international trade through setting international rules and practices to attain balance and transparency in trade negotiations among countries to foster globalization.  </div>
            <img className = ' my-10 rounded-lg' src = {WTO}/>
          </div>
        </div>
        </div>
        
        <div className = 'flex items-align justify-center'>
        <div className = 'my-20 flex flex-col justify-center'>
          <div className = 'text-red-400 font-nunito'>
            International Monetary Fund
          </div>
          <div className = 'text-white font-nunito text-4xl font-bold '>
            (IMF)
          </div>
          
          <div className = 'text-white font-nunito shadow-2xl h-[30rem] w-[20rem] bg-[#202A44] p-5 my-10 rounded-xl'>
          <div>
          The International Monetary Fund (IMF) is a global organization dedicated to promoting monetary cooperation, financial stability, and sustainable economic growth among its member countries through financial assistance, policy advice, and technical support.
          </div>
          <img className = ' my-10  rounded-lg' src = {IMF}/>
          </div>
          
        </div>
        
        </div>
    </div>
      
      </div>
    </>
  )
}

export default projects