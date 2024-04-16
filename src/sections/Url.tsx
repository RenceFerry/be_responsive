import { Logo, Console } from '../constants/Svg.tsx'
import { useState } from 'react'
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

// @ts-ignore
const Url: React.FC<{ setTheme: any, dimen: any, setUrl: any }> = ({setTheme, dimen, setUrl, theme}) => {
  const [inputUrl, setInputUrl] = useState('')
  const [clmg, setClmg] = useState('')
  
  window.addEventListener("message", function(event) {
    setClmg(event.data)
    console.log(event.data)
  })
  
  return (
    <div className='url bg-bg text-color1 py-3 w-screen flex flex-row items-center'>
      <div onClick={()=>{
        setTheme()
      }} className="w-10 p-0 mx-3 h-10 cursor-pointer">
        <Logo />
      </div>
      <input onChange={(e)=>{
        setInputUrl(e.target.value)
      }} type="text" placeholder='http://' className='border-none bg-bg2 text-color1 w-[30%] focus:outline-none h-10 px-2 rounded-tl rounded-bl'/>
      <button onClick={(e)=>{
        setUrl(inputUrl)
        e.target.classList.add('clicked2')
        setTimeout(()=>{
          e.target.classList.remove('clicked2')
        }, 100) 
      }} className='border-none w-[15%] h-10 rounded-tr rounded-br bg-color2 text-black'>Go!</button>
      <div className="w-6 h-6 cursor-pointer ml-3">
        <Drawer>
          <DrawerTrigger><Console/></DrawerTrigger>
          <DrawerContent className={`${theme ? 'dark' : 'light' } bg-bg1 text-color1`}>
            <DrawerHeader>
              <DrawerTitle>Console</DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex justify-center items-center w-full">
                <div className="p-3 bg-bg3 flex-1 h-60 overflow-scroll">
                  <span>{'>>  '}</span><span>{clmg}</span>
                </div>
              </div>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        
      </div>
      <h2 className='text-color1 mx-3'>{dimen[0]}×{dimen[1]}</h2>
    </div>
  )
}

export default Url