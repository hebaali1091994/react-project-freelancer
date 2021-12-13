
import React from 'react'

import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Something from '../Components/Something'
import Tracks from '../Components/Tracks'
import Image from '../Components/Image'
import SlideHome from '../Components/slideHome'
export default function Home() {
    return (
        <div>
         <Header/>   
         <Navbar/> 
         <SlideHome/>
         <Something/>
         <Tracks/>
         <Image/>
         <Footer/>  
        </div>
    )
}
