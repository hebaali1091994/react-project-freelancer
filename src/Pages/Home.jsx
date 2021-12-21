

import React from 'react'

import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Something from '../Components/Something'
import Tracks from '../Components/Tracks'
import Image from '../Components/Image'
import SlideHome from '../Components/slideHome'
import Getfreelancer from '../Components/Getfreelancer'
export default function Home() {
    return (
        <div>
         <Header/>   
         <Navbar/> 
         <SlideHome/>
         <Something/>
         <Getfreelancer/>
         <Tracks/>
         <Image/>
         <Footer/>  
        </div>
    )
}
