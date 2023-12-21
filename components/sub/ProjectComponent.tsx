"use client"

import React from 'react'
import { useState } from "react"
import { Canvas } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
import * as THREE from 'three'
import testIMG from '@/public/test.png' 

export function Laptop({isOpen,...props}: {isOpen:boolean}) {
  const { nodes, materials } = useGLTF('/laptop.glb')
  const screenNode = nodes.Screen as THREE.Mesh;
  const blackInsetNode = nodes.Black_Inset as THREE.Mesh;
  const rubberNode = nodes.Rubber as THREE.Mesh;
  const screenBackNode = nodes.Screen_Back as THREE.Mesh;
  const keyBoard = nodes.Keyboard as THREE.Mesh
  const touchPanel = nodes.Touch_Panel as THREE.Mesh
  const portS = nodes.Ports as THREE.Mesh
  const touchPad = nodes.Touchpad as THREE.Mesh
  const bodY = nodes.Body as THREE.Mesh

  // 
  const variants = {
          open: {rotateX:(0 * Math.PI) / 180, x:-0.03, y:111.69, z:2.84},                
          closed:{ rotateX:(105 * Math.PI) / 180, x:0, y:75, z:39}
  }

  // reverse image prop to show full front 
  const screenLoader = new THREE.TextureLoader()
  const screen = screenLoader.load(testIMG.src) // load img prop here 
  screen.flipY = false;

  return (
    <group {...props} dispose={null} position={[-0.03, -1, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.03} >
        <motion.group position={[-0.03, 111.69, 2.84]} scale={3.37} initial={"closed"} animate={"open"} transition={{delay:0.5, duration:1}} variants={variants} >
          <mesh geometry={screenNode.geometry}  material={new THREE.MeshBasicMaterial({map: screen})} position={[0.01, -33.13, -0.84]} scale={0.3} /> 
          <mesh geometry={blackInsetNode.geometry} material={materials['Display Rim 1']} position={[0.01, -33.13, -0.84]} scale={0.3} />
          <mesh geometry={rubberNode.geometry} material={materials['Display Rubber 1']} position={[0.01, -33.13, -0.84]} scale={0.3} />
          <mesh geometry={screenBackNode.geometry} material={materials['Body 2']} position={[0.01, -33.13, -0.84]} scale={0.3} />
        </motion.group>
        <mesh geometry={keyBoard.geometry} material={materials['Keyboard 2']} />
        <mesh geometry={touchPanel.geometry} material={materials['Touch Bar 1']} />
        <mesh geometry={portS.geometry} material={materials['Ports 1']} />
        <mesh geometry={touchPad.geometry} material={materials['Touchpad 1']} />
        <mesh geometry={bodY.geometry} material={materials['Body 3']} />
      </group>
    </group>
  )
}
const ProjectComponent = () => {
  const [isOpen] = useState(true)
  return (
    <div className="flex flex-col items-center">
      <div className="h-screen w-screen z-10">
        <Canvas>
          <ambientLight intensity={0.8} />
          <pointLight position={[10,10,50]} />
          <Laptop isOpen={isOpen}/>
          <PerspectiveCamera makeDefault position={[0,0,20]} />
          <OrbitControls enableZoom={false}/>
        </Canvas>
      </div>      
    </div>
  )
}

export default ProjectComponent
