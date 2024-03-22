import React from 'react'
import Euro from '../assets/EURO.png'


function SC() {
  return (
    <div className = 'text-white flex'>
    <div className = 'flex flex-col justify-center'>
    <div className = 'flex'>
      <div className = 'font-bold text-2xl text-red-400'>
      Monetary Union
      </div>
    </div>
    <div>
    Defined as a trading bloc that has free trade, a common external policy to non-member, free movement of the factors of production and a shared currency.
    </div>
    <div className = 'font-bold text-2xl text-red-400'>
      Example
    </div>
    <div className = 'my-10 font-nunito font-bold'>
      The Eurozone which shares the Euro on January 1st, 1999 arised from the Exchange Rate Mechanism (ERM). Kosovo and Montenegro are not members of the Eurozone, but use the Euro regardless. 
    </div>
  </div>
  <img className = 'h-[15rem] w-[30rem] rounded-md m-20' src = {Euro}/>
  </div>
  )
}

export default SC
