import React, { useState } from 'react';
import AR from '../conditional/AR.jsx';
import MC from '../conditional/MC.jsx';
import PRO from '../conditional/PRO.jsx';
import SC from '../conditional/SC.jsx';

function Extra() {
  const [selectedComponent, setSelectedComponent] = useState(<AR />);

  const handleItemClick = (component) => {
    setSelectedComponent(component);
  };

  const componentsToRender = [
    { id: 1, component: <AR />, Name: 'Free Trade Area' },
    { id: 2, component: <MC />, Name: 'Customs Union' },
    { id: 3, component: <PRO />, Name: 'Common Markets' },
    { id: 4, component: <SC />, Name: 'Monetary Unions' }
  ];

  return (
    <>
      <div className='h-[45rem] mt-32 mb-32 bg-[#101628] pt-20 mx-32 rounded-3xl'>

        <div className='text-white flex mx-20'>
          <div className='flex mx-[8rem] justify-start'>
            <div className='text-white mx-10 text-3xl font-bold font-nunito'>Types of Trade Protection</div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex'>
              <div className='font-bold text-2xl text-red-400'>
                Trading Bloc Definition
              </div>
            </div>
            <div>
              Agreement between countries to create a region in which economic trade and cooperation can take place. A key objective of this agreement is to ensure greater competition between producers in the region. The type of trading blocs include:
            </div>
            <div>
              <ol className='flex space-x-4 text-red-400 font-semibold'>
                <li>
                  Free Trade Area
                </li>
                <li>
                  Customs Union
                </li>
                <li>
                  Common Markets
                </li>
                <li>
                  Monetary Unions
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col text-white mx-36 justify-start'>
            {componentsToRender.map((item) => (
              <button key={item.id} onClick={() => handleItemClick(item.component)} className='my-5 text-lg space-y-10 bg-red-400 font-bold hover:shadow-lg hover:text-black w-[10rem] h-[3rem] border-solid border-black rounded-md'>{item.Name}</button>
            ))}
          </div>
          {selectedComponent}
        </div>
      </div>
    </>
  )
}

export default Extra;
