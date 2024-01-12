"use client"

import React, { useState, useEffect, useRef } from 'react'
import HALO from 'vanta/dist/vanta.halo.min'
import * as THREE from "three";

const HaloBackground = (props:any) => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef<HTMLDivElement>(null);
  
   useEffect(() => {
       if (!vantaEffect) {
         setVantaEffect(
           HALO({
             el: vantaRef.current,
             THREE: THREE,
             mouseControls: true,
             touchControls: true,
             gyroControls: false,           
             minHeight: 1000,
             minWidth: 1000,           
             xOffset: 0.3,
             yOffset: 0.1,
             backgroundColor: "#181818",
             amplitudeFactor: 1.0,            
           })
         );
       }
       return () => {
         if (vantaEffect) vantaEffect.destroy();
       };
     }, [vantaEffect]);
  
  return (
      <div ref={vantaRef}></div>
  )
}

const HaloCanvas = () => (
    <div className='lg:block hidden'>
        <HaloBackground />
    </div>
)

export default HaloCanvas