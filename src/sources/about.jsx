import React from 'react'

function about() {
  
  return (
    <>
    <div className = 'flex my-[1rem] justify-end'>
            <div className = 'text-red-400 text-3xl font-bold font-nunito' >01. </div>
            <div className = 'text-white mx-10 text-3xl font-bold font-nunito'>Trade Protection Introduction</div>
    </div>
    <div className = 'flex mt-10 justify-center items-center bg-[#101628] p-20 rounded-3xl'>
        <div className = 'flex-col flex justify-center m-10'>
          <div className = 'flex flex-col text-gray-100'>
            <div className = 'w-[20rem] font-nunito m-5'>
              The first stage of economic integration is called preferential trade agreements (PTAs) that reduce or remove the trade barriers for specific goods and services between the countries that are participating
            </div>
            <div className = 'w-[20rem] font-nunito m-5'>
              Defined as a unilateral/non-reciprocal preferential schemes. This means that a country provides the treatment such as reduction in tariffs without receiving the same treatment
            </div>
            <div className = 'w-[20rem] font-nunito m-5'>
              Negotiations can include human rights, property, intellectual property and environmental policies
            </div>
          </div>
      </div>
        
      </div>
    </>
  )
}

export default about
