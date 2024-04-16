import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function navbar() {
  return (
    <div>
      <div className = 'bg-[#101628] h-[5rem] flex justify-center items-center'>
        <ol className = 'flex p-10'>
          <Link to = "/"><button className = 'mx-8 font-semibold text-white hover:text-red-400'>1. Trade Protection Introduction</button></Link>
          <Link to = "/describe"> <button className = 'mx-8 font-semibold text-white hover:text-red-400'>2. Describing the Argument for and Against Trade Protection</button></Link>
          <Link to = '/claspp'> <button className = 'mx-8 font-semibold text-white hover:text-red-400'>3. Evaluation of Trade Protection vs Free Trade</button></Link>
        </ol>
      </div>
    </div>
  )
}

export default navbar
