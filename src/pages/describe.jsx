import React from 'react'
import Defense from '../assets/defense.jpg'
import Lockheed from '../assets/Lockheed.jpeg'
import Waterloo from '../assets/Waterloo.jpg'
import MNC from '../assets/MNC.jpg'

function describe() {
  return (
    <>
     <div id = 'bg-1' className = 'bg-[#101628] h-[100rem] flex-col flex items-center'>
      
      <div>
  

      <div className = 'text-white bg-[#101628] my-20 p-10'>
        <h1 className = 'text-2xl font-bold underline text-red-400'>
          For Free Trade
        </h1>
        <div className = 'flex'>
          <ol className = 'space-y-5'>
            <li>
              More employment opportunities for domestic workers due to greater labour mobility.
              For example, Greece with a high unemployment of 16% pushed domestics workers migrate to other countries in the EU for more work opportunities.
            </li>
            <li>
              More political stability and more economic cooperation as they share a mutual interest in the growth of the bloc. This shared interdependency drives countries to work together. This creates a common goal that drives actions and policies towards providing aid to one another
              European Health Insurance card, North Atlantic Treaty Organization for defense, and European Higher Education Area for education integration between the countries
            </li>
            <li>
            Protectionism reduces competition between producers which can decrease innovation. 
            More competitions push firms to invest in research and development that will push the efficiency of production methods and created more varied products at lower prices.
            Japan and the EU signed an FTA that covered goods and services on 17 July 2018. This allowed Japanese companies to access an extremely large market.
            </li>
            <div>
            Deadweight loss occurs due to production inefficiencies as foreign firms who are able to produce more cheaply are unable to produce as production is given to domestic firms
            Consumers consume less because of the higher prices resulting in a lower consumer surplus
            </div>
            <li>
            Access to greater markets enables firms to participate in economies of scale as the factors of production increases, thus reducing the average variable cost of production.
            If Japan wants to supply to the EU, those firms will invest in better machines to produce more efficiently. They will purchase in bulk raw materials which would allow for discounted prices. They could reduce the costs of transportation by increasing the size of the shipments.
            </li>
            <li>
            Trade blocs Improve mobility of workers and aids in developing the free movement of investment flows. This leads to increases in the standard of living as workers can easily find employment in another country. An OECD study on Market Opening, Growth and Employment pointed out that multilateral trade liberalisation has the potential to increase wages by up to 4% as well by increasing demand for jobs in the trade industry.
            </li>
            <li>
            Subsidies create an opportunity cost as government revenue can be invested into other industries such as education and healthcare.
            For quotas, tariffs and subsidies, consumers are worse off as prices increase causing a reduction in the consumer surplus as they are less willing and able to consume.
            Deadweight loss occurs due to production inefficiencies as foreign firms who are able to produce more cheaply are unable to produce as production is given to domestic firms.
            </li>
            <li>
              Improved national security in regards to the defense industry. For example, the USA plans to supply Israel with $14.3 billion in US manufactured defense equipment. How would you feel if all of our defense equipment was designed and manufactured in a foreign country? 
            </li>
          </ol>
          <div className = 'flex flex-col h-[30rem] w-[50rem] m-10'>
            <img src = {Defense} className = 'h-[30rem] w-[50rem]'/>
            <img src = {Lockheed} className = 'h-[30rem] w-[50rem]'/>
          </div>
          
        </div>
      </div>

      <div className = 'text-white bg-[#101628] p-10'>
        <h1 className = 'text-2xl font-bold underline text-red-400'>
          Against Free Trade
        </h1>
        <div className = 'flex'>
          <ol className = 'space-y-5'>
            <li>
              There is decreased sovereignty of the nations causing them to be unable to control their monetary policies causing the inability to control currency and inflation rates. For example in Greece, there was a development of a European sovereign debt crisis as they did not control their own monetary policy. Greece could not use currency devaluation to boost exports and their economy. 
              The rules of the EU did not allow them to run budget deficits either to reduce unemployment rates. This led to an exacerbation of the Greek recession. 
            </li>
            <li>
              Incentives are based on the price mechanism and encourages environmental exploitation and inequities due to the dominance of MNCs.
              MNCs can exploit the country where production is happening, profits are repatriated, low paying jobs are given, and destruction of the environment occurs. For example the MNC Nestle's environmental impact ratio was 21.1% in 2017 and 22.7% in 2018.
            </li>
            <li>
            Joint decision-making is difficult because many nations are involved. Under the Treaty of Amsterdam, the 15 EU states must transfer certain powers such as foreign policy to the European Parliament.
            Furthermore, in the Eurozone, there are 19 very different countries, with vastly differing economies, trying to manage a currency. If some countries need to loosen monetary or fiscal policies while others do not, there will be disagreements.  Specific countries in the Eurozone, such as Germany and France, have more bargaining power due to their stronger economies.
            </li>
            <li>
            There is also a restriction on the use of fiscal policy especially for monetary unions. 
            For example, when the Maastricht Treaty was signed, countries agreed to limit government deficits to 3% of GDP and public debt levels to 60%. The Stability and Growth Pact (SGP), put together a year later, set out the rules for national fiscal policy for both Eurozone and non-Eurozone EU member states. 
            Countries face a fine of 0.2% of GDP for failing to abide by it or 0.5% of GDP for repeatedly violating it.
            </li>
            <li>
            Protectionism can protect infant industries such as the Canadian technology industry in Waterloo in recent years through the development of various technology companies headquarters in the area such as Google. They also benefit domestic producers and jobs that can be taken by more efficient foreign producers. For instance, Canada can then benefit from exporting goods that they have a comparative advantage in more effectively as they do not need to compete with countries with an absolute advantage in manufacturing such as China.
            </li>
          </ol>
          <div className = 'flex flex-col h-[30rem] w-[50rem] m-10'>
            <img src = {Waterloo} className = 'h-[30rem] w-[50rem]'/>
            <img src = {MNC} className = 'h-[30rem] w-[50rem]'/>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default describe
