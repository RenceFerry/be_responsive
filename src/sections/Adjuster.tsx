import { useState, useRef, useLayout } from 'react'
import React from 'react'
import { Mobile, Tablet, Desktop, Laptop, Btn, Range, Screens } from "../constants/Svg.tsx"
import { smartphone, tablet, laptop, desktop } from '../constants/ScreenSizes.ts'
import Dropdown from './Dropdown.tsx'
//import { Button } from "@/components/ui/button"


// @ts-ignore
const Adjuster: React.FC<{ theme: any, setDimen: any, setScale: any, dimen: any }> = ({theme, setDimen, setScale, dimen, setNewScale, screenWid}) => {
  
  const [showAd2, setShowAd2] = useState(false)
  const [showAd, setShowAd] = useState(true)
  const [fixedDimen, setFixedDimen] = useState([[360,800],[768,1024],[1366,768],[1920,1080]])
  const [activeDevice, setActiveDevice] = useState('')
  let screenHei = window.screen.height - window.screen.height*0.5
  const hInput = useRef<HTMLInputElement>(null)
  const wInput = useRef<HTMLInputElement>(null)
  const [scaleInput, setScaleInput] = useState(100)
  
  const setNewDimen = (w: any,h: any) => {
    if(showAd2){
      let range = Math.abs(dimen[0] - w)
      let multi = range > 2000 ? 50 : range > 1000 ? 30 : 10 
      let dimenWid = Math.floor(dimen[0]/multi)
      let wid = Math.floor(w/multi)
      let animate = setInterval(()=>{
        if(dimenWid>wid){
          dimenWid--
          setDimen([dimenWid*multi, h, true])
          setScale(screenWid/(dimenWid*multi))
        }else if(dimenWid<wid){
          dimenWid++
          setDimen([dimenWid*multi, h, true])
          setScale(screenWid/(dimenWid*multi))
        }else{
          setDimen([w, h, false])
          setScale(screenWid/w)
          clearInterval(animate)
        }
      }, 10)
    }else{
      let newW = wInput.current.value / 100 * 3000 + 320;
      let newH = hInput.current.value/100*screenHei + 320
      setDimen([Math.floor(newW), Math.floor(newH), false])
      setScale(screenWid/newW)
    }
  }
  
  return (
    <div style={{
      bottom: `${showAd ? '0' : '-15%'}`
    }} className={`adjuster h-[15%] w-full flex flex-col items-center bg-bg2 rounded-tl-3xl fixed trans`}>
      <div className="w-full flex z-[-30] justify-center">
        <div style={{opacity: 0.8}} onClick={()=>{setShowAd(!showAd)}} className={`h-14 w-36 translate-y-[-80%] trans bg-bg2 rounded-tl-full rounded-tr-full bottom-64 `}>
          <Btn className={`trans ${!showAd && 'rotate-180'}`} />
        </div>
        <div className="w-full items-center flex trans rounded-tr-3xl rounded-tl-3xl bg-bg2 translate-y-[-80%]">
          <h3 className='text-color1 mx-4 font-bold'>Scale:</h3>
          <input type="range" onChange={(e)=>setNewScale(e)} className='flex-1 mr-8' />
        </div>
      </div>
      <div className="flex flex-row w-full h-full items-center mt-[-56px]">
        <div className={`${showAd2 ? 'hidden' : 'flex'} h-full justify-center flex-col flex-1 mx-8 ml-4`}>
          <div className="flex mb-6">
            <h3 className="font-bold w-10 text-color1 mr-4">Width:</h3>
            <input ref={wInput} onChange={()=>{
              setNewDimen(0,0)
              setActiveDevice('')
            }}  type="range" className='w-full flex-1'/>
          </div>
          <div className="flex">
            <h3 className="font-bold w-10 text-color1 mr-4">Height:</h3>
            <input ref={hInput} onChange={()=>{
              setNewDimen(0,0)
              setActiveDevice('')
            }} type="range" className='w-full flex-1'/>
          </div>
        </div>
        <div className={`${showAd2 ? 'flex' : 'hidden'} flex-col flex-1`}>
        
          <div className="flex flex-row w-full mt-0 pt-0 text-c">
            <div className="mx-5 flex justify-center flex-1 cursor-pointer text-color3">
              <Dropdown setActiveDevice={setActiveDevice} fixedDimen={fixedDimen} setFixedDimen={setFixedDimen} setNewDimen={setNewDimen} brands={smartphone} theme={theme} device='Mobile'/>
            </div>
            <div className="mx-5 flex justify-center flex-1 cursor-pointer text-color3">
              <Dropdown setActiveDevice={setActiveDevice} fixedDimen={fixedDimen} setFixedDimen={setFixedDimen} setNewDimen={setNewDimen} brands={tablet} theme={theme} device='Tablet'/>
            </div>
            <div className="mx-5 flex justify-center flex-1 cursor-pointer text-color3">
              <Dropdown setActiveDevice={setActiveDevice} fixedDimen={fixedDimen} setFixedDimen={setFixedDimen} setNewDimen={setNewDimen} brands={laptop} theme={theme} device='Laptop'/>
            </div>
            <div className="mx-5 flex justify-center flex-1 cursor-pointer text-color3">
              <Dropdown setActiveDevice={setActiveDevice} fixedDimen={fixedDimen} setFixedDimen={setFixedDimen} setNewDimen={setNewDimen} brands={desktop} theme={theme} device='Desktop'/>
            </div>
          </div>
          
          <div className="flex flex-row w-full mb-3 mt-0 pt-0 text-color4 justify-center">
            <div className=" justify-center flex-1 flex">{fixedDimen[0][0]}×{fixedDimen[0][1]}</div>
            <div className=" justify-center flex-1 flex">{fixedDimen[1][0]}×{fixedDimen[1][1]}</div>
            <div className=" justify-center flex-1 flex">{fixedDimen[2][0]}×{fixedDimen[2][1]}</div>
            <div className=" justify-center flex-1 flex">{fixedDimen[3][0]}×{fixedDimen[3][1]}</div>
          </div>
          
          <div className="flex flex-row w-full">
            <div onClick={()=>{
              setNewDimen(fixedDimen[0][0],fixedDimen[0][1])
              setActiveDevice('mobile')}} className="flex-1  cursor-pointer mx-7">
              <Mobile activeDevice={activeDevice} />
            </div>
            <div onClick={()=>{
              setNewDimen(fixedDimen[1][0],fixedDimen[1][1])
              setActiveDevice('tablet')}} className="flex-1  cursor-pointer mx-7">
              <Tablet activeDevice={activeDevice} />
            </div>
            <div onClick={()=>{
              setNewDimen(fixedDimen[2][0],fixedDimen[2][1])
              setActiveDevice('laptop')}} className="flex-1  cursor-pointer mx-7">
              <Laptop activeDevice={activeDevice} />
            </div>
            <div onClick={()=>{
              setNewDimen(fixedDimen[3][0],fixedDimen[3][1])
              setActiveDevice('desktop')}} className="flex-1  cursor-pointer mx-7">
              <Desktop activeDevice={activeDevice} />
            </div>
            
          </div>
        </div>
        <button className='bg-color2 text-black rounded h-10 w-10 mr-5' onClick={()=>setShowAd2(!showAd2)}>
          {showAd2 ? <Range /> : <Screens />}
        </button>
      </div>
      
    </div>
  )
}

export default Adjuster



