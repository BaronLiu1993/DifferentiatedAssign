import React from 'react'
import './claspp.css'
import Princeton from '../assets/Princeton.png'
import Stakeholder from '../assets/STAKEHOLDERS.jpg'
import Graph from '../assets/Graph.png'
import Flag from '../assets/flag.jpg'

function claspp() {
    async function Submit(e) {
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        fetch(
          "https://script.google.com/macros/s/AKfycbx2QR-TKj84iU2gdXitf2FixhPe_mFAig9xkFz9Pg5-1umvDLEjz70WBFr2n51bFrrC/exec",
          {
            method: "POST",
            body: formDatab
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
  return (
    <>
    <div id = 'bg-1' className = 'bg-[#101628] h-[260rem] flex-col flex items-center'>
      

      <div className = 'bg-[#101628] h-[60rem] w-[100rem] m-10 flex justify-center rounded-lg flex-col'>
        <div className = 'text-red-400 text-3xl font-bold font-nunito m-10' >Long Term and Short Term</div>
        <div className = 'text-white font-nunito'>
        <div className = 'flex justify-center space-x-5'>
            <img className = 'h-[30rem] w-[45rem] rounded-lg' src = {Princeton}/>
            <img className = 'h-[30rem] w-[45rem] rounded-lg' src = {Graph}/>
        </div>
        
            <div className = 'underline text-lg font-bold font-nunito m-5'>
                Short Term
            </div>
            <div className = 'm-5'>  
                Protectionist measures such as tariffs or quotas may provide short-term relief for domestic industries facing competition from imports. These measures can protect jobs and industries from foreign competition, at least temporarily, and may alleviate immediate economic pressures on certain sectors.
                Protectionist policies can sometimes lead to a reduction in trade deficits in the short term, as imports are restricted and domestic production is prioritized. This can provide a temporary boost to the domestic economy but may not address underlying issues contributing to the trade imbalance.
            </div>
        </div>
        <div className = 'text-white font-nunito'>
            <div className = 'underline text-lg font-bold font-nunito m-5'>
                Long Term
            </div>
            <div className = 'm-5'>  
            Free trade tends to promote long-term economic growth by encouraging specialization, innovation, and efficiency gains. Over time, countries that engage in free trade can benefit from increased productivity, technological advancement, and access to larger markets, leading to higher living standards.
            Innovation and Technological Progress: Free trade fosters innovation and technological progress by exposing domestic industries to global competition and knowledge exchange. Over the long term, this can lead to the development of new industries, products, and processes that drive economic growth and competitiveness.
            Free trade promotes global cooperation and stability by fostering economic interdependence among nations. Over time, countries that engage in free trade are more likely to work together towards common goals, reducing the risk of conflicts and promoting peaceful relations.

            </div>
        </div>
        
        
      </div>

      <div className = 'bg-[#101628] h-[70rem] w-[100rem] m-10 flex justify-center items-align rounded-lg flex-col'>
        <div className = 'text-red-400 text-3xl font-bold font-nunito m-10' >Long Term and Short Term</div>
        <div className = 'text-white font-nunito'>
            <div className = 'flex justify-center'>
            <img className = 'h-[30rem] w-[45rem] rounded-lg' src = {Stakeholder}/>
            </div>
        
            <div className = 'underline text-lg font-bold font-nunito m-5'>
                Consumer
            </div>
            <div className = 'm-5'>  
                Consumers benefit from access to a wide variety of goods at competitive prices under free trade. Protectionist measures can lead to higher prices for imported goods, reducing consumer choices and the  purchasing power. Consumers prioritize domestic industries and are willing to pay higher prices for locally produced goods.
            </div>
        </div>
        <div className = 'text-white font-nunito'>
            <div className = 'underline text-lg font-bold font-nunito m-5'>
                Investors and businesses
            </div>
            <div className = 'm-5'>  
                They are affected by trade policies that influence market access, competition, and supply chain dynamics. Free trade blocs can provide opportunities for businesses to expand into new markets and benefit from economies of scale. 
                Conversely, protectionist measures can disrupt supply chains and increase operating costs for businesses reliant on imports.
            </div>
        </div>
        <div className = 'text-white font-nunito'>
            <div className = 'underline text-lg font-bold font-nunito m-5'>
                Workers
            </div>
            <div className = 'm-5'>  
                Within industries affected by international trade are key stakeholders. Free trade can create opportunities for employment in export-oriented industries, but it can also lead to job displacement in sectors facing competition from imports. Workers may support protectionist measures to safeguard their jobs and livelihoods. In 2021, in the USA, export related industries supported 6.1% of the American workforce.
            </div>
        </div>
        <div className = 'text-white font-nunito'>
            <div className = 'underline text-lg font-bold font-nunito m-5'>
                Governments
            </div>
            <div className = 'm-5'>  
            They do not gain revenue from tariffs or from selling permits for the quota. Governments are also unable to protect domestic firms.
            </div>
        </div>
        
      </div>

      <div className = 'bg-[#101628] h-[80rem] w-[100rem] m-10 flex justify-center items-align rounded-lg flex-col'>
        <div className = 'text-red-400 text-3xl font-bold font-nunito m-10' >Pros and Cons</div>
        <div className = 'text-white font-nunito'>
            <div className = 'flex justify-center'> 
            <img className = 'h-[30rem] w-[50rem] rounded-lg' src = {Flag}/>    
            </div>
        
            <div className = 'underline text-lg font-bold font-nunito m-5'>
                Free Trade Pros:
            </div>
            <div className = 'm-5'>  
                Consumers benefit from access to a greater variety of goods at lower prices because of increased competition and efficiency.
                Free trade allows consumers to access products from around the world, leading to greater choice and diversity in the marketplace. 
            </div>
        </div>
        <div className = 'text-white font-nunito'>
            <div className = 'underline text-lg font-bold font-nunito m-5'>
                Pros of Protectionism:
            </div>
            <div className = 'm-5'>  
            Administrative barriers such as quality product standards protect consumers from potentially unsafe or low-quality imports that do not meet domestic standards.
            Protects small industries and domestic consumers. For instance, French cheeses made with raw instead of pasteurized milk must be aged least 60 days prior to being imported to the U.S. Due to the fact that producing many French kinds of cheese involves aging of 50 days or fewer, popular French cheeses are banned from the U.S., giving an advantage for U.S. producers
            Protectionism allows countries to protect their sovereignty and independence by controlling their own trade policies and economy. It also allows for a layer of national security to be added.
            Protectionism can help countries mitigate the risks associated with overreliance on foreign markets or resources, particularly in times of crisis.
            </div>
        </div>
        <div className = 'text-white font-nunito'>
            <div className = 'underline text-lg font-bold font-nunito m-5'>
                Cons of Free Trade
            </div>
            <div className = 'm-5'>  
                Reduced tariffs and trade barriers under free trade agreements may lead to decreased government revenue from customs duties and import taxes.
                Furthermore, implementing free trade agreements may face political opposition from domestic interest groups and industries that perceive themselves as negatively impacted.
                Free trade can exacerbate income inequality by disproportionately benefiting capital owners and skilled workers, while disadvantaged low-skilled workers and certain regions.
                The increased trade under free trade agreements can lead to environmental degradation through resource extraction, pollution, and unsustainable production practices.
            </div>
        </div>
        <div className = 'text-white font-nunito'>
            <div className = 'underline text-lg font-bold font-nunito m-5'>
                Cons of Protectionism
            </div>
            <div className = 'm-5'>  
            Protectionism can lead to inefficiencies in domestic industries by reducing competition, hindering innovation and technological progress. Companies have no incentive to invest in research and development of more efficient technology. 
            Protectionist measures may provoke retaliation from trading partners, leading to trade disputes, tariffs, and other barriers that harm domestic producers reliant on export markets.

            </div>
        </div>
      </div>
      <form action="#" onSubmit={(e) => Submit(e)} className="space-y-8 m-5">
            <div className = 'text-white font-nunito font-bold'>
                Critical Thinking Question and Response: Answer only one*
            </div>
            <ol className = 'text-red-400 font-nunito space-y-2 bg-[#101628] p-5 rounded-lg'>
                <li>How do differing political, social, and cultural characteristics among member countries affect the formation and functioning of trading blocs? Explore potential challenges in harmonizing policies and resolving conflicts within the bloc.</li>
                <li>Examine the role of trade protectionism within trading blocs. How do barriers to trade impact member countries' economies, industries, and consumers?</li>
                <li>Analyze the impact of trading blocs on political stability and economic cooperation among member countries. How does shared interdependency influence cooperation and the pursuit of common goals within the bloc?</li>
            </ol>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
              <input placeholder="Put your reponse here" name="Term" type="text" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white bg-red-400 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
    </div>
    </>
  )
}

export default claspp
