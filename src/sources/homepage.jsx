import React from 'react'

function homepage() {
    
  return (
    <>
      
      <div className = 'flex flex-col justify-center mt-[10rem] mb-[20rem]'>
          <div className = 'text-red-400 font-nunito font-bold'>
            Topic 4.4
          </div>
          <div className = 'text-7xl font-extrabold text-white my-2 font-nunito'>
            Global Economics
          </div>
          <div className = 'text-7xl text-white my-2 font-nunito font-extrabold'>
            Economic Integration
          </div>
          <div className = 'text-lg text-white my-5 font-bold font-nunito'>
           Baron Liu
          </div>
          <a target= "blank" href = 'https://devpost.com/baronliu1993' className = 'hover:text-[#101628] bg-red-400 text-white my-5 font-nunito border w-40 p-5 hover:bg-white rounded-lg'>
            View Work →
          </a>
        </div>
    </>
  )
}

export default homepage
