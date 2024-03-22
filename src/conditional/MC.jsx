import React from 'react'
import Asia from '../assets/ASIA.jpg'

function MC() {
  return (
    <div className = 'text-white flex'>
    <div className = 'flex flex-col justify-center'>
    <div className = 'flex'>
      <div className = 'font-bold text-2xl text-red-400'>
      Customs Union
      </div>
    </div>
    <div>
      Similar to a free trade area. It is also an agreement between countries to create a region in which economic trade and cooperation can take place. However, a key difference is that all member countries set common external policies to non-member countries.
    </div>
    <div className = 'font-bold text-2xl text-red-400'>
      Example
    </div>
    <div className = 'my-10 font-nunito font-bold'>
      Eurasian Economic Union (EAEU) between Armenia; Belarus; Kazakhstan; Kyrgyzstan; Russian Federation for Goods and Services that Started on 01-Jan-2015
    </div>
  </div>
  <img className = 'h-[15rem] w-[30rem] rounded-md m-20' src = {Asia}/>
  </div>
  )
}

export default MC
