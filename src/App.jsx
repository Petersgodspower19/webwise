import React, { useEffect } from 'react'
import {BrowserRouter, Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import AppLayout from './AppLayout'
import Projetcs from './pages/Projetcs'
import Services from './pages/Services'
import Contact from './pages/Contact'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AppLayout />}>
    <Route index element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/projects' element={<Projetcs />} />
    <Route path='/services' element={<Services />} />
    <Route path='/contact' element={<Contact />} />
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
