import { useGLTF, Decal } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
import { Mesh, Color, MeshBasicMaterial, TextureLoader } from "three";

export function Laptop({isOpen,...props}: {isOpen:boolean, screenview:string}) {
    const { nodes, materials } = useGLTF('./models/laptop.glb')
    const screenNode = nodes.Screen as Mesh;
    const blackInsetNode = nodes.Black_Inset as Mesh;
    const rubberNode = nodes.Rubber as Mesh;
    const screenBackNode = nodes.Screen_Back as Mesh;
    const keyBoard = nodes.Keyboard as Mesh
    const touchPanel = nodes.Touch_Panel as Mesh
    const portS = nodes.Ports as Mesh
    const touchPad = nodes.Touchpad as Mesh
    const bodY = nodes.Body as Mesh
  
    // 
    const variants = {
            open: {rotateX:(0 * Math.PI) / 180, x:-0.03, y:111.69, z:2.84},                
            closed:{ rotateX:(105 * Math.PI) / 180, x:0, y:75, z:39}
    }
  
    // reverse image prop to show full front 
    const screenLoader = new TextureLoader()
    const screen = screenLoader.load(props.screenview) // load img prop here
    const brightness = 0.3 // set brightness here 
    screen.flipY = false;
  
    return (
      <group {...props} dispose={null} position={[0, -2, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.04} >
          <motion.group position={[-0.03, 111.69, 2.84]} scale={3.37} initial={"closed"} animate={"open"} transition={{delay:0.5, duration:1}} variants={variants} >
            <mesh geometry={screenNode.geometry}  material={new MeshBasicMaterial({color: new Color(brightness, brightness, brightness), map: screen})} position={[0.01, -33.13, -0.84]} scale={0.3} /> 
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
    const screenLoader = new TextureLoader()
    const screen = screenLoader.load(props.screenview) // load img prop here 
    screen.flipY = false;
  
    const frameColor = new Color(0x383942);
  
    return (
      <group {...props} dispose={null} scale={3} position={[0, 1, 0]}>
        <mesh geometry={frame.geometry} material={new MeshBasicMaterial({ color: frameColor })} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={logo.geometry} material={materials.Logo} />
        <mesh geometry={screenNode.geometry} material={new MeshBasicMaterial({map: screen})} rotation={[0, -Math.PI / 2, 0]} />
      </group>
    )
  }
  
  export function Mobile2({isOpen,...props}: {isOpen:boolean, screenview:string}) {
    const { nodes, materials } = useGLTF('./models/mobile2.glb')  
    
    const A = nodes.UCttAeyROPsgmix as Mesh;
    const B = nodes.XbtrdVaOWYmkEiU as Mesh;
    const screenNode = nodes.YbXWdqEcjbfTKuN_0 as Mesh;
    const D = nodes.rrqFqyfckTuyRuI as Mesh;
    const E = nodes.lxsKwuOPNvmzBKg_0 as Mesh;
    const F = nodes.alSOKOYgFKIcUtR as Mesh;
    const G = nodes.FjhETOCBEeiBmch as Mesh;
    const H = nodes.AbxQOpRbGREHXRG as Mesh;
    const I = nodes.tWfjYtMZCfucxRt as Mesh;
    const J = nodes.vauUojKrKkLLDtY as Mesh;
    const K = nodes.yqmgDmvGsmuPwXx_0 as Mesh;
    const L = nodes.wjSYkRykuFHJNPw as Mesh;
    const M = nodes.rJeCWUNsVVXXAbI as Mesh;
    const N = nodes.rqSonbcVVSPWFfa_0 as Mesh;
    const O = nodes.OMkeKbwVHRBkBwM as Mesh;
    const P = nodes.DLfIUIalXuQjJsL as Mesh;
    const Q = nodes.KABLQLZRuEbcLWk as Mesh;
    const R = nodes.qjXEDwnnBYwWcJn as Mesh;
    const S = nodes.FGDSbHbILfUmiaH as Mesh;
    const T = nodes.jQXfQpudiYObSGp as Mesh;
    const U = nodes.knexoFNknstHgiO as Mesh;
    const V = nodes.FaUtifOQSMTXiZM as Mesh;
    const W = nodes.BhvzCWikxrVeDTV as Mesh;
    const X = nodes.MMkajxMNWrwGQfi as Mesh;
    const Y = nodes.YnrVhXEUDbStWCs as Mesh;
    const Z = nodes.ePYqawqlCJbCsNi as Mesh;
    const AA = nodes.RGbIswEcCTzqNsn_0 as Mesh;
    const AB = nodes.IuMgFUHIyRWENxG_0 as Mesh;
    const AC = nodes.dNDonqESZOxUcei_0 as Mesh;
    const AD = nodes.XeFHhVBtRZWPGxR as Mesh;
    const AE = nodes.nJYGEbPQybRBbiN as Mesh;
    const AF = nodes.JyAbjubWrOdfygC_0 as Mesh;
    const AG = nodes.nxFoHsySvfcSLvp as Mesh;
    const AH = nodes.oCklTGvTZoDWJrC_0 as Mesh;
    const AI = nodes.QaGkMzxNzKPcqRy as Mesh;
    const AJ = nodes.KUDomTaVduCyevu as Mesh;
    const AK = nodes.QOfJIBEXOvXfSUh as Mesh;
    const AL = nodes.RUMRNTkptJGDMpy as Mesh;
    const AM = nodes.aYjPeBrpBRopJbp as Mesh;
    const AN = nodes.BeQtuLXtpSTrzAH as Mesh;
    const AO = nodes.tWBbDznHihIxXam as Mesh;
    const AP = nodes.PLFTnNQeqVAxicS as Mesh;
    const AQ = nodes.GWEiavWnRxbogtw_0 as Mesh;
    const AR = nodes.RFqaqXLpuCDBIGV_0 as Mesh;
    const AS = nodes.JUTNJcWwqyxbGDZ_0 as Mesh;
    const AT = nodes.BDLCJBydsNjizog_0 as Mesh;
    const AU = nodes.zPPSOvNamLQVyvv as Mesh;
    const AV = nodes.YPGjoywokSeoQFr as Mesh;
    const AW = nodes.MoTJNOoMxqdxNvQ as Mesh;
    const AX = nodes.mZxrNiCtMrMjOMv as Mesh;
    const AY = nodes.tQCDizUpBYNcvFA as Mesh;
    const AZ = nodes.CAQeTxdpUcbxQyT as Mesh;
    const BA = nodes.qsTxqfACkdoWeLQ as Mesh;
    const BB = nodes.aVmapfDgqkPkjUf as Mesh;
    const BC = nodes.lgnGJJmNebyRbHq_0 as Mesh;

  
    // reverse image prop to show full front 
    const screenLoader = new TextureLoader()
    const screen = screenLoader.load(props.screenview) // load img prop here      
   
    return (
      <group {...props} dispose={null} position={[0, -4, 0]} rotation={[0, Math.PI, 0]}>
      <group scale={0.7}>
        <mesh geometry={A.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={B.geometry} material={materials.YiceMpFVTpnmoaq} />
        <mesh geometry={screenNode.geometry} material={new MeshBasicMaterial({map: screen})} />
        <mesh geometry={D.geometry} material={materials.CSNzlRnZuvCyxNL} />
        <mesh geometry={E.geometry} material={materials.KhJiSWFcsscOusf} />
        <mesh geometry={F.geometry} material={materials.sWxYOtHGWTcXRMx} />
        <mesh geometry={G.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={H.geometry} material={materials.IDdMwJVCyuFpUnA} />
        <mesh geometry={I.geometry} material={materials.fdfRsQCrfvPBPfQ} />
        <mesh geometry={J.geometry} material={materials.HvAGJeQTAiWbceX} />
        <mesh geometry={K.geometry} material={materials.bmOZLlCkCKhIIVe} />
        <mesh geometry={L.geometry} material={materials.KxzouvBYEgdZhMo} />
        <mesh geometry={M.geometry} material={materials.psePdsxZprlxGrw} />
        <mesh geometry={N.geometry} material={materials.jFPFAvCbiqflbQV} />
        <mesh geometry={O.geometry} material={materials.IkWzRHNnDaKQXIi} />
        <mesh geometry={P.geometry} material={materials.pBMikDFQfUOsKkr} />
        <mesh geometry={Q.geometry} material={materials.fdfRsQCrfvPBPfQ} />
        <mesh geometry={R.geometry} material={materials.tfbCjiZQaZkmtHx} />
        <mesh geometry={S.geometry} material={materials.tfbCjiZQaZkmtHx} />
        <mesh geometry={T.geometry} material={materials.sWxYOtHGWTcXRMx} />
        <mesh geometry={U.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={V.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={W.geometry} material={materials.LtesZnUOMbBEAoi} />
        <mesh geometry={X.geometry} material={materials.LtesZnUOMbBEAoi} />
        <mesh geometry={Y.geometry} material={materials.EJpkIDZfhPDUzel} />
        <mesh geometry={Z.geometry} material={materials.CSNzlRnZuvCyxNL} />
        <mesh geometry={AA.geometry} material={materials.FlDKBWPodPcEeGy} />
        <mesh geometry={AB.geometry} material={materials.LcWBQfBvCzxThpp} />
        <mesh geometry={AC.geometry} material={materials.LUbRMhkIhuekQRK} />
        <mesh geometry={AD.geometry} material={materials.tfbCjiZQaZkmtHx} />
        <mesh geometry={AE.geometry} material={materials.tDZQoaroJfCIQtF} />
        <mesh geometry={AF.geometry} material={materials.jFPFAvCbiqflbQV} />
        <mesh geometry={AG.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={AH.geometry} material={materials.tfbCjiZQaZkmtHx} />
        <mesh geometry={AI.geometry} material={materials.iEhZxWeNLTDdgxm} />
        <mesh geometry={AJ.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={AK.geometry} material={materials.vsSJQngPxBJTVZb} />
        <mesh geometry={AL.geometry} material={materials.LJBezuBxKRoHnAp} />
        <mesh geometry={AM.geometry} material={materials.xHgtbqndQshkTKG} />
        <mesh geometry={AN.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={AO.geometry} material={materials.OStzgRHtVBLWwiD} />
        <mesh geometry={AP.geometry} material={materials.BLpVAsLWNICZYGG} />
        <mesh geometry={AQ.geometry} material={materials.FsunUcGyajFpQmW} />
        <mesh geometry={AR.geometry} material={materials.nJRBoEsOhzMSqCz} />
        <mesh geometry={AS.geometry} material={materials.LJBezuBxKRoHnAp} />
        <mesh geometry={AT.geometry} material={materials.fGwijctGaiRaYJC} />
        <mesh geometry={AU.geometry} material={materials.qEGySvwsouNnVcn} />
        <mesh geometry={AV.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={AW.geometry} material={materials.IBtgGxCVyZhjKZM} />
        <mesh geometry={AX.geometry} material={materials.WqbAhnIPgrrhfXS} />
        <mesh geometry={AY.geometry} material={materials.LtesZnUOMbBEAoi} />
        <mesh geometry={AZ.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={BA.geometry} material={materials.IBtgGxCVyZhjKZM} />
        <mesh geometry={BB.geometry} material={materials.WqbAhnIPgrrhfXS} />
        <mesh geometry={BC.geometry} material={materials.rNCplyWedyfORFh} />
      </group>
    </group>
    )
  }