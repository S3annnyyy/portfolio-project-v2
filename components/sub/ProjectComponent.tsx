"use client"

import React from 'react'
import { useState } from "react"
import { Canvas } from '@react-three/fiber'
import { Laptop, Mobile } from './ModelComponents'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

const ProjectComponent = (props: {screen: string, platform: string}) => {
  const [isOpen] = useState(true) 
  return (
    <div className="flex flex-col items-center">
      <div className="z-10 md:w-screen md:h-screen">
        <Canvas>
          <ambientLight intensity={1} />
          <pointLight position={[10,10,50]} />
          <mesh>           
            <meshStandardMaterial />
            {props.platform === "mobile" ? (
              <Mobile isOpen={isOpen} screenview={props.screen}/>
            ) : (
              <Laptop isOpen={isOpen} screenview={props.screen}/>
            )}
            <PerspectiveCamera makeDefault position={[0,2,20]} />
            <OrbitControls 
              enableZoom={false} 
              minAzimuthAngle={-(10 * Math.PI) / 180} // Limit horizontal rotation to -45 degrees
              maxAzimuthAngle={(10 * Math.PI) / 180}  // Limit horizontal rotation to 45 degrees
              maxPolarAngle={Math.PI/2} // Limit vertical rotation to not go below ground            
              rotateSpeed={0.2}
            />            
           </mesh>
        </Canvas>
      </div>      
    </div>
  )
}

export default ProjectComponent
