import React from 'react'

function navbar() {
  return (
    <div>
      <div className = 'bg-[#101628] h-[5rem] flex justify-center items-center'>
        <ol className = 'flex p-10'>
          <a href = 'http://localhost:5173/' className = 'mx-8 font-semibold text-white hover:text-red-400'>1. Trade Protection Introduction</a>
          <a href = 'http://localhost:5173/describe' className = 'mx-8 font-semibold text-white hover:text-red-400'>2. Describing the Argument for and Against Trade Protection</a>
          <a href = 'http://localhost:5173/claspp' className = 'mx-8 font-semibold text-white hover:text-red-400'>3. Evaluation of Trade Protection vs Free Trade</a>
        </ol>
      </div>
    </div>
  )
}

export default navbar
