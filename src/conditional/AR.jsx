import React from 'react'
import China from '../assets/China.jpg'

function AR() {
  return (
    <div className = 'text-white flex'>
      <div className = 'flex flex-col justify-center'>
      <div className = 'flex'>
        <div className = 'font-bold text-2xl text-red-400'>
        Free Trade Area:
        </div>
      </div>
      <div>
        Agreement between countries to create a region in which economic trade and cooperation can take place freely. A key objective of this agreement is to ensure greater competition between producers in the region. The type of trading blocs include:
      </div>
      <div className = 'font-bold text-2xl text-red-400'>
        Example
      </div>
      <div className = 'my-10 font-nunito font-bold'>
        Australia-Hong Kong Bilateral Free Trade Area(FTA) for Goods and Services Started on 17-January-2020
      </div>
    </div>
    <img className = 'h-[15rem] w-[30rem] rounded-md m-20' src = {China}/>
    </div>
  )
}

export default AR
