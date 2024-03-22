import React from 'react'
import EU from '../assets/EU.jpg'

function PRO() {
  return (
    <div className = 'text-white flex'>
    <div className = 'flex flex-col justify-center'>
    <div className = 'flex'>
      <div className = 'font-bold text-2xl text-red-400'>
      Common Markets
      </div>
    </div>
    <div>
    Similar to a customs union. It is also an agreement between countries to create a region in which economic trade and cooperation can take place and countries must set a common external policy to non-members. Despite that, the custom union must also allow the free movement of factors of production such as land, labour, entrepreneurial talent and capital resources.
    </div>
    <div className = 'font-bold text-2xl text-red-400'>
      Example
    </div>
    <div className = 'my-10 font-nunito font-bold'>
      European Union
    </div>
  </div>
  <img className = 'h-[15rem] w-[30rem] rounded-md m-20' src = {EU}/>
  </div>
  )
}

export default PRO
