import { useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
import * as THREE from 'three'

export function Laptop({isOpen,...props}: {isOpen:boolean, screenview:string}) {
    const { nodes, materials } = useGLTF('./models/laptop.glb')
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
    const screen = screenLoader.load(props.screenview) // load img prop here
    const brightness = 0.3 // set brightness here 
    screen.flipY = false;
  
    return (
      <group {...props} dispose={null} position={[1, -1, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.04} >
          <motion.group position={[-0.03, 111.69, 2.84]} scale={3.37} initial={"closed"} animate={"open"} transition={{delay:0.5, duration:1}} variants={variants} >
            <mesh geometry={screenNode.geometry}  material={new THREE.MeshBasicMaterial({color: new THREE.Color(brightness, brightness, brightness), map: screen})} position={[0.01, -33.13, -0.84]} scale={0.3} /> 
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
  
  export function Mobile({isOpen,...props}: {isOpen:boolean, screenview:string}) {
    const { nodes, materials } = useGLTF('./models/mobile.glb')
    const screenNode = nodes.Screen as THREE.Mesh;
    const logo = nodes.Logo as THREE.Mesh;
    const frame = nodes.Frame as THREE.Mesh;  
  
    // reverse image prop to show full front 
    const screenLoader = new THREE.TextureLoader()
    const screen = screenLoader.load(props.screenview) // load img prop here 
    screen.flipY = false;
  
    const frameColor = new THREE.Color(0x383942);
  
    return (
      <group {...props} dispose={null} scale={3} position={[0, 1, 0]}>
        <mesh geometry={frame.geometry} material={new THREE.MeshBasicMaterial({ color: frameColor })} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={logo.geometry} material={materials.Logo} />
        <mesh geometry={screenNode.geometry} material={new THREE.MeshBasicMaterial({map: screen})} rotation={[0, -Math.PI / 2, 0]} />
      </group>
    )
  }