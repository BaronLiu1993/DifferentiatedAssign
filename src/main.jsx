import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Claspp from './pages/claspp.jsx'
import Describe from './pages/describe.jsx'
import Navbar from './navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path = '/' element = {<App />}/>
        <Route path = '/claspp' element = {<Claspp />} />
        <Route path = '/describe' element = {<Describe />} />
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
