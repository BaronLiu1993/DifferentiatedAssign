
import './App.css'
import Homepage from './sources/homepage.jsx'
import About from './sources/about.jsx'
import Projects from './sources/projects.jsx'
import Extra from './sources/extra.jsx'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  
 

  return (

        <Parallax pages = {4} id = 'bg-1' className = 'bg-[#101628] h-[300rem] flex-col flex items-center'>
          <ParallaxLayer offset = {0} className = 'flex justify-center items-center flex-col'>
            <Homepage />
          </ParallaxLayer>
          <ParallaxLayer offset = {1} className = 'flex justify-center items-center flex-col'>
            <About />
          </ParallaxLayer>
          <ParallaxLayer offset = {2} className = 'flex justify-center items-center flex-col' >
            <Extra />
          </ParallaxLayer>
          <ParallaxLayer offset = {3} className = 'flex justify-center items-center flex-col' >
            <Projects />
          </ParallaxLayer>
        </Parallax>
    
        
        

      
    
    
  )
}

export default App
