import React, { useEffect } from 'react'
import Nav from './Components/Nav'
import MainBg from './Components/MainBg'
import AboutSection from './Components/AboutSection'
import PortFolio from './Components/PortFolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ScrolBtn from './Components/ScrolBtn'

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
useEffect(()=>{
  AOS.init({
    duration:800,
    offset:150,
    easing:"ease"
  });
},[])
  return (
    <>
      <Nav/>
      <MainBg/>
      <AboutSection/>
      <PortFolio/>
      <Contact/>
      <Footer/>
      <ScrolBtn/>
    </>
  )
}

export default App
